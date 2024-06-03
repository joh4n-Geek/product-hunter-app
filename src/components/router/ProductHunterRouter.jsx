import { Route, Routes } from "react-router-dom";
import UserProducts from "../user/UserProducts";
import UserProfile from "../user/UserProfile";
import NewProduct from "../product/NewProduct";

const ProductHunterRouter = () => {
  return (
    <Routes>
      <Route 
        path="/user-products" 
        element={
          <UserProducts />
        }
      ></Route>
            <Route 
        path="/user-profile" 
        element={
          <UserProfile />
        }
      ></Route>
            <Route 
        path="/new-product" 
        element={
          <NewProduct />
        }
      ></Route>
    </Routes>
  );
};

export default ProductHunterRouter;