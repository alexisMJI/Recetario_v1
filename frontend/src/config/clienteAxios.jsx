import axios from "axios";

const clienteAxios = axios.create({
    baseURL: "https://holamundo-prueba.herokuapp.com"
})

export default clienteAxios