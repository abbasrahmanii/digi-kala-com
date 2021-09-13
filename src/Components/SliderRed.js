import React, { useState, useEffect, useCallback } from "react";
import wow from "../images/asset 20.png";
import styled from "styled-components";
import SliderTestRed from "./SliderTestRed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SlideArrays from "./SlideArrays";
import { useSelector, useDispatch } from "react-redux";
import { arrowLeftHandler, arrowRightHandler } from "../redux/actions";

const SliderRed = (props) => {
  const dispatch = useDispatch();
  // const { translateR, opacityLeftR, opacityRightR } = useSelector(
  //   (state) => state
  // );
  const translateR = useSelector((state) => state.translateR);
  const opacityLeftR = useSelector((state) => state.opacityLeftR);
  const opacityRightR = useSelector((state) => state.opacityRightR);
  // const dataRed = useSelector((state) => state.dataRed);

  // const [translateR, setTranslateR] = useState(0);
  const [sliderRed, setSliderRed] = useState(SlideArrays.itemsRed);
  // const [opacityLeftR, setOpacityLeftR] = useState(1);
  // const [opacityRightR, setOpacityRightR] = useState(1);

  // const arrowRightHandler = () => {
  //   if (translateR !== 0) {
  //     setTranslateR(translateR - 25.5);
  //   }
  // };
  // const arrowLeftHandler = () => {
  //   if (translateR !== (sliderRed.length - 4) * 25.5) {
  //     setTranslateR(translateR + 25.5);
  //   }
  // };

  // useEffect(() => {
  //   if (translateR !== 0) {
  //     // setOpacityLeft(0.05);
  //     setOpacityRightR(1);
  //   } else {
  //     // setOpacityLeft(1);
  //     setOpacityRightR(0.05);
  //   }
  //   if (translateR !== (sliderRed.length - 4) * 25.5) {
  //     // setOpacityRight(0.05);
  //     setOpacityLeftR(1);
  //   } else {
  //     // setOpacityRight(1);
  //     setOpacityLeftR(0.05);
  //   }
  // }, [translateR]);

  useEffect(() => {
    if (translateR === 102) {
      dispatch(arrowLeftHandler());
    } else if (translateR === 0) {
      dispatch(arrowRightHandler());
    }
  }, [translateR]);

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
            // onClick={arrowRightHandler}
            // style={{ opacity: `${opacityRightR}` }}
            onClick={() => dispatch(arrowRightHandler())}
            style={{ opacity: `${opacityRightR}` }}
            arrowRightHandler
          />
          <SliderTestRed
            translateR={translateR}
            sliderRed={sliderRed}
            // sliderRed={dataRed}
            getTime={props.getTime}
          />
          <FontAwesomeIcon
            className="icon icon2"
            cursor="pointer"
            icon={faChevronLeft}
            size="2x"
            // onClick={arrowLeftHandler}
            // style={{ opacity: `${opacityLeftR}` }}
            onClick={() => dispatch(arrowLeftHandler())}
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
