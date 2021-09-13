import React from "react";
import headerPic from "../images/asset 17.jpeg";
import gif from "../images/asset 18.gif";

import sectionPic from "../images/asset 19.jpeg";
import styled from "styled-components";

import Example from "./Example";

const Main = () => {
  return (
    <MainStyled>
      <header>
        <a href="#">
          <img src={headerPic} alt="hi" />
        </a>
      </header>
      <section>
        <MainSlider>
          <Example />
        </MainSlider>
        <div className="left">
          <a href="#">
            <img src={gif} alt="" />
          </a>
          <a href="https://www.digikala.com/product-list/plp_8074037/?pageno=2&sortby=20&promo_name=%DA%A9%D9%81%D8%B4%D8%AA+%D8%B1%D9%88+%DA%A9%D8%B4%D9%81+%DA%A9%D9%86%21&promo_position=home_left_banner_bottom&promo_creative=77966&bCode=77966">
            <img src={sectionPic} alt="" />
          </a>
        </div>
      </section>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  min-height: 75vh;
  width: 100%;
  background: #f1f1f1;
  header {
    display: block;
    width: 85%;
    margin: 0rem auto;
    padding: 2rem 0rem 1rem 0rem;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 15px;
    }
  }
  section {
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 0rem auto;
    padding: 1rem 0rem;
    .left {
      width: 33.5%;
      a {
        img {
          width: 100%;
          object-fit: cover;
          border-radius: 15px;
        }
        &:first-child {
          margin-bottom: 0.7rem;
        }
      }
    }
  }
`;
const MainSlider = styled.div`
  overflow: hidden;
  position: relative;
  width: 840px;
  height: 100%;
  display: flex;
  border-radius: 15px;
`;

export default Main;
