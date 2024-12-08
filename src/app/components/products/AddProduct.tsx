import { Button, CardActions, FormControl, Grid2, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps, TextField } from "@mui/material"
import { ModalComponent } from "../ModalComponent"
import { useState } from "react"
import styled from "@emotion/styled";
import { ProductProps } from "./interface/ProductProps";
import { ErrorProps } from "../shared/ErrorProps";
import { useProduct } from "./provider/useProduct";

export const AddProduct: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { addProduct } = useProduct();

    const productDefault = {
        name: '',
        price: 0,
        description: '',
        type: 0,
        url: '',
        status: 1
    };

    const [product, setProduct] = useState<ProductProps>(productDefault);
    const [errors, setErrors] = useState<ErrorProps[]>([]);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setProduct(prevData => ({...prevData, [name]: value}));
        setErrors((prevErrors) => prevErrors.filter(error => error.name !== name));
    }

    const handleChangeSelect = (event: SelectChangeEvent<string | number>) => {
        const {name, value} = event.target;
        setProduct(prevData => ({...prevData, [name]: value}));
        setErrors((prevErrors) => prevErrors.filter(error => error.name !== name));
    }

    const handleClose = () => {
        setOpen(false);
        //setSelectedValue(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!validateAll()) {
            addProduct(product);
            setOpen(false);
            setProduct(productDefault);
        }
    }

    const validateAll = () => {
        let isErrors = false;
        const keys: string[] = Object.keys(product);
        keys.forEach(key => {
            if(product[key] === '' || product[key] === 0) {
                const error: ErrorProps = { name: key, error: 'Este campo no debería estar vacío' };
                setErrors((prevErrors) => [...prevErrors, error]);
                isErrors = true;
            } else {
                setErrors((prevErrors) => prevErrors.filter(error => error.name !== key));
            }
        });
        return isErrors;
    }

    return (
        <>
            <Grid2 container sx={ gridStyle }>
                <Button variant="contained" onClick={ handleOpen }>Añadir</Button>
            </Grid2>
            <ModalComponent open={ open } onClose={ handleClose } title="Crear un producto">
                <Form onSubmit={ handleSubmit }>
                    <Grid2 container spacing={2}>
                        <Grid2 size={10}>
                            <TextField sx={ inputFieldStyle } id="name" name="name" label="Nombre de producto" variant="outlined" value={ product.name } onChange={ handleChangeField } error={ errors.some(error => error.name === 'name') }/>
                        </Grid2>
                        <Grid2 size={2}>
                            <TextField sx={ inputFieldStyle } id="price" name="price" label="Precio" variant="outlined" value={ product.price } onChange={ handleChangeField } error={ errors.some(error => error.name === 'price') } />
                        </Grid2>
                        <Grid2 size={12}>
                            <TextField sx={ inputFieldStyle } id="url" name="url" label="URL" variant="outlined" value={ product.url } onChange={ handleChangeField } error={ errors.some(error => error.name === 'url') } />
                        </Grid2>
                        <Grid2 size={12}>
                            <TextField sx={ inputFieldStyle } id="description" name="description" label="Descripción" variant="outlined" value={ product.description } onChange={ handleChangeField } error={ errors.some(error => error.name === 'description') } />
                        </Grid2>
                        <Grid2 size={6}>
                            <FormControl variant="outlined" sx={ inputFieldStyle } error={ errors.some(error => error.name === 'type') }>
                                <InputLabel id="type">Tipo</InputLabel>
                                <Select
                                    labelId="type"
                                    id="type"
                                    name="type"
                                    label="Tipo"
                                    value={ product.type }
                                    onChange={handleChangeSelect}
                                >
                                    <MenuItem value={0}><em>None</em></MenuItem>
                                    <MenuItem value={1}>Accesorio</MenuItem>
                                    <MenuItem value={2}>Ropa</MenuItem>
                                    <MenuItem value={3}>Mueble</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid2>
                        <Grid2 size={6}>
                            <FormControl variant="outlined" sx={ inputFieldStyle }>
                                <InputLabel id="type">Subtipo</InputLabel>
                                <Select
                                    labelId="subtype"
                                    id="subtype"
                                    name="subtype"
                                    label="Subtipo"
                                    onChange={handleChangeSelect}
                                >
                                    <MenuItem value={0}><em>None</em></MenuItem>
                                    <MenuItem value={1}>Jersey</MenuItem>
                                    <MenuItem value={2}>Sudadera</MenuItem>
                                    <MenuItem value={3}>Camiseta</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid2>
                        <Grid2 size={4}>
                            <TextField sx={ inputFieldStyle } id="size" name="size" label="Talla" variant="outlined" value={ product.size } onChange={ handleChangeField } />
                        </Grid2>
                        <Grid2 size={4}>
                            <TextField sx={ inputFieldStyle } id="stock" name="stock" label="Cantidad" variant="outlined" value={ product.stock } onChange={ handleChangeField } />
                        </Grid2>
                        <Grid2 size={4}>
                            <FormControl variant="outlined" sx={ inputFieldStyle }>
                                <InputLabel id="type">Estado</InputLabel>
                                <Select
                                    labelId="status"
                                    id="status"
                                    name="status"
                                    label="Estado"
                                    value={ product.status }
                                    onChange={handleChangeSelect}
                                >
                                    <MenuItem value={1}>Pendiente</MenuItem>
                                    <MenuItem value={2}>Comprado</MenuItem>
                                    <MenuItem value={3}>En venta</MenuItem>
                                    <MenuItem value={4}>Vacío</MenuItem>
                                    <MenuItem value={5}>Cancelado</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid2>
                    </Grid2>
                    <CardActions sx={{ mt:2 }}>
                        <Button type="submit" variant="contained">Añadir</Button>
                    </CardActions>
                </Form>
            </ModalComponent>
        </>
    )
}

const Form = styled.form`
    padding: 20px;
`

const gridStyle: SxProps = {
    paddingY: 4,
    justifyContent: "flex-end"
}

const inputFieldStyle: SxProps = {
    width: '100%'
}