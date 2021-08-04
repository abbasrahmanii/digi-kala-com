import React from "react";
import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import SliderRed from "./Components/SliderRed";
import MainTwo from "./Components/MainTwo";
import SliderGreen from "./Components/SliderGreen";

function App() {
  return (
    <DigiKala>
      <GlobalStyle />
      <Nav />
      <Main />
      <SliderRed />
      <MainTwo />
      <SliderGreen />
    </DigiKala>
  );
}

const DigiKala = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

export default App;
