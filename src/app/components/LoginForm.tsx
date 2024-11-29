import { Box, Button, Card, CardActions, CardContent, CardHeader, FormControl, InputLabel, Link, OutlinedInput, SxProps } from "@mui/material";

export const FormLogin: React.FC = () => {
    return(
        <Card sx={ cardStyle }>
            <CardHeader sx={ headerStyle } title="Acceso"/>
            <CardContent>
                <Box component="form" sx={ formStyle }>
                    <FormControl sx={ inputTextStyle }>
                        <InputLabel htmlFor="user">Usuario o correo electrónico</InputLabel>
                        <OutlinedInput id="user" label="Usuario o correo electrónico"/>
                    </FormControl>
                    <FormControl sx={ inputTextStyle }>
                        <InputLabel htmlFor="pass">Contraseña</InputLabel>
                        <OutlinedInput id="pass" label="Contraseña"/>
                    </FormControl>
                    <CardActions sx={ actionsStyle }>
                        <Link href="/resetPassword" underline="always">¿Has olvidado la contraseña?</Link>
                        <Button variant="contained">Entrar</Button>
                    </CardActions>
                </Box>
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
    backgroundColor: 'cyan',
    color: 'blue'
}

const formStyle: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2.5
}

const actionsStyle: SxProps = {
    display: 'flex',
    justifyContent: 'space-between'
}

const inputTextStyle: SxProps = {
    width: 2/2
}