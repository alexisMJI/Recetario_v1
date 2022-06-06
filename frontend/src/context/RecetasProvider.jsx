import { useState, useEffect, createContext } from 'react'
import Alerta from '../components/Alerta';
import clienteAxios from '../config/clienteAxios'


const RecetasContext = createContext();

const RecetasProvider = ({children}) => {

    const [recetas, setRecetas]= useState([])
    const[alerta, setAlerta] = useState([])

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(()=>{
            setAlerta({})
        }, 5000);
    }
    
    return(
        <RecetasContext.Provider value={{recetas, mostrarAlerta, alerta}}>
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