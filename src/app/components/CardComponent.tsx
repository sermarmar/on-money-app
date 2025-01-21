import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

interface CardComponentProps {
    title: string;
    description: string;
    onClick?: () => void;
}

export const CardComponent: React.FC<CardComponentProps> = ({ title, description, onClick }) => {
    return (
        <Card>
            <CardActionArea onClick={ onClick }>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { title }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        { description }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};