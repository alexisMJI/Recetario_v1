import axios from 'axios'
import {useState} from 'react'
import {Link } from 'react-router-dom'
import Alerta from '../components/Alerta'

function Registrar() {
  const [ nombre, setNombre] = useState('')
  const [ apellido, setApellido] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const [ repetirPassword, setRepetirPassword] = useState('')
  const [ alerta, setAlerta] = useState({})



  const handleSubmit = async e =>{
    e.preventDefault();

    //validamos que si alguno de los campos estan vacios
    if([nombre, apellido, email, password, repetirPassword].includes(''))
    {
      setAlerta({
        msg: 'todos los campos son obligatorios',
        error: true
      })
      return
    }
    
    if(password !== repetirPassword)
    { 
      setAlerta({
        msg: 'Las claves ingresadas no coinciden',
        error: true
      })
      return
    }

    setAlerta({})

    const url = "https://holamundo-prueba.herokuapp.com/users"
    // Crear el usuario en la API
    try{
        const respuesta = await axios.get(url)
        console.log(respuesta)
    } catch (error){
        console.log(error)
    }
  }


  //voy a extraer el msj de la alerta y en el caso de que exista significa que ya tiene algo, ya no esta vacio ese objeto
  const { msg } = alerta



  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>Registrate en el <span className='text-slate-700'>Recetario</span></h1>
      
      {/*si msg tiene algo significa q el objeto no esta vacio*/}
      {msg && <Alerta alerta={alerta}/>}

      <form className='my-10 bg-white shadow rounded p-10' onSubmit={handleSubmit}>

        <div className='my-5'>
          <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='nombre'>Nombre</label>
          <input id='nombre' type="text" placeholder='Ingresa tu nombre' className='w-full mt-3 p-3 border rounded bg-gray-50' value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
        </div>

        <div className='my-5'>
          <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='apellido'>Apellido</label>
          <input id='apellido' type="text" placeholder='Ingresa tu apellido' className='w-full mt-3 p-3 border rounded bg-gray-50' value={apellido} onChange={(e)=> setApellido(e.target.value)}/>
        </div>

        <div className='my-5'>
          <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='email'>Email</label>
          <input id='email' type="email" placeholder='Ingresa tu Correo' className='w-full mt-3 p-3 border rounded bg-gray-50' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <div className='my-5'>
          <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='password'>contraseña</label>
          <input id='password' type="password" placeholder='Ingresa tu Password' className='w-full mt-3 p-3 border rounded bg-gray-50' value={password} onChange={(e)=> setPassword(e.target.value)}/>       
        </div>

        <div className='my-5'>
          <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='password2'>repite tu contraseña</label>
          <input id='password2' type="password" placeholder='Repetir tu Password' className='w-full mt-3 p-3 border rounded bg-gray-50' value={repetirPassword} onChange={(e)=> setRepetirPassword(e.target.value)}/>       
        </div>

        
        <input type="submit" value="crear cuenta" className='mb-5 bg-sky-700 w-full py-3 text-white uppercase rounded hover:cursor-pointer hover:bg-sky-800 hover:transition-colors'/>


      </form>

      <nav className='lg:flex lg:justify-between'> 
        <Link to="/" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          Iniciar Sesion
        </Link>

        <Link to="/olvide-password" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          Olvide mi password
        </Link>
      </nav>
    </>
  )
}

export default Registrar