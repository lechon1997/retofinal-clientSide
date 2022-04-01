import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Proveedores from "./pages/Proveedores";
import Historial from "./pages/Historial";
import Inventario from "./pages/Inventario";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registrarse from "./pages/Registrarse";
import PantallaPrincipal from "./components/containers/PantallaPrincipal";
import { fetchClientes } from "./actions";
import { connect } from "react-redux";
function App({ dispatch }) {
  useEffect(() => {
    dispatch(fetchClientes());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <PantallaPrincipal>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home/" element={<Home />}>
              <Route path="clientes" element={<Clientes />} />
              <Route path="proveedores" element={<Proveedores />} />
              <Route path="historial" element={<Historial />} />
              <Route path="inventario" element={<Inventario />} />
            </Route>
            <Route path="/registrarse" element={<Registrarse />} />
          </Routes>
        </PantallaPrincipal>
      </BrowserRouter>
    </div>
  );
}

export default connect(null)(App);
