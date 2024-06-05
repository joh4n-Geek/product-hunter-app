import { productTypes } from "../types";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case productTypes.createProduct:
      return {
        ...state,
        product: state.product.push(action.payload)
      };
    case productTypes.updateProduct:
      break;
    case productTypes.error:
      break;
    default:
      return state;
  }
};
