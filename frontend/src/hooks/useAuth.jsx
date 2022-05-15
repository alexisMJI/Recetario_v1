import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

//utilizamos este hook para llamar al context
const useAuth = () => {
    return useContext(AuthContext)

}

export default useAuth