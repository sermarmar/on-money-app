import { Container } from '@mui/material';
import { ConfigurationList } from '../../components/configuration/ConfigurationList';

export const ConfigurationPage: React.FC = () => {
    

    return (
        <Container maxWidth="xl" sx={{ mt: 7 }}>
            <ConfigurationList />
        </Container>
    );
};