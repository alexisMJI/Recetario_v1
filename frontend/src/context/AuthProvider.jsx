import{useState, useEffect, createContext} from 'react'
import clienteAxios from '../config/clienteAxios';
/*
CONTEXT provee una forma de pasar datos a través del árbol de componentes 
sin tener que pasar props manualmente en cada nivel.

Context está diseñado para compartir datos que pueden considerarse “globales”
Usando Context podemos evitar pasar props a través de elementos intermedios


Cada objeto Context viene con un componente Provider de React que 
permite que los componentes que lo consumen se suscriban a los cambios del contexto. 
Todos los consumidores que son descendientes de un Provider 
se vuelven a renderizar cada vez que cambia la prop value del Provider
El componente Provider acepta una prop value que se pasará a los componentes consumidores 
que son descendientes de este Provider
*/




//creamos una variable llamada authcontext y le asignamos el valor de createContext: Fn que crea un objeto Context
const AuthContext = createContext();

//Definimos fn Provider, por lo que entiendo va a proveer los datos a los componentes hijos
const AuthProvider = ({children}) => {

    //definimos e inicializamos a nuestra variable state llamada  auth
    const [auth,setAuth] = useState({})

    //definimos nuestra fn useEffect  callback, que se ejecuta cuando un state cambia o cuando el componente esta listo.
    useEffect(()=> {
        //definimos una var
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('accessToken')
            if(!token){
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                //request pasando el token generado
                const {data} = await clienteAxios.get('/users/2', config)
                setAuth(data)
                
            } catch (error) {
                
            }

            
        }
        autenticarUsuario()
    },[])
    
    
    
    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth

            }}
        >
             {children}
        </AuthContext.Provider>
    )
}

export{
    AuthProvider
}

export default AuthContext;