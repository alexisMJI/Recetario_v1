import axios from "axios";

const clienteAxiosRecipes = axios.create({
    baseURL: "https://crudrecipes.herokuapp.com"
    
})

export default clienteAxiosRecipes