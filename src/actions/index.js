const URL_BASE = "http://localhost:8080/api";

export function fetchClientes() {
  console.log(`${URL_BASE}/cliente`);
  return async (dispatch) => {
    const response = fetch(`${URL_BASE}/cliente`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((jsondata) =>
        dispatch({ type: "CARGAR_CLIENTES", payload: jsondata })
      );
  };
}

export function cargarUsuario(usuario) {
  return (dispatch) => {
    dispatch({ type: "CARGAR_USUARIO", payload: usuario });
  };
}
