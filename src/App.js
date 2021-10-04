import React from "react";
import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import MainPage from "./Components/MainPage";
import Page from "./Components/Page";
import Top from "./Components/Top";
import Footer from "./Components/Footer";
import { Switch, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const location = useLocation();
  return (
    <Provider store={store}>
      <DigiKala>
        <GlobalStyle />
        <a name="top"></a>
        <Nav />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/page/:id" exact>
            <Page />
          </Route>
        </Switch>
        <Top />
        <Footer />
      </DigiKala>
    </Provider>
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
