import React from 'react'
import useRecetas from '../hooks/useRecetas'


const Recetas = () => {

  const {recetas} = useRecetas();
  console.log(recetas)

  return (
    <>
      <h1 className=' text-4xl font-black '>Recetas</h1>

      <div>
        
      </div>
    </>
  )
}

export default Recetas