import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchNuevoProveedor } from "../actions";

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

const Proveedores = ({ proveedores, dispatch }) => {
  console.log("proveedores:", proveedores);
  const [modalNuevoProveedor, setModalNuevoProveedor] = useState(false);

  const mostrarModalNuevoProveedor = () => {
    setModalNuevoProveedor(true);
  };

  const ocultarModalNuevoProveedor = () => {
    setModalNuevoProveedor(false);
  };

  const nuevoProveedor = (e) => {
    e.preventDefault();
    const identifiacionProveedor = e.target.documento.value;
    const nombre = e.target.name.value;
    const celular = e.target.celular.value;
    console.log(identifiacionProveedor, nombre, celular);
    dispatch(fetchNuevoProveedor({ identifiacionProveedor, nombre, celular }));
    ocultarModalNuevoProveedor(false);
  };

  return (
    <div className="w-75 container min-width-500px d-flex flex-column align-items-end">
      <Button onClick={mostrarModalNuevoProveedor} color="success mt-2 mb-2">
        Nuevo proveedor
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
          {proveedores.map((p) => {
            return (
              <tr key={p.identifiacionProveedor}>
                <td>{p.identifiacionProveedor}</td>
                <td>{p.nombre}</td>
                <td>{p.celular}</td>
                <td>xd</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal className="mt-3" isOpen={modalNuevoProveedor}>
        <ModalHeader>
          <div>
            <h3>Ingresar nuevo proveedor</h3>
          </div>
        </ModalHeader>

        <form onSubmit={nuevoProveedor}>
          <ModalBody>
            <FormGroup>
              <label>Documento Proveedor:</label>
              <input className="form-control" name="documento" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Nombre:</label>
              <input className="form-control" name="name" type="text" />
            </FormGroup>
            <FormGroup>
              <label>Celular:</label>
              <input className="form-control" name="celular" type="text" />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              className="btn btn-danger"
              onClick={ocultarModalNuevoProveedor}
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
  proveedores: state.data.proveedores,
});

export default connect(mapStateToProps)(Proveedores);
