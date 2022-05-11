import axios from "axios";

const clienteAxios = axios.create({
    baseURL: "https://holamundo-prueba.herokuapp.com"
    //"https://holamundo-prueba.herokuapp.com"
    //"http://localhost:4000"
})

export default clienteAxios