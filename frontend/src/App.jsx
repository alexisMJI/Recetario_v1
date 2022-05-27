import {BrowserRouter, Route, Routes } from 'react-router-dom'
import RutaProtegida from './layouts/RutaProtegida'
import Recetas from './paginas/Recetas'
import AuthLayout from './layouts/AuthLayout'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import NuevaReceta from './paginas/NuevaReceta'

import {AuthProvider} from './context/AuthProvider'


function App() {
  

  return (
      //Utilizamos react-router-dom  para el routing de nuestras url
      //AuthProvider es neustro context que nos va a permitiur pasar los datos de este compoenente a los demas componentes hijos 
      <BrowserRouter>
        
        <AuthProvider>
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
              <Route path="crear-receta" element={<NuevaReceta/>}/>
            </Route>

              
                
            
          </Routes>
        </AuthProvider>
        
      </BrowserRouter>
    
  )
}

export default App
