import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Proveedores from "./pages/Proveedores";
import Historial from "./pages/Historial";
import Inventario from "./pages/Inventario";
import Login from "./pages/Login";
import Factura from "./pages/Factura";
import Home from "./pages/Home";
import Registrarse from "./pages/Registrarse";
import Volantes from "./pages/Volantes";
import PantallaPrincipal from "./components/containers/PantallaPrincipal";
import {
  fetchClientes,
  fetchProveedores,
  fetchVolantes,
  fetchCargarInventario,
} from "./actions";
import { connect } from "react-redux";
function App({ dispatch }) {
  useEffect(() => {
    dispatch(fetchClientes());
    dispatch(fetchProveedores());
    dispatch(fetchVolantes());
    dispatch(fetchCargarInventario());
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
              <Route path="volantes" element={<Volantes />} />
              <Route path="facturas" element={<Factura />} />
            </Route>
            <Route path="/registrarse" element={<Registrarse />} />
          </Routes>
        </PantallaPrincipal>
      </BrowserRouter>
    </div>
  );
}

export default connect(null)(App);
