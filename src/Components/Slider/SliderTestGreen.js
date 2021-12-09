import React from "react";
import TestGreen from "./TestGreen";
import styled from "styled-components";

const SliderTestGreen = (props) => {
  return (
    <Slider>
      <TestGreen
        translateG={props.translateG}
        sliderGreen={props.sliderGreen}
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

export default SliderTestGreen;
