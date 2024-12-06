import { Button, CardActions, FormControl, Grid2, InputLabel, MenuItem, Select, SxProps, TextField } from "@mui/material"
import { ModalComponent } from "../ModalComponent"
import { useState } from "react"
import styled from "@emotion/styled";
import { ProductProps } from "./interface/ProductProps";

export const AddProduct: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState<ProductProps>({
        name: '',
        description: '',
        type: '',
        url: '',
        status: ''
    });

    const handleOpen = () => {
        setOpen(true);
    }

    const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setProduct(prevData => ({...prevData, [name]: value}));
    }

    const handleClose = () => {
        setOpen(false);
        //setSelectedValue(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <>
            <Grid2 container sx={ gridStyle }>
                <Button variant="contained" onClick={ handleOpen }>Añadir</Button>
            </Grid2>
            <ModalComponent open={ open } onClose={ handleClose } title="Crear un producto">
                <Form onSubmit={ handleSubmit }>
                    <TextField id="name" name="name" label="Nombre de producto" variant="outlined" value={ product.name } onChange={ handleChangeField } />
                    <TextField id="url" name="url" label="URL" variant="outlined" value={ product.url } onChange={ handleChangeField } />
                    <TextField id="description" name="description" label="Descripción" variant="outlined" value={ product.description } onChange={ handleChangeField } />
                    <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                        <InputLabel id="type">Tipo</InputLabel>
                        <Select
                            labelId="type"
                            id="type"
                            name="type"
                            label="Tipo"
                            onChange={() => handleChangeField}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={1}>Accesorio</MenuItem>
                            <MenuItem value={2}>Ropa</MenuItem>
                            <MenuItem value={3}>Mueble</MenuItem>
                        </Select>
                    </FormControl>
                    <CardActions>
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