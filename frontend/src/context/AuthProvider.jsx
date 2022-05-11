import{useState, useEffect, createContext} from 'react'
import clienteAxios from '../config/clienteAxios';


const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth,setAuth] = useState({})

    useEffect(()=> {
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
                const {data} = await clienteAxios.get('/users', config)
                
                
            } catch (error) {
                
            }

            console.log('si hay token')
        }
        autenticarUsuario()
    },[])
    




    
    return(
        <AuthContext.Provider
            value={{
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