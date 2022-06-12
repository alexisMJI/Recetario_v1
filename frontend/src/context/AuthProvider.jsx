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
            if(!token) 
                return


            const config = {
                headers: {
                "Conten-Type": "application/json",
                Authorization : `Bearer ${token}`
                }
            }

            try {
                
                //seteamos Auth con los valores del usuario
                
               const {data} = await clienteAxiosUsers()
            } catch (error) {
                
            }
          
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