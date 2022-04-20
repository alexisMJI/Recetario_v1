import React from 'react'

function NuevoPassword() {
  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>Reestablece tu password </h1>
      
      <form className='my-10 bg-white shadow rounded p-10'>
        <div className='my-5'>
            <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='password'>nueva contraseña</label>
            <input id='password' type="password" placeholder='Ingresa tu Password' className='w-full mt-3 p-3 border rounded bg-gray-50'/>       
          </div>

          <div className='my-5'>
            <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='password2'>repite tu contraseña</label>
            <input id='password2' type="password" placeholder='Repetir tu Password' className='w-full mt-3 p-3 border rounded bg-gray-50'/>       
          </div>

          
          <input type="submit" value="Guardar nuevo password" className='mb-5 bg-sky-700 w-full py-3 text-white uppercase rounded hover:cursor-pointer hover:bg-sky-800 hover:transition-colors'/>

      </form>
      

    </>
  )
}

export default NuevoPassword