import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const RutaProtegida = () => {

    //Llamamos a nuestro hook useAuth para extraer los datos de nuestro context Auth(state global)
    const {auth, cargando} = useAuth()
    
    console.log("desde ruta protegida")
    console.log(auth)
    console.log(cargando)
    //si la flag es true 
    if(cargando) 
      return "cargando...p"
    
    console.log(cargando)
    
    return (
    <>
    {/* si el state auth cuenta con el atributo id(usuario con token valido) mostramos la pagina a la que quiera acceder sino la redirigimos al inicio / */}
    { auth.id ? (
      <div className='bg-gray-100'>
        <Header/>
        
        <div className='md:flex md:min-h-screen'>
          <Sidebar/>

          <main className='flex-1 p-10 '>
            <Outlet/>
          </main>

        </div>
      </div>

    ): <Navigate to="/" />}
    

    </>
  )
}

export default RutaProtegida