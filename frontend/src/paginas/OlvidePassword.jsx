import React from 'react'
import {Link } from 'react-router-dom'

function OlvidePassword() {
  return (
    <>
    <h1 className='text-sky-600 font-black text-6xl capitalize'>Olvidaste tu Password en <span className='text-slate-700'>Recetario</span></h1>
    
    <form className='my-10 bg-white shadow rounded p-10'>

      <div className='my-5'>
        <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='email'>Ingresa tu Email de usuario</label>
        <input id='email' type="email" placeholder='Ingresa tu Correo' className='w-full mt-3 p-3 border rounded bg-gray-50'/>
      </div>


      
      <input type="submit" value="Enviar correo de recuperacion" className='mb-5 bg-sky-700 w-full py-3 text-white uppercase rounded hover:cursor-pointer hover:bg-sky-800 hover:transition-colors'/>


    </form>

    <nav className='lg:flex lg:justify-between'> 
      <Link to="/" className='block text-center my-5 text-slate-500 uppercase text-sm'>
        Iniciar Sesion
      </Link>

      <Link to="/registrar" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          Registrate
      </Link>


    </nav>
  </>
  )
}

export default OlvidePassword