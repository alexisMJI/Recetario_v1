import { useState, useEffect, createContext } from 'react'
import Alerta from '../components/Alerta';
import clienteAxiosRecipes from '../config/clienteAxiosRecipes'
import {useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const RecetasContext = createContext();

const RecetasProvider = ({children}) => {
    //definimos states y fn
    const [recetas, setRecetas]= useState([])
    const [receta, setReceta]= useState({})
    const [alerta, setAlerta] = useState({})
    const [cargando, setCargando] = useState(true)
    const navigate = useNavigate();
    //Llamamos a nuestro hook useAuth para extraer los datos de nuestro context Auth(state global)
    const {auth} = useAuth()
    

    //Soliticamos las Recipes del usuario logueado al Backend 
    useEffect(()=>{
        const obtenerRecetas = async ()=>{
            console.log("empuieza useeffectRECETASPROVIDER")
            try {
                const token = localStorage.getItem('token');
                if(token == null || !token)
                    return

                //si auth.id existe 
                if(auth.id){
                    const userId = auth.id;
                    console.log("DESDE userid",userId)
                    const {data} = await clienteAxiosRecipes(("/userid/"+userId));//"/recipes?user_id=" | "/recipes/user_id/"
                    console.log("Obtener recipes", data)
                    setRecetas(data)
                    return
                }

                return

            } catch (error) {
                console.log(error)
            }
        }
        obtenerRecetas()
        console.log("TERMINA useeffectRECETASPROVIDER")
    },[auth])//esta atento a los cambios que se realizen en el state auth que se actualiza porq esta en otro useEffect global
    
    //fn setea alerta con timer
    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(()=>{
            setAlerta({})
        }, 5000);
    }

    // fn envia peticion al Backend Recipes
    const submitReceta = async receta => {
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
        
        const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
        
        if(receta.id){
            await editarReceta(receta,config)
        } else {
            await nuevaReceta(receta,config)
        }

        return

    }

    const nuevaReceta = async (receta,config) =>{
        console.log('nueva receta')
        //extraemos los datos que nos pasaron
        const {title,ingredients,preparation,image} = receta
        // Peticion Crear receta en la API
        try{
            const user_id = 45;//cuando conectemos con cris volamos esto... ya q lo hace el cn el jwt
            const {data} = await clienteAxiosRecipes.post(("/recipes"),{title,ingredients,preparation,image,user_id},config)
            console.log(data)
            //con la nueva receta creada la agregamos a nuestro state recetas
            setRecetas([...recetas, data])

            mostrarAlerta({
                msg: 'Receta creada correctamente',
                error: false
            })
            //si se creo limpiamos alerta y redirigimos a la pag de recetas
            setTimeout(()=>{
                setAlerta({})
                navigate("/recetas")
            },3000)
        
        } catch (error){
            console.log(error)
            mostrarAlerta({
                msg: 'Error a la hora de crear receta',
                error: true
            })
        }
    }

    const editarReceta = async (receta,config) =>{
        console.log('editar receta')
        //extraemos los datos que nos pasaron
        const {title,ingredients,preparation,image,id} = receta
        // Peticion Crear receta en la API
        try{
            //const user_id = 45;//cuando conectemos con cris volamos esto... ya q lo hace el cn el jwt
            const {data} = await clienteAxiosRecipes.put(("/recipes/"+id),{title,ingredients,preparation,image},config)//back fake , ,user_id}
            console.log(data)
            //sincronizamos las recetas en el state
            //Entiendo que recorre el state recetas y sobreescribe aquella que tenga el mismo id que la receta que estamos editando
            const recetasActualizadas = recetas.map( recetaState => recetaState._id === data._id ? data : recetaState)//sacar id por _id

            setRecetas(recetasActualizadas) 




            mostrarAlerta({
                msg: 'Receta editada correctamente',
                error: false
            })
            //si se creo limpiamos alerta y redirigimos a la pag de recetas
            setTimeout(()=>{
                setAlerta({})
                navigate("/recetas")
            },3000)
        
        } catch (error){
            console.log(error)
            mostrarAlerta({
                msg: 'Error a la hora de editar receta',
                error: true
            })
        }
        
    }
    
    //consulta la receta por id al Backend Recipes
    const obtenerReceta = async id =>{
        setCargando(true)
        try {
            const {data} = await clienteAxiosRecipes(`/recipes/${id}`)
            //guardamos la receta en el state receta
            setReceta(data)
        } catch (error) {
            console.log(error)
        }
         
        setCargando(false)
        
    }

    const eliminarReceta = async id =>{
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
        
        const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

        try{
                
                const {data} = await clienteAxiosRecipes.delete(("/recipes/"+id),config)
                console.log(data)

                //sincronizamos las recetas en el state
                //entioendo que recorre la lista de recetas y deja las que son distintas q el id a borrar.
                const recetasActualizadas = recetas.filter( recetaState => recetaState._id != id)//recordar sacar el PRIMER id por _id
                console.log(recetasActualizadas)
                setRecetas(recetasActualizadas) 
    
        
                mostrarAlerta({
                    msg: 'Receta Eliminada correctamente',
                    error: false
                })
                //si se creo limpiamos alerta y redirigimos a la pag de recetas
                setTimeout(()=>{
                    setAlerta({})
                    navigate("/recetas")
                },3000)
            
        } catch (error){
                console.log(error)
                mostrarAlerta({
                    msg: 'Error a la hora de eliminar receta',
                    error: true
                })
        }
    }
    const cerrarSesionRecetas= () =>{
        setReceta({})
        setRecetas([])
        setAlerta({})
    }


    return(
        <RecetasContext.Provider value={{recetas, mostrarAlerta, alerta, submitReceta, obtenerReceta,receta,cargando,eliminarReceta,cerrarSesionRecetas}}>
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