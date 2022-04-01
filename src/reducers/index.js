import { combineReducers } from "redux";

const initialState = {
  user: {},
};

const rootReducer = combineReducers({
  data: (state = initialState, action) => {
    switch (action.type) {
      case "CARGAR_USUARIO":
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  },
});

export default rootReducer;
