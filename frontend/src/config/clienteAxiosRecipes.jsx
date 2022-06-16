import axios from "axios";

const clienteAxiosRecipes = axios.create({
    baseURL: "https://crudrecipes.herokuapp.com"
    //"https://crudrecipes.herokuapp.com"
    //"http://localhost:4000"
})

export default clienteAxiosRecipes