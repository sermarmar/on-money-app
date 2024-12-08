import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export const useProduct = () => {
    const context = useContext(ProductContext);
    
    if(!context) {
        throw new Error("useProduct debe usarse dentro ProductContext");
    }
    return context;
}