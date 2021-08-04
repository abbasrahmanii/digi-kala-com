import React from "react";
import TestTwo from "./TestTwo";
import styled from "styled-components";

const SliderTest = (props) => {
  return (
    <Slider>
      <TestTwo translate={props.translate} sliderGreen={props.sliderGreen} />
    </Slider>
  );
};

const Slider = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
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

export default SliderTest;
