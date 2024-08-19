// el AuthProvider es un componente que se encarga de proveer la información de autenticación a toda la aplicación
// utiliza el authContext para proveer la información de autenticación
import { useReducer }  from 'react';
import { AuthContext } from "./AuthContext"
import { AuthActionProps, AuthInitStateProps, ProviderProps } from "../interfaces"
import { authReducer } from './authReducer';
import { types } from '../types/types';


const init = (): AuthInitStateProps => {

  const user = JSON.parse( localStorage.getItem('user') || '{}');
  
  return {
    logged: !!user?.id , 
    user: user,
  }
}

export const AuthProvider = ({children} : ProviderProps) => {

  
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  // creamos una función que se encargue de cambiar el estado de logged
  const login = (name ='') => {
    
    const user = { id:'ABC', name}

    const action:AuthActionProps = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action)
  }

  const logout = () => {

    localStorage.removeItem('user');

    const action:AuthActionProps = {type: types.logout}

    dispatch(action)
  }

  

  return (
    <AuthContext.Provider value={{
      ...authState,
      // Methods
      login: login,
      logout: logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
