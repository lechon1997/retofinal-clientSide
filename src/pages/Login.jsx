import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
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
          <Button className="me-2" variant="primary" type="submit">
            Ingresar
          </Button>
          <Link to="/registrarse">
            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
