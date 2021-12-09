import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
