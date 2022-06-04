import axios from "axios";

const clienteAxiosRecipes = axios.create({
    baseURL: "http://localhost:4000"
    //"https://crudrecipes.herokuapp.com"
    //"http://localhost:4000"
})

export default clienteAxiosRecipes