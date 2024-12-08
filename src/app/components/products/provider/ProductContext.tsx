import { createContext } from "react";
import { ProductProps } from "../interface/ProductProps";

interface ProductContextProps {
    addProduct(newProduct: ProductProps): void
    products: ProductProps[]
}

export const ProductContext = createContext<ProductContextProps | undefined>(undefined);