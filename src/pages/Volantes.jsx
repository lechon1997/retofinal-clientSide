import React, { useState } from "react";
import { connect } from "react-redux";
import { nuevoProductoVolante } from "../actions";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Alert,
} from "reactstrap";

const Volantes = ({
  volantes,
  clientes,
  proveedores,
  productos_volantes,
  dispatch,
}) => {
  const [modalNuevoVolante, setModalNuevoVolante] = useState(false);

  const [nombreDelProducto, setNombreDelProducto] = useState("");
  const [cantidadDelProducto, setCantidadDelProducto] = useState(1);

  const ocultarModalNuevoVolante = () => {
    setModalNuevoVolante(false);
  };

  const mostrarModalNuevoVolante = () => {
    setModalNuevoVolante(true);
  };

  const nuevoVolante = (e) => {
    e.preventDefault();
    console.log("volante");
  };

  const agregarProductoVolante = () => {
    dispatch(
      nuevoProductoVolante({
        nombre: nombreDelProducto,
        cantidad: cantidadDelProducto,
      })
    );
  };

  const onChangeCantidad = (e) => {
    setCantidadDelProducto(e.target.value);
  };

  const onChangeNombreP = (e) => {
    setNombreDelProducto(e.target.value);
  };

  return (
    <div className="w-75 container min-width-500px d-flex flex-column align-items-end">
      <Button onClick={mostrarModalNuevoVolante} color="success mt-2 mb-2">
        Ingresar volante
      </Button>
      <Table className="">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Celular</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {volantes.map((v) => {
            return (
              <tr key={v.identificacionProveedor}>
                <td>{v.identificacionProveedor}</td>
                <td>{v.nombreProveedor}</td>
                <td>{v.fecha}</td>
                <td>xd</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal className="mt-3" isOpen={modalNuevoVolante}>
        <ModalHeader>
          <div>
            <h3>Ingresar volante</h3>
          </div>
        </ModalHeader>

        <form onSubmit={nuevoVolante}>
          <ModalBody>
            <FormGroup>
              <select
                defaultValue=""
                name="categoria"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="0">Seleccione un cliente...</option>
                {clientes.map((c) => {
                  return (
                    <option key={c.documentoIdentificacion} value={c.nombre}>
                      {c.documentoIdentificacion + " - " + c.nombre}
                    </option>
                  );
                })}
              </select>
            </FormGroup>
            <FormGroup>
              <select
                defaultValue=""
                name="categoria"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="0">Seleccione una proveedor...</option>
                {proveedores.map((p) => {
                  return (
                    <option key={p.identifiacionProveedor} value={p.nombre}>
                      {p.identifiacionProveedor + " - " + p.nombre}
                    </option>
                  );
                })}
              </select>
            </FormGroup>
            <FormGroup>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Ingresar productos
                </label>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Nombre producto"
                    name="nombreDelProducto"
                    onChange={onChangeNombreP}
                  />
                  <input
                    type="number"
                    className="form-control wid-number"
                    min="1"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={onChangeCantidad}
                  />
                </div>
                <Button
                  onClick={agregarProductoVolante}
                  color="success"
                  className="mt-3"
                >
                  Ingresar
                </Button>
              </div>
            </FormGroup>
            <FormGroup>
              <p className="m-0">Lista de productos</p>
              <Table className="">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {productos_volantes.map((c) => {
                    return (
                      <tr>
                        <td>{c.nombre}</td>
                        <td>{c.cantidad}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              className="btn btn-danger"
              onClick={ocultarModalNuevoVolante}
            >
              Cancelar
            </Button>

            <Button color="primary">Confirmar</Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  volantes: state.data.volantes,
  clientes: state.data.clientes,
  proveedores: state.data.proveedores,
  productos_volantes: state.data.productos_volante,
});

export default connect(mapStateToProps)(Volantes);
