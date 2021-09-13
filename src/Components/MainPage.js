import React from "react";

import Main from "./Main";
import MainTwo from "./MainTwo";
import SliderGreen from "./SliderGreen";
import SliderRed from "./SliderRed";

const MainPage = () => {
  return (
    <div>
      <Main />
      <SliderRed />
      <MainTwo />
      <SliderGreen />
    </div>
  );
};

export default MainPage;
