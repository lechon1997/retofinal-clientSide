import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = ({ usuario }) => {
  return (
    <div className="bg-light">
      <div className="d-flex justify-content-center bg-dark">
        <p className="m-0 ms-2 bienvenido">Binvenido {usuario}</p>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbarxd ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-btn" to="/home/clientes">
                Clientes
              </NavLink>
              <NavLink className="nav-btn" to="/home/proveedores">
                Proveedores
              </NavLink>
              <NavLink className="nav-btn" to="/home/historial">
                Historial
              </NavLink>
              <NavLink className="nav-btn" to="/home/inventario">
                Inventario
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  usuario: state.data.user,
});

export default connect(mapStateToProps)(NavBar);
