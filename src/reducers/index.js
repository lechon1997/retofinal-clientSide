import { combineReducers } from "redux";

const initialState = {
  user: {},
  clientes: [],
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
        console.log(action.payload);
        return {
          ...state,
          clientes: action.payload,
        };

      case "NUEVO_CLIENTE":
        return {
          ...state,
          clientes: [...state.clientes, action.payload],
        };
      default:
        return state;
    }
  },
});

export default rootReducer;
