import axios from "axios";

const clienteAxiosRecipes = axios.create({
    baseURL: "http://localhost:4000"
    
    //"https://recipesjwt.herokuapp.com" //recordar cambiar en todo el proyecto al back de cris con _id porq ahora esta en id con el fake cuando usamos recetas
    //"http://localhost:4000"
})

export default clienteAxiosRecipes