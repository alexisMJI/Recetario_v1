import React from 'react'
import FormularioReceta from '../components/FormularioReceta'

const NuevaReceta = () => {

  return (
    <>
      <h1 className=' text-4xl font-black '>Crear Receta</h1>

      <div className="mt-10 flex justify-center">
        <FormularioReceta/>
      </div>
    </>
  )
}

export default NuevaReceta