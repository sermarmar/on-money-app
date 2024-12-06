import styled from "@emotion/styled";
import { Button, Card, CardActions, CardContent, CardHeader, Link, SxProps, TextField } from "@mui/material";
import { useState } from "react";
import { ErrorProps } from "../shared/ErrorProps";
import { LoginProps } from "./interfaces/LoginProps";

export const FormLogin: React.FC = () => {
    const [login, setLogin] = useState<LoginProps>({
        user: '',
        pass: ''
    });
    const [errors, setErrors] = useState<ErrorProps[]>([]);

    const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setLogin(prevData => ({...prevData, [name]: value}));
        validation();
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validation();
    }

    const validation = () => {
        if(login.user === '') {
            const error: ErrorProps = { name: 'user', error: 'El usuario no debería estar vacío' };
            setErrors((prevErrors) => [...prevErrors, error]);
        } else {
            setErrors((prevErrors) => prevErrors.filter(error => error.name !== 'user'));
        }
        if(login.pass === '') {
            const error: ErrorProps = { name: 'pass', error: 'La contraseña no debería estar vacía' };
            setErrors((prevErrors) => [...prevErrors, error]);
        } else {
            setErrors((prevErrors) => prevErrors.filter(error => error.name !== 'pass'));
        }
    }

    return(
        <Card sx={ cardStyle }>
            <CardHeader sx={ headerStyle } title="Acceso"/>
            <CardContent>
                <Form onSubmit={ handleSubmit }>
                    <TextField id="user" name="user" label="Usuario o correo electrónico" variant="outlined" value={ login.user } onChange={ handleChangeField } helperText={ errors.find(error => error.name === 'user')?.error } error={ errors.some(error => error.name === 'user') }/>
                    <TextField id="pass" name="pass" label="Contraseña" variant="outlined" value={ login.pass } onChange={ handleChangeField } helperText={ errors.find(error => error.name === 'pass')?.error } error={ errors.some(error => error.name === 'pass') }/>
                    <CardActions sx={ actionsStyle }>
                        <Link href="/resetPassword" underline="always">¿Has olvidado la contraseña?</Link>
                        <Button type="submit" variant="contained">Entrar</Button>
                    </CardActions>
                </Form>
            </CardContent>
        </Card>
    )
}

const cardStyle: SxProps = {
    width: 350,
    margin: 'auto',
    mt: 20
}

const headerStyle: SxProps = {
    color: 'gray'
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const actionsStyle: SxProps = {
    display: 'flex',
    justifyContent: 'space-between'
}