import React from "react";
import styled from "styled-components";
import digikala from "../images/asset 86.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <Header>
        <div>
          <img src={digikala} alt="logo" />
          <p>
            <span>تلفن پشتیبانی: 61930000 - 021</span>
            <span>|</span>
            <span>هفت روز هفته، 24 ساعت شبانه روز پاسخگوی شما هستیم</span>
          </p>
        </div>
        <a href="#">بازگشت به بالا</a>
      </Header>
      {/* <Cards></Cards> */}
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  display: flex;
  width: 100%;
  min-height: 70vh;
  background-color: #fff;
  margin-top: 2rem;
  padding: 3rem;
  border-top: 1px solid #5f5f5f;
`;

const Header = styled.div`
  min-height: 15vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  div {
    display: flex;
    flex-direction: column;
    img {
      width: 20%;
      margin-bottom: 1.5rem;
    }
    p {
      span {
        margin-left: 1rem;
      }
    }
  }
  a {
    color: #9d9d9e;
    font-weight: bold;
    border: 1px solid #9d9d9e;
    border-radius: 10px;
    padding: 0.5rem 1rem;
  }
`;

export default Footer;
