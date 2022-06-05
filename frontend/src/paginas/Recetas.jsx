import React from 'react'
import useRecetas from '../hooks/useRecetas'


const Recetas = () => {

  const {recetas} = useRecetas();
  console.log(recetas)

  return (
    <>
      <h1 className=' text-4xl font-black '>Recetas</h1>
      
      {/*Visaulizar una imagen desde Base64 */}
      <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
      AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="punto rojo" />
      <div>
        
      </div>
    </>
  )
}

export default Recetas 