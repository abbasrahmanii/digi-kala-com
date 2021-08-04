import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import logo from "../images/asset 73.svg";

const Nav = () => {
  return (
    <NavBar>
      <Right>
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <input type="text" placeholder="جستجو در دیجی کالا ..." />
      </Right>
      <Left>
        <div className="login">
          <FontAwesomeIcon icon={faUser} color="#616161" />
          <span>ورود به حساب کاربری</span>
        </div>
        <span className="line"></span>
        <div className="shop">
          <FontAwesomeIcon icon={faShoppingCart} color="#616161" />
        </div>
      </Left>
    </NavBar>
  );
};

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  min-height: 5vh;
  margin: 0 auto;
  padding: 0.3rem 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 7px 8px 0 rgb(0 0 0 / 4%);
  z-index: 20;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55%;
  padding: 0.5rem;
  input {
    width: 80%;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    border: 1px solid #f0f0f1;
    background-color: #f0f0f1;
    outline: none;
    &::placeholder {
      color: #616161;
    }
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #616161;
  width: 15%;
  padding: 0.3rem;
  .login {
    width: 70%;
    display: flex;
    justify-content: space-between;
    border: 1px solid #aaaaaa;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    span {
      color: #616161;
      font-size: 0.8rem;
    }
  }
  .line {
    display: block;
    width: 0.08rem;
    height: 2rem;
    background-color: #616161;
  }
`;

export default Nav;
