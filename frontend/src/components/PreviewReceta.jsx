import React from 'react'
import { Link } from 'react-router-dom'


const PreviewReceta = ({receta}) => {
    const {title,_id,ingredients} = receta //id _id

  return (
    <div className='border-b p-5 flex'>

        <p className='flex-1'>
            {title}
            <span className='text-gray-500 text-sm'> Ingredientes:{ingredients}</span>
        </p>
        
        <Link to={`${_id}`} className='text-gray-600 hover:text-gray-800 uppercase text-sm font-bold'>Ver Receta</Link>
        
    </div>
  )
}

export default PreviewReceta