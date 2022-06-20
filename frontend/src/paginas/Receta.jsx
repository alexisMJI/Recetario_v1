import React from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useRecetas from '../hooks/useRecetas'

const Receta = () => {
    //nos permite leer los parametros de la url en este caso el id de la receta
    const params = useParams()
    const {obtenerReceta, receta, cargando} = useRecetas()

    useEffect(()=>{
        //le pasamos a la funcion el id de la receta asi nos devuelve los datos de la receta
        obtenerReceta(params.id)
    },[])
    
    const {title,ingredients,preparation,image,user_id} = receta;


    return (
        cargando ?  'cargando...' :
        (<div className='flex justify-between '>
            <h1 className='font-black text-4xl'>{title}</h1>
            
            <div className='flex items-center gap-2 text-gray-600 hover:text-black'>
                <Link to={`/recetas/editar/${params.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Editar
                </Link>
            </div>
            
        </div>)
  )
}

export default Receta