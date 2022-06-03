import React from 'react'
import { useState } from 'react'
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import clienteAxiosRecipes from '../config/clienteAxiosRecipes';


const FormularioReceta = () => {
  
  const [title,setTitle] = useState('')
  const [ingredients,setIngredients] = useState('')
  const [preparation,setPreparation] = useState('')

  const [imagenn,setImagenn] = useState(null)

  const subirArchivos= (e)=>{
    setImagenn(e);
  }

  const insertarArchivo= async()=>{
    const f = new FormData();
    let image = fncovertir(f);
    console.log(typeof(image))
    const {data} = await clienteAxiosRecipes.post('/recipes',{image})
    console.log(data)

  }

  const fncovertir= (archivo)=>{
    console.log(typeof(archivo))
    let encoded = base64_encode(archivo);
    console.log(encoded)
    console.log(typeof(encoded))

    return(encoded)
  }

  const handleSubmit = async e => {

    e.preventDefault();

    insertarArchivo();
  }
 
  return (
    <form className='bg-white py-10 px-5 md: w-1/2 rounded-lg shadow-xl' onSubmit={handleSubmit}>
      <div>
        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='nombre'>Titulo de Receta</label>
        <input id='title' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Titulo de la Receta' value={title} onChange={(e)=> setTitle(e.target.value)}/>
        
        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='ingredients'>Ingredientes</label>
        <input id='ingredients' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Ingredientes de la Receta' value={ingredients} onChange={(e)=> setIngredients(e.target.value)}/>

        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='preparation'>Preparacion</label>
        <input id='preparation' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Preparacion de la Receta' value={preparation} onChange={(e)=> setPreparation(e.target.value)}/>
        
        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='img'>Imagen</label>
        <input id='img' type='file' multiple className='border w-full p-2 mt-2' onChange={(e)=>subirArchivos(e.target.files)}/>

        <button className='text-gray-700 uppercase font-bold' >Crear</button>

      </div>
    </form>
  )
}

export default FormularioReceta