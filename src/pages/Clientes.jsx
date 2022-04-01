import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchNuevoCliente } from "../actions";
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

const Clientes = ({ clientes, dispatch }) => {
  const [modalNuevoCliente, setModalNuevoCliente] = useState(false);
  const [alertDocumentoId, setAlertDocumentoId] = useState(false);

  const mostrarModalNuevoCliente = () => {
    setModalNuevoCliente(true);
  };

  const ocultarModalNuevoCliente = () => {
    setModalNuevoCliente(false);
  };

  const nuevoCliente = (e) => {
    e.preventDefault();
    const documentoIdentificacion = e.target.documento.value;
    const nombre = e.target.name.value;
    const celular = e.target.celular.value;
    console.log(documentoIdentificacion, nombre, celular);
    dispatch(fetchNuevoCliente({ documentoIdentificacion, nombre, celular }));
    ocultarModalNuevoCliente(false);
  };

  return (
    <div className="w-75 container min-width-500px d-flex flex-column align-items-end">
      <Button
        onClick={mostrarModalNuevoCliente}
        color="success btn-ingresar-cliente mt-2 mb-2"
      >
        Nuevo cliente
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
          {clientes.map((c) => {
            return (
              <tr key={c.documentoIdentificacion}>
                <td>{c.documentoIdentificacion}</td>
                <td>{c.nombre}</td>
                <td>{c.celular}</td>
                <td>xd</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal className="mt-3" isOpen={modalNuevoCliente}>
        <ModalHeader>
          <div>
            <h3>Ingresar nuevo cliente</h3>
          </div>
        </ModalHeader>

        <form onSubmit={nuevoCliente}>
          <ModalBody>
            <FormGroup>
              <label>Documento ID:</label>
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
            <Alert isOpen={alertDocumentoId} color="danger">
              El documento ya existe
            </Alert>
          </ModalBody>

          <ModalFooter>
            <Button
              className="btn btn-danger"
              onClick={ocultarModalNuevoCliente}
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
  clientes: state.data.clientes,
});

export default connect(mapStateToProps)(Clientes);
