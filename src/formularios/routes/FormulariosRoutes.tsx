import { Navigate, Route, Routes } from 'react-router-dom'
import { RUTAS } from '../../config'
import { FormularioDummy } from '..'
import { SidebarLayout } from '../../ui'



export const FormulariosRoutes = () => {
  return (
    <div className="w-full pt-5">
      <SidebarLayout>

        <Routes>
          <Route path={RUTAS.FORM1}  element={<FormularioDummy />} />
 

          {/* Redireccionar por defecto */}
          <Route path={RUTAS.ALL}    element={<Navigate to={RUTAS.FORM1} />} />


        </Routes>
        
      </SidebarLayout>
    </div>
  )
}
