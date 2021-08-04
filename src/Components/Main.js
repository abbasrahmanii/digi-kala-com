import React, { useState } from "react";
import headerPic from "../images/asset 17.jpeg";
import gif from "../images/asset 18.gif";

import sectionPic from "../images/asset 19.jpeg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import SliderContent from "./SliderContent";
import Example from "./Example";

const Main = () => {
  const [transform, useTransform] = useState({
    translate: 0,
    transition: 0.5,
  });
  const { translate, transition } = transform;
  // console.log(SlideArrays);
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
          <a href="#">
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
