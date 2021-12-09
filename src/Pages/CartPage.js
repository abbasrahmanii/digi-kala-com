import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart } from "../redux";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const removeCartHandler = (product) => {
    dispatch(removeCart(product));
  };

  if (cart.length === 0) {
    return (
      <div>
        <h1>Cart is Empty</h1>
        <Link to="/">
          <a>خانه</a>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p>cart</p>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          <button onClick={() => removeCartHandler(item)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
