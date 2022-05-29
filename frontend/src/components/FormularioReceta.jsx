import React from 'react'
import { useState } from 'react'

const FormularioReceta = () => {
  
  const [title,setTitle] = useState('')
  const [ingredients,setIngredients] = useState('')
  const [preparation,setPreparation] = useState('')
  const [date_creation,setDate_creation] = useState('')
  const [date_modified,setDate_modified] = useState('')
  const [image,setImage] = useState('')

  //console.log(Buffer.from("Hello World").toString('base64'));
  //console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'))

  return (
    <form className='bg-white py-10 px-5 md: w-1/2 rounded-lg shadow-xl'>
      <div>
        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='nombre'>Titulo de Receta</label>
        <input id='title' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Titulo de la Receta' value={title} onChange={(e)=> setTitle(e.target.value)}/>
        
        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='ingredients'>Ingredientes</label>
        <input id='ingredients' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Ingredientes de la Receta' value={ingredients} onChange={(e)=> setIngredients(e.target.value)}/>

        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='preparation'>Preparacion</label>
        <input id='preparation' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Preparacion de la Receta' value={preparation} onChange={(e)=> setPreparation(e.target.value)}/>
        
        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='img'>Imagen</label>
        <input id='img' type='file' multiple className='border w-full p-2 mt-2' value={image} onChange={(e)=>setImage(e.target.value)}/>
       

      </div>
    </form>
  )
}

export default FormularioReceta