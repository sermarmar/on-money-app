import { AddProduct } from "../../components/products/AddProduct"
import { ProductsList } from "../../components/products/ProductsList"

export const ProductsPage: React.FC = () => {
    return (
        <>
            <AddProduct />
            <ProductsList />
        </>
    )
}