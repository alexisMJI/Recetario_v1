import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/clienteAxios'


const RecetasContext = createContext();

const RecetasProvider = ({children}) => {

    const [recetas, setRecetas]= useState([])

    
    return(
        <RecetasContext.Provider value={{recetas}}>
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