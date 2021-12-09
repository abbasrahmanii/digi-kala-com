import React from "react";
import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyles";
import MainPage from "./Pages/MainPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import { Switch, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./Pages/Login";

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
      <DigiKala>
        <GlobalStyle />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/page/:id">
            <ProductPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
        </Switch>
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
