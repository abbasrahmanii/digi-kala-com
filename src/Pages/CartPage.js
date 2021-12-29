import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeCart } from "../redux";
import styled from "styled-components";
import Layout from "../Components/Layout";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const removeCartHandler = (product) => {
    dispatch(removeCart(product));
  };

  const updateCartHandler = (e, product) => {
    const quantity = parseInt(e.target.value);
    const newProduct = { ...product, quantity };
    dispatch(addToCart(newProduct));
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
    <Layout>
      <CartStyled>
        <CartTable>
          <table>
            <thead className="table-header-group">
              <tr className="table-row">
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <th>
                    <img src={item.image} alt={item.name} />
                  </th>
                  <th>{item.name}</th>
                  <th>
                    <select
                      name="quantity"
                      id="quantity"
                      value={item.quantity}
                      onChange={(e) => updateCartHandler(e, item)}
                    >
                      {[...Array(item.progress).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th>{item.price}</th>
                  <button onClick={() => removeCartHandler(item)}>x</button>
                </tr>
              ))}
            </tbody>
          </table>
        </CartTable>
        <Credit>
          <h1>مبلغ</h1>
          <p>تعداد: {cart.reduce((a, c) => a + c.quantity, 0)}</p>
          <p>
            جمع قیمت بدون تخفیف:{" "}
            {cart.reduce((a, c) => a + c.quantity * c.beforePrice, 0)}
          </p>
          <p>
            جمع قیمت با تخفیف:{" "}
            {cart.reduce((a, c) => a + c.quantity * c.price, 0)}
          </p>
        </Credit>
      </CartStyled>
    </Layout>
  );
};

const CartStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CartTable = styled.div`
  width: 60%;
  table {
    width: 100%;
    thead tr {
      height: 4rem;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: salmon;
      border: none;
      cursor: pointer;
    }
  }
  img {
    width: 200px;
    height: 200px;
  }
`;
const Credit = styled.div`
  width: 30%;
`;

export default CartPage;
