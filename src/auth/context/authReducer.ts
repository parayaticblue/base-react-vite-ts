import { AuthActionProps, AuthStateProps } from "../interfaces";
import { types } from "../types/types";


export const authReducer = (state:AuthStateProps, action:AuthActionProps) => {


  switch (action.type) {
    
    case types.login:
         return {
          ...state,
          logged: true,
          user: action.payload,
        };

    case types.logout:
          return {
          logged: false,
          };

    default:
      return state;
  }
}


// no se utiliza este archivo para colocar el localStorage porque se utiliza el customHook useReducer

// estos estan destinados a ser funciones puras que no llaman ninguna funcion externa