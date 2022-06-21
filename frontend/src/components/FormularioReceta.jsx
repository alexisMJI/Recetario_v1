import React from 'react'
import { useState } from 'react'
import Alerta from '../components/Alerta'
import { useParams } from 'react-router-dom';
import useRecetas from '../hooks/useRecetas';
import { useEffect } from 'react';

const FormularioReceta = () => {
  //definimos states
  const [title,setTitle] = useState('')
  const [ingredients,setIngredients] = useState('')
  const [preparation,setPreparation] = useState('')
  const [image,setImage] = useState('')
  const [id, setId] = useState(null)


  //permite leer los parametros de la url en este caso el id de la receta
  const params = useParams()

  //extraemos datos/fn del context
  const {mostrarAlerta, alerta, submitReceta, receta} = useRecetas();

  useEffect(()=>{
      

    if(params.id){
      console.log("editando receta..")
      setTitle(receta.title)
      setIngredients(receta.ingredients)
      setPreparation(receta.preparation)
      setImage(receta.image)
      setId(receta.id)//cambiar al back de cris con _id
    } 
  },[params])

  //fn para convertir los archivos a BASE64
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
      mostrarAlerta({
        msg: 'Favor de completar los campos vacios',
        error: true
      })
      return
    }

    //pasar los datos hacia el provider
    await submitReceta({title,ingredients,preparation,image,id});
    //limpiamos los states
    setTitle('')
    setIngredients('')
    setPreparation('')
    setImage('')
    setId(null)

  }

  //voy a extraer el msj de la alerta y en el caso de que exista significa que ya tiene algo, ya no esta vacio ese objeto
  const { msg } = alerta
  
  if(params.id){
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
        
        <label className='text-gray-700 uppercase font-bold text-sm'>Imagen</label> 
        {/*Si image esta cargado.. mostar.. */}
        {image && <img src={image} alt="" className='border  p-2 mt-2  rounded-md'/>}
        <input type="file" accept="image/*"  onChange={(e)=>covertFileBase64(e.target.files)} className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>

        <input type='submit' value='Modificar' className='mb-5 bg-sky-700 w-full py-3 mt-10 font-bold text-white uppercase rounded hover:cursor-pointer hover:bg-sky-800 hover:transition-colors' />
      </div>
    </form>
  )
  }
  else{
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
          
          <label className='text-gray-700 uppercase font-bold text-sm'>Imagen</label>
          <input type="file" multiple onChange={(e)=>covertFileBase64(e.target.files)} className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            
  
          <input type='submit' value='Crear' className='mb-5 bg-sky-700 w-full py-3 mt-10 font-bold text-white uppercase rounded hover:cursor-pointer hover:bg-sky-800 hover:transition-colors' />
        </div>
      </form>
    )
  }

}

export default FormularioReceta