import {BrowserRouter, Route, Routes } from 'react-router-dom'
import RutaProtegida from './layouts/RutaProtegida'
import Recetas from './paginas/Recetas'
import AuthLayout from './layouts/AuthLayout'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import {ConfirmarCuenta} from './paginas/ConfirmarCuenta'
import NuevaReceta from './paginas/NuevaReceta'
import Receta from './paginas/Receta'
import EditarReceta from './paginas/EditarReceta'
import MiCuenta from './paginas/MiCuenta'

import { RecetasProvider } from './context/RecetasProvider'
import {AuthProvider} from './context/AuthProvider'



function App() {
  

  return (
      //Utilizamos react-router-dom  para el routing de nuestras url
      //AuthProvider es neustro context que nos va a permitiur pasar los datos de este compoenente a los demas componentes hijos 
      <BrowserRouter>
        
        <AuthProvider>
          <RecetasProvider>
            <Routes>

              <Route path="/" element={<AuthLayout/>}>
                
                <Route index element={<Login/>}/>
                <Route path="/registrar" element={<Registrar/>}/>
                <Route path="/olvide-password" element={<OlvidePassword/>}/>
                <Route path="/olvide-password/:token" element={<NuevoPassword/>}/>
                <Route path="/confirmar/:id" element={<ConfirmarCuenta/>}/>
              
              </Route>

              <Route path="/recetas" element={ <RutaProtegida/>}>
                
                <Route index element={<Recetas/>}/> 
                {/* aca podriamos agregar nuestra pagina de usuariuo INFO IMPORTANTE seccion 34 video437 */}
                <Route path="micuenta" element={<MiCuenta/>}/>
                <Route path="crear-receta" element={<NuevaReceta/>}/>
                <Route path=":id" element={<Receta/>}/>
                <Route path="editar/:id" element={<EditarReceta/>}/>
                {/* aca no ponemos nada mas abajo porq es una ruta diunamica qcyo */}

              </Route>

              

                 
            </Routes>
          </RecetasProvider>
        </AuthProvider>
        
      </BrowserRouter>
    
  )
}

export default App
