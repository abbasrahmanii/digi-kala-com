import React from "react";
import Main from "./Main";
import MainTwo from "./MainTwo";
import SliderGreen from "./SliderGreen";
import SliderRed from "./SliderRed";
import Ads from "./Ads";

const MainPage = () => {
  return (
    <div>
      <Main />
      <SliderRed />
      <MainTwo />
      <SliderGreen />
      <Ads />
    </div>
  );
};

export default MainPage;
