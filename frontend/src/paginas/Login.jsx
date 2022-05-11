import {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'
import useAuth from '../hooks/useAuth'
import axios from 'axios'


export const Login = () => {

  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const [ alerta, setAlerta] = useState({})

  const { setAuth } = useAuth();
  
  
    



  const handleSubmit = async e => {
    e.preventDefault();
    

    if([email, password].includes('')){
      setAlerta({
        msg: 'todos los campos son obligatorios',
        error: true
      })
      return
    }
    
    
    try {
      const {data} = await clienteAxios.post('/login',{email,password})
      
      localStorage.setItem('accessToken',data.accessToken)
      setAuth(data)
      setAlerta({
        msg: "Acceso correcto",
        error: false
      })
      return
    } catch (error) {
      console.log(error.response.data)
      setAlerta({
        msg: "No se pudo iniciar sesion - "+ error.response.data,
        error: true
      })
      return
    }

  }

  //extraemos el msg de alerta
  const {msg} = alerta

  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>Inicia sesión en el <span className='text-slate-700'>Recetario</span></h1>
      {/*si la variable msg tiene algo significa q el objeto no esta vacio entonces utilizamos el componente alerta, pasandole como prop nuestra alerta*/}
      {msg && <Alerta alerta={alerta}/>}
      <form className='my-10 bg-white shadow rounded p-10' onSubmit={handleSubmit}>

      <div className='my-5'>
          <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='email'>Email</label>
          <input id='email' type="email" placeholder='Ingresa tu Correo' className='w-full mt-3 p-3 border rounded bg-gray-50' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='my-5'>
          <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='password'>contraseña</label>
          <input id='password' type="password" placeholder='Ingresa tu Password' className='w-full mt-3 p-3 border rounded bg-gray-50' value={password} onChange={(e)=> setPassword(e.target.value)}/>       
        </div>
        
        <input type="submit" value="Iniciar Sesion" className='mb-5 bg-sky-700 w-full py-3 text-white uppercase rounded hover:cursor-pointer hover:bg-sky-800 hover:transition-colors' />


      </form>

      <nav className='lg:flex lg:justify-between'> 
        <Link to="/registrar" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          Registrate
        </Link>

        <Link to="/olvide-password" className='block text-center my-5 text-slate-500 uppercase text-sm'>
          Olvide mi password
        </Link>
      </nav>
    </>
  )
}

export default Login