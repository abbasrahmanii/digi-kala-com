import { ADD_TO_CART, REMOVE_CART } from "./actionTypes";
import { allProduct } from "../data";
import Cookies from "js-cookie";

const initialState = {
  products: allProduct(),
  cart: Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existItem = state.cart.find((item) => item.name === newItem.name);
      const cart = existItem
        ? state.cart.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart, newItem];
      Cookies.set("cart", JSON.stringify(cart));
      return {
        ...state,
        cart,
      };
    case REMOVE_CART: {
      const cart = state.cart.filter((item) => item.id !== action.payload.id);
      Cookies.set("cart", JSON.stringify(cart));
      return {
        ...state,
        cart,
      };
    }
    default:
      return state;
  }
};
export default reducer;
