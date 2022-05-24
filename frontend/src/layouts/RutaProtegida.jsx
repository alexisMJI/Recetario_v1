import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const RutaProtegida = () => {

    //Llamamos a nuestro hook useAuth para utilizar nuestro context Auth(state/estado global)
    
    const {auth, cargando} = useAuth()
    
    console.log("desde ruta protegida")
    console.log(auth)

    //si la flag es true 
    if(cargando) return "cargando..."
    
    //si no
    return (
    <>
    {/* si el state auth cuenta con el atributo id mostramos la pagina sino la redirigimos al inicio*/}
    { auth.id ? 'Autenticado': <Navigate to="/" />}
    

    </>
  )
}

export default RutaProtegida