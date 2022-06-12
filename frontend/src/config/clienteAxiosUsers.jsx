import axios from "axios";

const clienteAxiosUsers = axios.create({
    baseURL: "https://holamundo-prueba.herokuapp.com"
    //"https://holamundo-prueba.herokuapp.com"
    //"http://localhost:4000"
})

export default clienteAxiosUsers