export function cargarUsuario(usuario) {
  return (dispatch) => {
    dispatch({ type: "CARGAR_USUARIO", payload: usuario });
  };
}
