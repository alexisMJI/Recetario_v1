import React from 'react'
import useRecetas from '../hooks/useRecetas'


const Recetas = () => {

  const {recetas} = useRecetas();
  console.log(recetas)

  return (
    <>
      <h1 className=' text-4xl font-black '>Recetas</h1>
      
<a href="https://www.pexels.com">
  <img src="https://images.pexels.com/lib/api/pexels-white.png" />
</a>
      <div>
        
      </div>
    </>
  )
}

export default Recetas