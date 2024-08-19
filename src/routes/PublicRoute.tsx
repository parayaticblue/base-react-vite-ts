
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';
import { PrivateRoutesProps } from '../interfaces'
import { RUTAS } from '../config';
import { useContext } from 'react';

export const PublicRoute = ({children}:PrivateRoutesProps) : JSX.Element => {

  // saber si el usuario está autenticado o no 
  const {logged} = useContext(AuthContext);

  return (!logged)
    ? <>{children}</>
    : <Navigate to={RUTAS.HOME} />

}
