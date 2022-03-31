import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registrarse from "./pages/Registrarse";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registrarse" element={<Registrarse />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
