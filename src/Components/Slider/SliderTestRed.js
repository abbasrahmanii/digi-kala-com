import React from "react";
import TestRed from "./TestRed";
import styled from "styled-components";

const SliderTestRed = (props) => {
  return (
    <Slider>
      <TestRed
        translateR={props.translateR}
        sliderRed={props.sliderRed}
        getTime={props.getTime}
      />
    </Slider>
  );
};

const Slider = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox 64 */
  div {
    min-width: 24.5%;
    height: 100%;
    margin-left: 1%;
  }
`;

export default SliderTestRed;
