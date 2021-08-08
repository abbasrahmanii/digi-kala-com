import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import MainPage from "./Components/MainPage";
import Page from "./Components/Page";
import Top from "./Components/Top";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const now = new Date();
  const [fall, setFall] = useState({
    month: now.getMonth(),
    date: now.getDate(),
    fullYear: now.getFullYear(),
  });
  const [pool, setPool] = useState({
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  });

  // setInterval(() => {
  // const now = new Date();
  // setFall({
  //   month: now.getMonth(),
  //   date: now.getDate(),
  //   fullYear: now.getFullYear(),
  // });
  // setPool({
  //   hours: now.getHours(),
  //   minutes: now.getMinutes(),
  //   seconds: now.getSeconds(),
  // });
  // console.log(pool[3]);
  // }, 1000);

  return (
    <DigiKala>
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/page">
          <Page />
        </Route>
      </Switch>
      <Top />
    </DigiKala>
  );
}

const DigiKala = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  transition: all 2s;
`;

export default App;
