import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import { ProductProps } from "../interface/ProductProps";

interface ProductProviderProps {
    children: React.ReactNode
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<ProductProps[]>([]);
    
    useEffect(() => {
        setProducts([
            {
                name: 'Collar de corazón',
                description: 'Ejemplo',
                url: 'https://es.aliexpress.com/item/1005004524687860.html?spm=a2g0o.productlist.main.11.36c4lls1lls1TS&algo_pvid=a325f1c8-28e5-45ce-855b-3906e0ae5242&algo_exp_id=a325f1c8-28e5-45ce-855b-3906e0ae5242-5&pdp_npi=4%40dis%21EUR%212.59%210.99%21%21%212.67%211.02%21%402103850917334861578388442eda25%2112000029473615431%21sea%21ES%210%21ABX&curPageLogUid=mJCFwkux80e2&utparam-url=scene%3Asearch%7Cquery_from%3A',
                type: 1,
                price: 0.99,
                stock: 10,
                status: 1
            }
        ])
    }, []);

    const addProduct = (newProduct: ProductProps) => {
        setProducts((prevProduct) => [...prevProduct, newProduct]);
    }

    return (
        <ProductContext.Provider value={{ addProduct, products }}>{ children }</ProductContext.Provider>
    )

}