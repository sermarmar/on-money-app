import { Button } from "@mui/material";
import { TableComponent } from "../TableComponent";
import { GridColumn } from "../shared/ListTable";

export const ProductsList: React.FC = () => {
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
    const list = [
        {
            id: 1,
            name: 'Collar de corazón',
            url: (<a href="https://es.aliexpress.com/item/1005004524687860.html?spm=a2g0o.productlist.main.11.36c4lls1lls1TS&algo_pvid=a325f1c8-28e5-45ce-855b-3906e0ae5242&algo_exp_id=a325f1c8-28e5-45ce-855b-3906e0ae5242-5&pdp_npi=4%40dis%21EUR%212.59%210.99%21%21%212.67%211.02%21%402103850917334861578388442eda25%2112000029473615431%21sea%21ES%210%21ABX&curPageLogUid=mJCFwkux80e2&utparam-url=scene%3Asearch%7Cquery_from%3A" target="_blank">'https://es.aliexpress.com/item/1005004524687860.html?spm=a2g0o.productlist.main.11.36c4lls1lls1TS&algo_pvid=a325f1c8-28e5-45ce-855b-3906e0ae5242&algo_exp_id=a325f1c8-28e5-45ce-855b-3906e0ae5242-5&pdp_npi=4%40dis%21EUR%212.59%210.99%21%21%212.67%211.02%21%402103850917334861578388442eda25%2112000029473615431%21sea%21ES%210%21ABX&curPageLogUid=mJCFwkux80e2&utparam-url=scene%3Asearch%7Cquery_from%3A'</a>),
            type: 'Accesorio',
            size: '',
            price: 0.99,
            stock: 10,
            status: 'Pendiente',
            button: ( <Button>Ver detalle</Button> )
        }
    ]
    return(
        <>
            <TableComponent cols={ gridColumn } list={ list } />
        </>
    );
}