import React from "react";
import Main from "./Main";
import MainTwo from "./MainTwo";
import SliderGreen from "./SliderGreen";
import SliderRed from "./SliderRed";

const MainPage = (props) => {
  return (
    <div>
      <Main />
      <SliderRed getTime={props.getTime} />
      <MainTwo />
      <SliderGreen />
    </div>
  );
};

export default MainPage;
