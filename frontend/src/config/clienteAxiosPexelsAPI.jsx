import axios from "axios";

export const getImagenesAPI = async (searchTerm = "food") =>
    await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`,{
        headers: {
            Authorization: "563492ad6f917000010000016157236b2a6e475bb8eb4c91e5ca6392"
        }
    })

