const URL_BASE = "http://localhost:8080/api";

export function fetchClientes() {
  return async (dispatch) => {
    fetch(`${URL_BASE}/cliente`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsondata) =>
        dispatch({ type: "CARGAR_CLIENTES", payload: jsondata })
      );
  };
}

export function fetchProveedores() {
  return async (dispatch) => {
    fetch(`${URL_BASE}/proveedor`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsondata) =>
        dispatch({ type: "CARGAR_PROVEEDORES", payload: jsondata })
      );
  };
}

export function fetchVolantes() {
  return async (dispatch) => {
    fetch(`${URL_BASE}/volante-proveedor`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsondata) => {
        console.log("volantes: ", jsondata);
        dispatch({ type: "CARGAR_VOLANTES", payload: jsondata });
      });
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

export function fetchNuevoProveedor(data) {
  return async (dispatch) => {
    fetch(`${URL_BASE}/proveedor`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsondata) =>
        dispatch({ type: "NUEVO_PROVEEDOR", payload: jsondata })
      );
  };
}

export function cargarUsuario(usuario) {
  return (dispatch) => {
    dispatch({ type: "CARGAR_USUARIO", payload: usuario });
  };
}

export function nuevoProductoVolante(producto) {
  return (dispatch) => {
    dispatch({ type: "NUEVO_PRODUCTO_VOLANTE", payload: producto });
  };
}
