import React, { useState } from "react";
import { connect } from "react-redux";
import {
  nuevoProductoVolante,
  fetchNuevoVolanteProducto,
  seleccionarProveedor,
  fetchNuevoProducto,
  limpiarProductosVolantes,
} from "../actions";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const Volantes = ({
  volantes,
  clientes,
  proveedores,
  productos_volantes,
  proveedor,
  dispatch,
}) => {
  console.log("tus volantes son: ", volantes);
  const [modalNuevoVolante, setModalNuevoVolante] = useState(false);

  const [nombreDelProducto, setNombreDelProducto] = useState("");
  const [cantidadDelProducto, setCantidadDelProducto] = useState(1);
  const [precioDelProducto, setPrecioDelProducto] = useState(0);

  const ocultarModalNuevoVolante = () => {
    setModalNuevoVolante(false);
    setNombreDelProducto("");
    setCantidadDelProducto(1);
    setPrecioDelProducto(0);
    dispatch(limpiarProductosVolantes());
  };

  const mostrarModalNuevoVolante = () => {
    setModalNuevoVolante(true);
  };

  const nuevoVolante = (e) => {
    e.preventDefault();
    const idProveedor = e.target.categoria2.value;
    console.log(idProveedor);
    const fecha = e.target.fecha.value;
    const { identifiacionProveedor, nombre } = proveedores.filter(
      (itemInArray) => itemInArray.identificacionProveedor !== idProveedor
    )[0];

    const info = {
      identificacionProveedor: identifiacionProveedor,
      nombreProveedor: nombre,
      fecha: fecha,
      productos: productos_volantes,
    };

    dispatch(fetchNuevoVolanteProducto(info));
    productos_volantes.forEach((p) => dispatch(fetchNuevoProducto(p)));
    confirmarVolante();
  };

  const agregarProductoVolante = () => {
    dispatch(
      nuevoProductoVolante({
        nombre: nombreDelProducto,
        precio: precioDelProducto,
        minimo: 10,
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

  const onChagePrecioProducto = (e) => {
    setPrecioDelProducto(e.target.value);
  };

  const confirmarVolante = () => {
    setModalNuevoVolante(false);
    setNombreDelProducto("");
    setCantidadDelProducto(1);
    setPrecioDelProducto(0);
    dispatch(limpiarProductosVolantes());
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
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {volantes.map((v) => {
            return (
              <tr key={v.identificacionProveedor}>
                <td>{v.identificacionProveedor}</td>
                <td>{v.nombreProveedor}</td>

                <td>{v.fecha}</td>

                <td>
                  <Button color="primary">Ver volante</Button>
                </td>
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
              <input type="date" name="fecha" />
            </FormGroup>
            <FormGroup>
              <select
                defaultValue=""
                name="categoria2"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="0">Seleccione una proveedor...</option>
                {proveedores.map((p) => {
                  return (
                    <option
                      key={p.identifiacionProveedor}
                      value={p.identifiacionProveedor}
                    >
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
                    className="form-control wid-number ms-2"
                    min="1"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={onChangeCantidad}
                  />
                </div>
                <input
                  type="number"
                  className="form-control w-50 mt-2 "
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  name="precio"
                  placeholder="Precio"
                  onChange={onChagePrecioProducto}
                />

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
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {productos_volantes.map((c) => {
                    return (
                      <tr>
                        <td>{c.nombre}</td>
                        <td>{c.cantidad}</td>
                        <td>{c.precio}</td>
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
  proveedor: state.data.proveedor,
});

export default connect(mapStateToProps)(Volantes);
