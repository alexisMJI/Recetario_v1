import { useState, useEffect, createContext } from 'react'
import Alerta from '../components/Alerta';
import clienteAxiosRecipes from '../config/clienteAxiosRecipes'
import {useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const RecetasContext = createContext();

const RecetasProvider = ({children}) => {
    //definimos states y fn
    const [recetas, setRecetas]= useState([])
    const [alerta, setAlerta] = useState([])
    const navigate = useNavigate();
    //Llamamos a nuestro hook useAuth para extraer los datos de nuestro context Auth(state global)
    const {auth} = useAuth()
    console.log("desde recetasprovider antes de effect",auth)

    //Soliticamos las Recipes del usuario logueado al Backend 
    useEffect(()=>{
        const obtenerRecipes = async ()=>{
            console.log("empuieza useeffectRECETASPROVIDER")
           
            try {
                const token = localStorage.getItem('token');
                if(token == null || !token){
                    //reload asi se activa el useEffect que se encarga de validar el token en el context AuthProvider y setear Auth con los datos del user
                    
                     return


                }
                
                if(auth.id){
                let userId = auth.id;
                console.log("desde userid",userId)
                const {data} = await clienteAxiosRecipes(("/recipes?user_id="+userId));
                console.log("esto es de  obtener recipes")
                console.log(data)
                setRecetas(data)
                return
            }
                return
            

            } catch (error) {
                console.log(error)
            }
        }
        obtenerRecipes()
        console.log("TERMINA useeffectRECETASPROVIDER")
    },[auth])//esta atento a los cambios que se realizen en el state auth
    
    

    //fn setea alerta con timer
    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(()=>{
            setAlerta({})
        }, 5000);
    }

    // fn envia receta al Backend Recipes
    const submitReceta = async receta => {

        //extraemos los datos que nos pasaron
        const {title,ingredients,preparation,image} = receta

        const token = localStorage.getItem('token');
        //validamos si existe o si esta vacio el token
            if(token == null || !token) {
               mostrarAlerta({
                msg: 'Error a la hora de crear receta',
                error: true
                });
                //reload asi se activa el useEffect que se encarga de validar el token en el context AuthProvider y setear Auth con los datos del user
                window.location.reload();   
            }

        // Peticion Crear receta en la API
        try{
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            
            const {data} = await clienteAxiosRecipes.post(("/recipes"),{title,ingredients,preparation,image},config)
            console.log(data)

            mostrarAlerta({
            msg: 'Receta creada correctamente',
            error: false
            })
            //si se creo limpiamos alerta y redirigimos a la pag de recetas
            setTimeout(()=>{
                setAlerta({})
                navigate("/recetas")
            },3000)
        
    }catch (error){
        console.log(error)
        mostrarAlerta({
          msg: 'Error a la hora de crear receta',
          error: true
        })
    }

    }
    
    return(
        <RecetasContext.Provider value={{recetas, mostrarAlerta, alerta, submitReceta}}>
            {children}
        </RecetasContext.Provider>
    )

}

//exportamos nuestro provider
export{
    RecetasProvider
}

//exportamos como default nuestro context
export default RecetasContext;