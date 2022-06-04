import React from 'react'
import { useState } from 'react'
import Alerta from '../components/Alerta'
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import clienteAxiosRecipes from '../config/clienteAxiosRecipes';
import {getImagenesAPI} from '../config/clienteAxiosPexelsAPI';

const FormularioReceta = () => {
  
  const [title,setTitle] = useState('')
  const [ingredients,setIngredients] = useState('')
  const [preparation,setPreparation] = useState('')
  const [image,setImage] = useState('')

  const [ alerta, setAlerta] = useState({})


 const covertFileBase64 = (archivos)=>{
  Array.from(archivos).forEach(archivo=>{
    var reader= new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload=function(){
      var base64 = reader.result;
      setImage(base64);
    }
  })
 }

 

 const handleSubmit = async e =>{
  e.preventDefault();

  //validamos que si alguno de los campos estan vacios
  if([title,ingredients,preparation].includes(''))
  {
    setAlerta({
      msg: 'Favor de completar los campos vacios',
      error: true
    })
    return
  }

  setAlerta({})

  // Peticion Crear receta en la API
  try{
      const {data} = await clienteAxiosRecipes.post(("/recipes"),
      {title,ingredients,preparation,image})
      
      console.log(data)
      setAlerta({
        msg: 'Receta creada correctamente',
        error: false
      })

      setTitle('')
      setIngredients('')
      setPreparation('')
      setImage('')
      

  }catch (error){
      console.log(error.response.data)
      setAlerta({
        msg: 'Error a la hora de crear receta',
        error: true
      })
  }
}

 //voy a extraer el msj de la alerta y en el caso de que exista significa que ya tiene algo, ya no esta vacio ese objeto
 const { msg } = alerta
 
  return (
    
    <form className='bg-white py-10 px-5 md: w-1/2 rounded-lg shadow-xl' onSubmit={handleSubmit}>
      <div>
        {/*si la variable msg tiene algo significa q el objeto no esta vacio entonces utilizamos el componente alerta, pasandole como prop nuestra alerta*/}
        {msg && <Alerta alerta={alerta}/>}

        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='nombre'>Titulo de Receta</label>
        <input id='title' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Titulo de la Receta' value={title} onChange={(e)=> setTitle(e.target.value)}/>
        
        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='ingredients'>Ingredientes</label>
        <input id='ingredients' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Ingredientes de la Receta' value={ingredients} onChange={(e)=> setIngredients(e.target.value)}/>

        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='preparation'>Preparacion</label>
        <input id='preparation' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Preparacion de la Receta' value={preparation} onChange={(e)=> setPreparation(e.target.value)}/>
        
        <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='img'>Imagen</label>
        <input type="file" multiple onChange={(e)=>covertFileBase64(e.target.files)} className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          

        <button className='mb-5 bg-sky-700 w-full py-3 mt-10 text-white uppercase rounded hover:cursor-pointer hover:bg-sky-800 hover:transition-colors' >Crear</button>
      </div>
    </form>
  )
}

export default FormularioReceta