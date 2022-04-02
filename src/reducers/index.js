import { combineReducers } from "redux";

const initialState = {
  user: {},
  clientes: [],
  proveedores: [],
  proveedor: {},
  volantes: [],
  productos_volante: [],
};

const rootReducer = combineReducers({
  data: (state = initialState, action) => {
    switch (action.type) {
      case "CARGAR_USUARIO":
        return {
          ...state,
          user: action.payload,
        };

      case "CARGAR_CLIENTES":
        return {
          ...state,
          clientes: action.payload,
        };

      case "CARGAR_PROVEEDORES":
        return {
          ...state,
          proveedores: action.payload,
        };
      case "CARGAR_VOLANTES":
        return {
          ...state,
          volantes: action.payload,
        };
      case "NUEVO_CLIENTE":
        return {
          ...state,
          clientes: [...state.clientes, action.payload],
        };
      case "NUEVO_PRODUCTO_VOLANTE":
        return {
          ...state,
          productos_volante: [...state.productos_volante, action.payload],
        };

      case "NUEVO_CLIENTE":
        return {
          ...state,
          clientes: [...state.clientes, action.payload],
        };

      case "NUEVO_PROVEEDOR":
        return {
          ...state,
          proveedores: [...state.proveedores, action.payload],
        };
      case "NUEVO_VOLANTE_PRODUCTO":
        return {
          ...state,
          volantes: [...state.volantes, action.payload],
        };

      case "SELECCIONAR_PROVEEDOR":
        return {
          ...state,
          proveedor: state.proveedores.filter(
            (p) => p.identificacionProveedor !== action.payload
          )[0].foo,
        };

      default:
        return state;
    }
  },
});

export default rootReducer;
