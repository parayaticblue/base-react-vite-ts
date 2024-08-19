import { AuthContext } from "../auth";
import { Navigate, useLocation } from 'react-router-dom';
import { PrivateRoutesProps } from "../interfaces"
import { RUTAS } from '../config';
import { useContext } from 'react';
import { Main } from "../ui";

export const PrivateRoute = ({children}:PrivateRoutesProps) : JSX.Element => {

  // saber si el usuario está autenticado o no 
  const {logged} = useContext(AuthContext);

  const {pathname, search}  = useLocation();

  
  const lastPath = `${pathname}${search}`;

  localStorage.setItem('lastPath', lastPath);


  return (logged)
    ? <Main>{children}</Main>
    : <Navigate to={RUTAS.LOGIN} />

}
