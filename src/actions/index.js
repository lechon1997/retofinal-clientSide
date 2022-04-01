const URL_BASE = "http://localhost:8080/api";

export function fetchClientes() {
  return async (dispatch) => {
    fetch(`${URL_BASE}/cliente`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsondata) =>
        dispatch({ type: "CARGAR_CLIENTES", payload: jsondata })
      );
  };
}

export function fetchNuevoCliente(data) {
  return async (dispatch) => {
    fetch(`${URL_BASE}/cliente`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsondata) =>
        dispatch({ type: "NUEVO_CLIENTE", payload: jsondata })
      );
  };
}

export function cargarUsuario(usuario) {
  return (dispatch) => {
    dispatch({ type: "CARGAR_USUARIO", payload: usuario });
  };
}
