import { AddProduct } from "../../components/products/AddProduct"
import { ProductsList } from "../../components/products/ProductsList"
import { ProductProvider } from "../../components/products/provider/ProcuctProvider"

export const ProductsPage: React.FC = () => {
    return (
        <>
            <ProductProvider>
                <AddProduct />
                <ProductsList />
            </ProductProvider>
        </>
    )
}