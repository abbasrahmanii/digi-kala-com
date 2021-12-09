import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import wow from "../../images/asset 20.png";
import styled from "styled-components";
import SliderTestRed from "./SliderTestRed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Data } from "../../data";

const SliderRed = (props) => {
  const [translateR, setTranslateR] = useState(0);
  const [opacityLeftR, setOpacityLeftR] = useState(1);
  const [opacityRightR, setOpacityRightR] = useState(0.1);

  const arrowRightHandler = () => {
    if (translateR !== 0) {
      setTranslateR((prev) => prev - 25.5);
      setOpacityLeftR(1);
    }
  };

  const arrowLeftHandler = () => {
    if (translateR !== 102) {
      setTranslateR((prev) => prev + 25.5);
      setOpacityRightR(1);
    }
  };

  // const sliderRed = Data.itemsRed;
  const sliderRed = Data.products.filter(
    (product) => product.category === "Red"
  );

  useEffect(() => {
    if (translateR === 102) {
      setOpacityLeftR(0.1);
    } else if (translateR === 0) {
      setOpacityRightR(0.1);
    }
  }, [translateR]);

  return (
    <Slider>
      <section>
        <Right>
          <Link to="/">
            <img src={wow} alt="wow" loading="lazy" />
          </Link>
          <Link to="/">مشاهده همه</Link>
        </Right>
        <Left>
          <FontAwesomeIcon
            className="icon icon1"
            cursor="pointer"
            icon={faChevronRight}
            size="2x"
            onClick={arrowRightHandler}
            style={{ opacity: `${opacityRightR}` }}
          />
          <SliderTestRed
            translateR={translateR}
            sliderRed={sliderRed}
            getTime={props.getTime}
          />
          <FontAwesomeIcon
            className="icon icon2"
            cursor="pointer"
            icon={faChevronLeft}
            size="2x"
            onClick={arrowLeftHandler}
            style={{ opacity: `${opacityLeftR}` }}
          />
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
export default SliderRed;
