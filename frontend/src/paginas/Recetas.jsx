import React from 'react'
import useRecetas from '../hooks/useRecetas'
import PreviewReceta from '../components/PreviewReceta';


const Recetas = () => {

  
  const {recetas} = useRecetas();
  
  

  return (
    <>
      <h1 className=' text-4xl font-black '>Recetas</h1>
      
      <div className='bg-white shadow mt-10 rounded-lg'>
        {recetas.length ? 
          recetas.map(receta =>(
            <PreviewReceta key={receta.id} receta={receta} />//recordar que es receta._id en back cris
          
          ))
        : <p className=' text-center text-gray-600 uppercase p-5'>No hay proyectos</p>}
      </div>
    </>
  )
}

export default Recetas 