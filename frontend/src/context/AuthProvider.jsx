import{useState, useEffect, createContext} from 'react'
import clienteAxiosUsers from '../config/clienteAxiosUsers';
import { useNavigate } from 'react-router-dom';
/*
CONTEXT está diseñado para compartir datos que pueden considerarse “globales”
Usando Context podemos evitar pasar props a través de componentes intermedios

Cada objeto Context viene con un componente Provider de React que 
permite que los componentes que lo consumen se suscriban a los cambios del contexto. 
*/
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    //Hook FROM 'react-router-dom' Redirect user to a specific Url
    const navigate =useNavigate();
    //state para almacenar el user
    const [auth,setAuth] = useState({})
    //flag utilizada para el Componente RutaProtegida
    const [cargando, setCargando] = useState(true)

    //fn useEffect se ejecuta cuando un state cambia o cuando el componente esta listo.
    useEffect(()=> {    
        const verificarUsuario = async () => {
            
            const token = localStorage.getItem('token')

            if(!token) {
                setCargando(false)
                return
            }

            const config = {
                headers: {
                "Conten-Type": "application/json",
                Authorization : `Bearer ${token}`
                }
            }


            try {
                const {data} = await clienteAxiosUsers('/users/me',config)
                //seteamos Auth con los valores del usuario si el back valida el token
                setAuth(data)
                console.log(data)
                //redirigimos a la pagina recetas porq el token es valido
                navigate('/recetas')

               
            } catch (error) {
                //limpiamos Auth por si quedaron datos de un usuario que se le vencio el token
                console.log(error)
                setAuth({})
            }

            setCargando(false)

        }
        verificarUsuario()
    },[])
    
    //declaramos que datos queremos pasar con context en este caso auth y setAuth
    return(
        <AuthContext.Provider value={{auth,setAuth,cargando}}>
             {children}
        </AuthContext.Provider>
    )
}

//exportamos nuestro provider
export{
    AuthProvider
}

//exportamos como default nuestro context
export default AuthContext;