import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const RutaProtegida = () => {

    //Llamamos a nuestro hook useAuth para utilizar nuestro context Auth(state global)
    const {auth, cargando} = useAuth()
    
    console.log("desde ruta protegida")
    console.log(auth)

    //si la flag es true 
    if(cargando) return "cargando..."
    
    //si no
    return (
    <>
    {/* si el state auth cuenta con el atributo id mostramos la pagina a la que quiera acceder sino la redirigimos al inicio / */}
    { auth.id ? (
      <div>
        <Header/>

        <div>
          <Sidebar/>

          <main>
            <Outlet/>
          </main>

        </div>
      </div>

    ): <Navigate to="/" />}
    

    </>
  )
}

export default RutaProtegida