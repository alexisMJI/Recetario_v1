import React from 'react'
import useRecetas from '../hooks/useRecetas'


const Recetas = () => {

  const {recetas} = useRecetas();
  console.log(recetas)

  return (
    <>
      <h1 className=' text-4xl font-black '>Recetas</h1>
      
      
        <img src="https://www.meme-arsenal.com/memes/6200d14d795eab11d26a3afabed68439.jpg" />
      
      <div>
        
      </div>
    </>
  )
}

export default Recetas