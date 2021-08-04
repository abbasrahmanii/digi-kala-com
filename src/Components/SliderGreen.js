import React, { useState, useEffect } from "react";
import wow from "../images/asset 39.png";
import styled from "styled-components";
// import TestTwo from "./TestTwo";
import SliderTest from "./SliderTest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SlideArrays from "./SlideArrays";

const SliderGreen = () => {
  const [translate, setTranslate] = useState(0);
  const [sliderGreen, setSliderGreen] = useState(SlideArrays.itemsGreen);
  const [opacityLeft, setOpacityLeft] = useState(1);
  const [opacityRight, setOpacityRight] = useState(1);

  const arrowRightHandler = () => {
    if (translate !== 0) {
      setTranslate(translate - 25.5);
    }
  };
  const arrowLeftHandler = () => {
    if (translate !== (sliderGreen.length - 4) * 25.5) {
      setTranslate(translate + 25.5);
    }
  };

  useEffect(() => {
    if (translate !== 0) {
      // setOpacityLeft(0.05);
      setOpacityRight(1);
    } else {
      // setOpacityLeft(1);
      setOpacityRight(0.05);
    }
    if (translate !== (sliderGreen.length - 4) * 25.5) {
      // setOpacityRight(0.05);
      setOpacityLeft(1);
    } else {
      // setOpacityRight(1);
      setOpacityLeft(0.05);
    }
  }, [translate]);

  return (
    <Slider>
      <section>
        <Right>
          <a href="#">
            <img src={wow} alt="" />
          </a>
          <a href="#">مشاهده همه</a>
        </Right>
        <Left>
          <FontAwesomeIcon
            className="icon icon1"
            cursor="pointer"
            icon={faChevronRight}
            size="2x"
            onClick={arrowRightHandler}
            style={{ opacity: `${opacityRight}` }}
          />
          <SliderTest translate={translate} sliderGreen={sliderGreen} />
          {/* <TestTwo translate={translate} /> */}
          <FontAwesomeIcon
            className="icon icon2"
            cursor="pointer"
            icon={faChevronLeft}
            size="2x"
            onClick={arrowLeftHandler}
            style={{ opacity: `${opacityLeft}` }}
          />
        </Left>
      </section>
    </Slider>
  );
};

const Slider = styled.main`
  width: 100%;
  min-height: 55vh;
  background: #6bb927;
  section {
    width: 85%;
    margin: 0rem auto;
    padding: 2rem 0;
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
  position: relative;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  .icon1 {
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    z-index: 80;
  }
  .icon2 {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(50%, -50%);
  }
`;
export default SliderGreen;
