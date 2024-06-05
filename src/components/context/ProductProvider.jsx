import { collection, doc, setDoc } from "firebase/firestore/lite";
import { useContext, useReducer } from "react";
import { AuthContext } from "../../auth";
import { firebaseDB } from "../../firebase/config";
import { productReducer } from "../reducers";
import { productTypes } from "../types";
import { ProductContext } from "./ProductContext";

const initialState = {
  // Ojo cambiar
  games: [],
};

const ProductProvider = ({ children }) => {
  const [productState, dispatch] = useReducer(productReducer, initialState);
  const { user } = useContext(AuthContext);

  // const getProducts = async () => {
  //   try {
  //     // const queryProducts = query(collection(firebaseDB, 'products'));
  //     const querySnapshot = await getDocs(collection(firebaseDB, 'products'));
  //     return querySnapshot;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const createProduct = async (product) => {
    try {
      // Create products collection in firestore
      const newDoc = doc(
        collection(firebaseDB, `${user.uid}/product-hunter/products`)
      );
      await setDoc(newDoc, product);
      product.id = newDoc.id;

      const action = {
        type: productTypes.createProduct,
        payload: product,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        ...productState,
        createProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
