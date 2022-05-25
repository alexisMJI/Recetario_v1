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
    //definimos una var state que nos va a a servir de flag para saber si nuestra fn de autenticarusuario se ejecuto correctamente
    const [cargando, setCargando] = useState(true)

    //definimos nuestra fn useEffect  callback, que se ejecuta cuando un state cambia o cuando el componente esta listo.
    useEffect(()=> {
        console.log("arranco el useeffect del componente authprovider")
        //definimos una fn en donde podemos tomar el valor del token del localstorage y utilizarlo en otras request a la api & cargamos el usuario en Auth
        const autenticarUsuario = async () => {
            //defnimos var con el valor del token y user en caso de existir en el storage
            const token = localStorage.getItem('accessToken')
            const usuario = sessionStorage.getItem('usuario')
            
            // en caso de no existir hacemos un return y seteamos a cargando como false
            if(!token){
                setCargando(false)
                return
            }
            
            // definimos una var en donde tenemos como parametro el token
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                /*request pasando el token generado y obtener los datos del usuario | LO USAN EN LOS VIDEOS | entiendo que se usa para validar que el token siga siendo valido
                 const {data} = await clienteAxios.get('/user', config)*/

                //en caso de no existir hacemos un return y seteamos a Cargando como false
                if(!usuario){
                    setCargando(false)
                    return
                }
                setAuth(JSON.parse(sessionStorage.getItem("usuario")))
                
                
            } catch (error) {
                //en caso de que el token ya no sea valido asignamos el state auth como vacio
                setAuth({})
            }
            setCargando(false)
            
        }
        autenticarUsuario()
    },[])
    
    
    //declaramos que datos queremos pasar con context en este caso auth y setAuth
    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando

            }}
        >
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