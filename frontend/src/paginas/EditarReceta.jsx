import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useRecetas from '../hooks/useRecetas'
import FormularioReceta from '../components/FormularioReceta'

const EditarReceta = () => {
    
    const params = useParams()
    const {obtenerReceta, receta, cargando} = useRecetas()

    useEffect(()=>{
        //le pasamos a la funcion el id de la receta asi nos devuelve los datos de la receta
        obtenerReceta(params.id)
    },[])
    
    const {title,ingredients,preparation,image,user_id} = receta;

    if(cargando==true) return 'cargando...'

    return (
        <>
            <h1 className='font-black text-4xl'>Editar Receta: {title}</h1>
            <div className="mt-10 flex justify-center">
                <FormularioReceta/>
            </div>
        </>
    )
}

export default EditarReceta