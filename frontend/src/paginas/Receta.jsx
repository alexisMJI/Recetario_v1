import React from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useRecetas from '../hooks/useRecetas'
import useAuth from '../hooks/useAuth';

const Receta = () => {
    //permite leer los parametros de la url en este caso el id de la receta
    const params = useParams()
    const {obtenerNombreUser,user_name} = useAuth()
    const {obtenerReceta, receta, cargando} = useRecetas()

    useEffect(()=>{
        //le pasamos a la funcion el id de la receta asi nos devuelve los datos de la receta
        obtenerReceta(params.id)
        
    },[])
    
    const {title,ingredients,preparation,image,user_id} = receta;
    obtenerNombreUser(user_id)
    if(cargando==true) return 'cargando...'
    return (
        <>
            <div className='flex justify-between '>
                <h1 className='font-black text-4xl'>{title}</h1>
                <div className='flex items-center gap-2 text-gray-600 hover:text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <Link to={`/recetas/editar/${params.id}`} className='uppercase font-bold'> Editar</Link>
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                <form className='bg-white py-10 px-5 md: w-1/2 rounded-lg shadow-xl'>
                    <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='nombre'>Titulo de Receta</label>
                    <input id='title' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Titulo de la Receta' value={title} disabled />
                    
                    <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='ingredients'>Ingredientes</label>
                    <input id='ingredients' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Ingredientes de la Receta' value={ingredients} disabled />

                    <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='preparation'>Preparacion</label>
                    <input id='preparation' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Preparacion de la Receta' value={preparation} disabled />
                    
                    <label className='text-gray-700 uppercase font-bold text-sm' >Creador de la receta</label>
                    <input id='nombreuserreceta' disabled type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={user_name}/>

                    {/*Si image esta cargado.. mostar.. */}
                    {image && <label className='text-gray-700 uppercase font-bold text-sm'>Imagen</label> }
                    {image && <img src={image} alt="" className='border  p-2 mt-2  rounded-md'/>}


                </form>
            </div>
        </>
  )
}

export default Receta