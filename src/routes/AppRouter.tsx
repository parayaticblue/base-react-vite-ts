
import { FormulariosRoutes } from '../formularios/routes/FormulariosRoutes'
import { LoginPage } from '../auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { RUTAS } from '../config'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (

    <>
      <Routes>
        <Route path={RUTAS.LOGINPRIVATE}
          element={
            <PublicRoute>
              <Routes>
                <Route path={RUTAS.ALL} element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />
        <Route path={RUTAS.ALL}
          element={
            <PrivateRoute>
              <FormulariosRoutes />
            </PrivateRoute>
          }
        />
        {/* Redirecciona cualquier otra ruta  
         <Route path={RUTAS.ALL}  element={<HeroesRoutes />} />*/}
      </Routes>
    </>

  )
}
