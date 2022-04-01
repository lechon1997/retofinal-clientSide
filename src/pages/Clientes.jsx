import React from "react";
import { connect } from "react-redux";
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

const Clientes = ({ clientes }) => {
  console.log(clientes);
  return (
    <div>
      <Table className="w-75 container min-width-500px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Celular</th>
            <th style={{ display: "flex", justifyContent: "center" }}>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c) => {
            return (
              <tr>
                <td>{c.documentoIdentificacion}</td>
                <td>{c.nombre}</td>
                <td>{c.celular}</td>
                <td style={{ display: "flex", justifyContent: "flex-end" }}>
                  xd
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  clientes: state.data.clientes,
});

export default connect(mapStateToProps)(Clientes);
