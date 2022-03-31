import React from "react";
import { Form, Button } from "react-bootstrap";
const Registrarse = () => {
  return (
    <div className="w-100 h-75 d-flex justify-content-center align-items-center">
      <div className="ancho-login">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="Correo electrónico" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control type="password" placeholder="Confirmar contraseña" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Registrarse;
