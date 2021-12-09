import { ADD_TO_CART } from "./actionTypes";
import { REMOVE_CART } from "./actionTypes";
// import { ARROW_LEFT_RED } from "./actionTypes";
// import { ARROW_RIGHT_GREEN } from "./actionTypes";
// import { ARROW_LEFT_GREEN } from "./actionTypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const removeCart = (product) => ({
  type: REMOVE_CART,
  payload: product,
});
