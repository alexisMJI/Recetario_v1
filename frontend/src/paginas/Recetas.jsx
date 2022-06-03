import React from 'react'
import useRecetas from '../hooks/useRecetas'


const Recetas = () => {

  const {recetas} = useRecetas();
  console.log(recetas)

  return (
    <>
      <h1 className=' text-4xl font-black '>Recetas</h1>
      
      <a href="https://www.pexels.com">
        <img src="https://www.meme-arsenal.com/memes/6200d14d795eab11d26a3afabed68439.jpg" />
      </a>
      <div>
        
      </div>
    </>
  )
}

export default Recetas