import { Button } from "@mui/material";
import { TableComponent } from "../TableComponent";
import { GridColumn } from "../shared/ListTable";
import { useProduct } from "./provider/useProduct";
import { useEffect, useState } from "react";

export const ProductsList: React.FC = () => {
    const { products } = useProduct();
    const [list, setList] = useState<object[]>([]);

    const gridColumn: GridColumn[] = [
        {
            field: 'name',
            headerName: 'Nombre',
            width: 70
        },
        {
            field: 'url',
            headerName: 'URL',
            width: 100
        },
        {
            field: 'type',
            headerName: 'Tipo',
            width: 70
        },
        {
            field: 'size',
            headerName: 'Talla',
            width: 50
        },
        {
            field: 'price',
            headerName: 'Precio',
            width: 50
        },
        {
            field: 'stock',
            headerName: 'Cantidad',
            width: 50
        },
        {
            field: 'status',
            headerName: 'Estado',
            width: 50
        },
        {
            field: 'button',
            headerName: '',
            width: 70
        }
    ];

    useEffect(() => {
        const datas = products.map((product, index) => {
            return {
                id: index,
                name: product.name,
                url: (<a href={ product.url } target="_blank">{ product.url }</a>),
                type: 'Accesorio',
                size: product.size,
                price: product.price,
                stock: product.stock,
                status: 'Pendiente',
                button: ( <Button>Ver detalle</Button> )
            }
        });
        setList(datas);
    }, [products]);

    return(
        <>
            <TableComponent cols={ gridColumn } list={ list } />
        </>
    );
}