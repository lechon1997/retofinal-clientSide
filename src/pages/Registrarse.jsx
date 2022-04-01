import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../firebase/credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);

const Registrarse = () => {
  const navigate = useNavigate();
  const firestore = getFirestore(firebaseApp);

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const password2 = e.target.elements.password2.value;

    if (password.length < 6) {
      window.alert("la contraseña debe tener más de 6 caracteres");
      return false;
    }
    console.log("submit", email, password, password2);
    registrarUsuario(email, password, password2);
    navigate("/login");
  }

  return (
    <div className="w-100 h-75 d-flex justify-content-center align-items-center">
      <div className="ancho-login">
        <form onSubmit={submitHandler}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registrarse;
