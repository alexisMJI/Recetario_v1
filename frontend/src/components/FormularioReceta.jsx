import React from 'react'
import { useState } from 'react'

const FormularioReceta = () => {
  
  const [titulo,setTitle] = useState('')
  const [ingredients,setIngredients] = useState('')
  const [preparation,setPreparation] = useState('')
  const [date_creation,setDate_creation] = useState('')
  const [date_modified,setDate_modified] = useState('')
  const [imege,setImage] = useState('')

  return (
    <form className='bg-white py-10 px-5 md: w-1/2 rounded-lg shadow-xl'>
      <div>
        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='nombre'>Titulo de Receta</label>
        <input id='title' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={title} onChange={(e)=> setTitle(e.target.value)}/>


      </div>
    </form>
  )
}

export default FormularioReceta