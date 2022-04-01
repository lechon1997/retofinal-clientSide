import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registrarse from "./pages/Registrarse";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/global.scss";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registrarse" element={<Registrarse />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
);
