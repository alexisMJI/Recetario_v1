import { useContext } from "react";
import RecetasContext from "../context/RecetasProvider";

//utilizamos este hook para llamar al context
const useRecetas = () => {
    return useContext(RecetasContext)

}

export default useRecetas