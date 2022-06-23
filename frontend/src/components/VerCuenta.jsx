
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const VerCuenta = () => {

  const {auth, cargando} = useAuth()
    

  //si la flag es true 
  if(cargando) {
    return 'cargando'
  }

  return (
    <>
    <div className='flex justify-between '>
        <h1>{''}</h1>
        <div className='flex items-center gap-2 text-gray-600 hover:text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <Link to={'editar'} className='uppercase font-bold'> Editar</Link>
        </div>
    </div>
    <div className="mt-10 flex justify-center">
        <form className='bg-white py-10 px-5 md: w-1/2 rounded-lg shadow-xl'>
            <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='nombre'>Nombre</label>
            <input id='title' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Titulo de la Receta' value={auth.name} disabled />
            
            <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='ingredients'>Apellido</label>
            <input id='ingredients' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Ingredientes de la Receta' value={auth.lastname} disabled />

            <label className='text-gray-700 uppercase font-bold text-sm' htmlFor='preparation'>Email</label>
            <input id='preparation' type="text" className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Preparacion de la Receta' value={auth.email} disabled />
            
      

        </form>
    </div>
</>
  )
}

export default VerCuenta