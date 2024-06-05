import { reviewTypes } from "../types";

export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case reviewTypes.createReview:
      return {
        ...state,
        review: state.review.push(action.payload),
      };
    case reviewTypes.error:
      break;
    default:
      return state;
  }
};
