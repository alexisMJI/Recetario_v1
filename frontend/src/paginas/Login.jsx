import React from 'react'
import {Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>Inicia sesión en el <span className='text-slate-700'>Recetario</span></h1>
      
      <form className='my-10 bg-white shadow rounded p-10'>

        <div className='my-5'>
          <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='email'>Email</label>
          <input id='email' type="email" placeholder='Ingresa tu Correo' className='w-full mt-3 p-3 border rounded bg-gray-50'/>
        </div>
        <div className='my-5'>
          <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='password'>contraseña</label>
          <input id='password' type="password" placeholder='Ingresa tu Password' className='w-full mt-3 p-3 border rounded bg-gray-50'/>       
        </div>
        
        <input type="submit" value="Iniciar Sesion" className='mb-5 bg-sky-700 w-full py-3 text-white uppercase rounded hover:cursor-pointer hover:bg-sky-800 hover:transition-colors'/>


      </form>

      <nav className='lg:flex lg:justify-between'> 
        <Link to="/registrar" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          Registrate
        </Link>

        <Link to="/olvide-password" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          Olvide mi password
        </Link>
      </nav>
    </>
  )
}

export default Login