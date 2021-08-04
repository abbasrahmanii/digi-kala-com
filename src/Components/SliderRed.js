import React from "react";
import wow from "../images/asset 20.png";
import Test from "./Test";

import styled from "styled-components";

const SliderRed = () => {
  return (
    <Slider>
      <section>
        <Right>
          <a href="#">
            <img src={wow} alt="" />
          </a>
          <a href="#">مشاهده همه </a>
        </Right>
        <Left>
          <Test />
        </Left>
      </section>
    </Slider>
  );
};

const Slider = styled.main`
  width: 100%;
  min-height: 55vh;
  background: #ef394e;
  section {
    width: 85%;
    margin: 0rem auto;
    padding: 2rem 0rem;
    display: flex;
    flex-direction: row;
  }
`;
const Right = styled.main`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 1.5rem;
  a img {
    width: 100%;
    margin-top: 1rem;
    object-fit: cover;
  }
  a:nth-child(2) {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    border: 1px solid #fff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin: 0rem auto;
  }
`;
const Left = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-size: 10rem; */
  div {
    width: 23%;
    height: 100%;
    border-radius: 10px;
    /* font-size: 1rem; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export default SliderRed;
