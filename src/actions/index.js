const URL_BASE = "https://sofka-facturacion-backend.herokuapp.com/api";

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
        dispatch({ type: "CARGAR_VOLANTES", payload: jsondata });
      });
  };
}

export function fetchCargarInventario() {
  return async (dispatch) => {
    fetch(`${URL_BASE}/producto`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsondata) => {
        dispatch({ type: "CARGAR_INVENTARIO", payload: jsondata });
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

export function fetchNuevoProducto(data) {
  return async (dispatch) => {
    fetch(`${URL_BASE}/producto`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsondata) =>
        dispatch({ type: "NUEVO_PRODUCTO", payload: jsondata })
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

export function limpiarProductosVolantes() {
  return (dispatch) => {
    dispatch({ type: "LIMPIAR_PRODUCTO_VOLANTE", payload: [] });
  };
}

export function fetchNuevoVolanteProducto(data) {
  return async (dispatch) => {
    fetch(`${URL_BASE}/volante-proveedor`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsondata) =>
        dispatch({ type: "NUEVO_VOLANTE_PRODUCTO", payload: jsondata })
      );
  };
}

export function seleccionarProveedor(id) {
  return async (dispatch) => {
    dispatch({ type: "SELECCIONAR_PROVEEDOR", payload: id });
  };
}
