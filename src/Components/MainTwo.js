import React from "react";
import { Link } from "react-router-dom";
import Pic1 from "../images/asset 35.jpeg";
import Pic2 from "../images/asset 34.jpeg";
import Pic3 from "../images/asset 36.jpeg";
import Pic4 from "../images/asset 37.jpeg";
import styled from "styled-components";

const MainTwo = () => {
  return (
    <Main>
      <Pics>
        <Link to="/">
          <img src={Pic1} alt="pic1" />
        </Link>
        <Link to="/">
          <img src={Pic2} alt="pic2" />
        </Link>
        <Link to="/">
          <img src={Pic3} alt="pic3" />
        </Link>
        <Link to="/">
          <img src={Pic4} alt="pic4" />
        </Link>
      </Pics>
    </Main>
  );
};

const Main = styled.main`
  min-height: 30vh;
  width: 100%;
  background: #f1f1f1;
  padding: 2rem 0;
`;
const Pics = styled.div`
  width: 85%;
  margin: 0.5rem auto;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  a {
    margin-right: 1.5rem;
    &:first-child {
      margin-right: 0rem;
    }
    img {
      object-fit: cover;
      width: 100%;
      border-radius: 15px;
    }
  }
`;

export default MainTwo;
