import React, { useState, useEffect } from "react";
import Main from "../Components/Main";
import MainTwo from "../Components/MainTwo";
import SliderGreen from "../Components/Slider/SliderGreen";
import SliderRed from "../Components/Slider/SliderRed";
import Ads from "../Components/Ads";
import styled from "styled-components";
import Layout from "../Components/Layout";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [progressbarWidth, setProgressbarWidth] = useState(0);
  window.onscroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight;
    setProgressbarWidth((winScroll / height) * 100);
  };

  return (
    <Layout>
      <div style={{ transition: "all 5s ease-out" }}>
        {/* <ProgressContainer>
        <div
          className="progress-bar"
          id="progress-bar"
          style={{ width: `${progressbarWidth}%` }}
        ></div>
      </ProgressContainer> */}
        <Main />
        <SliderRed />
        <MainTwo />
        <SliderGreen />
        <Ads />
      </div>
    </Layout>
  );
};

const ProgressContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: transparent;
  position: sticky;
  top: 10vh;
  z-index: 99;
  transition: all 5s ease-out;
  .progress-bar {
    height: 8px;
    background: linear-gradient(to right, #139292, #a706f1);
  }
`;

export default MainPage;
