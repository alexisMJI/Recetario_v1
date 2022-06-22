import React from 'react'
import { useState } from 'react'
import Alerta from '../components/Alerta'
import { useParams } from 'react-router-dom';
import useRecetas from '../hooks/useRecetas';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth'

const VerCuenta = () => {

    const [title,setTitle] = useState('')
  const [ingredients,setIngredients] = useState('')
  const [preparation,setPreparation] = useState('')
  const [image,setImage] = useState('')
     //extraemos datos/fn del context
  const {obtenerNombreUser,user_name} = useAuth()

  //extraemos datos/fn del context
  const {mostrarAlerta, alerta, submitReceta, receta} = useRecetas();
  
    const handleSubmit = async e =>{
        e.preventDefault();
        
        //validamos que si alguno de los campos estan vacios
        if([title,ingredients,preparation].includes(''))
        {
          mostrarAlerta({
            msg: 'Favor de completar los campos vacios',
            error: true
          })
          return
        }
    
        
    
      }
//voy a extraer el msj de la alerta y en el caso de que exista significa que ya tiene algo, ya no esta vacio ese objeto
const { msg } = alerta
    return (
        <>
            <form className='bg-white py-10 px-5 md: w-1/2 rounded-lg shadow-xl' onSubmit={handleSubmit}>
          <div>
            {/*si la variable msg tiene algo significa q el objeto no esta vacio entonces utilizamos el componente alerta, pasandole como prop nuestra alerta*/}
            {msg && <Alerta alerta={alerta}/>}
    
            
            <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='nombre'>Nombre</label>
            <input id='title' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Titulo de la Receta' value={title} onChange={(e)=> setTitle(e.target.value)}/>
            
            <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='ingredients'>Apellido</label>
            <input id='ingredients' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Ingredientes de la Receta' value={ingredients} onChange={(e)=> setIngredients(e.target.value)}/>
    
        
            
            <input type='submit' value='Modificar' className='mb-5 bg-sky-700 w-full py-3 mt-10 font-bold text-white uppercase rounded hover:cursor-pointer hover:bg-sky-800 hover:transition-colors' />
          </div>
        </form>
        </>
        
      )
}

export default VerCuenta