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

const Inventario = ({ inventario }) => {
  console.log(inventario);
  return (
    <div className="w-75 container min-width-500px ">
      <Table className="">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Minimo</th>
          </tr>
        </thead>
        <tbody>
          {inventario.map((v) => {
            return (
              <tr key={v.id}>
                <td>{v.nombre}</td>

                <td>{v.precio}</td>
                <td>{v.cantidad}</td>
                <td>{v.minimo}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  inventario: state.data.inventario,
});

export default connect(mapStateToProps)(Inventario);
