import { combineReducers } from "redux";

const initialState = {
  user: {},
  clientes: [],
  proveedores: [],
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

      default:
        return state;
    }
  },
});

export default rootReducer;
