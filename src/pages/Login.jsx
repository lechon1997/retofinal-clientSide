import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebaseApp from "../firebase/credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(firebaseApp);
function Login() {
  async function submitHandler(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      window.alert("la contraseña debe tener más de 6 caracteres");
      return false;
    }
    console.log("submit", email, password);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log("error");
    }
  }

  return (
    <div className="w-100 h-75 d-flex justify-content-center align-items-center">
      <div className="ancho-login">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Correo electrónico"
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              name="password"
            />
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
