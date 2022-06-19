import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'//nos permite leer los parametros de la url
import useRecetas from '../hooks/useRecetas'

const Receta = () => {
    
    const params = useParams()
    const {obtenerReceta} = useRecetas()
    
    /*  
    console.log(params)
    obtenerRecipe(params.id)
    */

    useEffect(()=>{
        obtenerReceta(params.id)
    },[])

    return (
    <div>Receta</div>
  )
}

export default Receta