import { collection, doc, setDoc } from "firebase/firestore/lite";
import { useContext, useReducer } from "react";
import { AuthContext } from "../../auth";
import { firebaseDB } from "../../firebase/config";
import { reviewReducer } from "../reducers";
import { reviewTypes } from "../types";
import { ReviewContext } from "./ReviewContext";

const initialState = {
  review: [],
};

const ReviewProvider = ({ children }) => {
  const [reviewState, dispatch] = useReducer(reviewReducer, initialState);
  const { user } = useContext(AuthContext);

  const createReview = async (review) => {
    try {
      const newDoc = doc(
        collection(firebaseDB, `${user.uid}/product-hunter/reviews`)
      );
      await setDoc(newDoc, review);
      review.id = newDoc.id;

      const action = {
        type: reviewTypes.createReview,
        payload: review,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        ...reviewState,
        createReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
