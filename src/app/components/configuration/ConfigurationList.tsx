import { Grid } from '@mui/material';
import React from 'react';
import { CardComponent } from '../CardComponent';
import { useNavigate } from 'react-router';

export const ConfigurationList: React.FC = () => {
    const navigate = useNavigate();
    
    const handleNavigate = (url: string) => {
        navigate(url);
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                <CardComponent 
                title='Tipos y subtipos' 
                description='Creación de tipos y subtipos de productos, incluse se puede modificar el nombre de los mismos.'
                onClick={() => handleNavigate('type') }/>
            </Grid>
            <Grid item xs={12} md={4}>
                <CardComponent 
                title='Estados' 
                description='Creación de estados'
                onClick={() => handleNavigate('status') }/>
            </Grid>
            <Grid item xs={12} md={4}>
                <CardComponent 
                title='Tamaño de ropas' 
                description='Creación de los diferentes tamaños de ropaje'
                onClick={() => handleNavigate('size') }/>
            </Grid>
        </Grid>
    );
};