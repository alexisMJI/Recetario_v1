import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const RutaProtegida = () => {

    const {auth} = useAuth()
    
  return (
    <div>RutaProtegida</div>
  )
}

export default RutaProtegida