import{useState, useEffect, createContext} from 'react'
import clienteAxios from '../config/clienteAxios';
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
    const [auth,setAuth] = useState({})
    //flag para saber si nuestra fn autenticarusuario se ejecuto correctamente
    const [cargando, setCargando] = useState(true)

    //fn useEffect se ejecuta cuando un state cambia o cuando el componente esta listo.
    useEffect(()=> {
        
        const verificarUsuario = async () => {
            
            const usuario = JSON.parse(sessionStorage.getItem("usuario"))   
           
            if(!usuario){
                setCargando(false) 
                return   
            } else{
                //seteamos a Auth con los valores de usuario
                setAuth(usuario)
                //si ya inicio sesion correctamente y quiere acceder a la pantalla de login lo redireccionamos
                navigate('/recetas')
                setCargando(false)   
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