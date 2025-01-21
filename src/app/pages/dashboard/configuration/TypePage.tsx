import React, { useEffect } from 'react';
import { TypeService } from '../../../../core/services/TypeService';

export const TypePage: React.FC = () => {

    useEffect(() => {
        const loanTypes = async () => {
            const response = await TypeService.getAll();
            if (response.status === 'success') {
                console.log(response.data);
            } else {
                console.error(response.message);
            }
        }
        loanTypes();
    }, []);

    return (
        <div>
            <h1>Type Page</h1>
            <p>This is the Type Page component.</p>
        </div>
    );
};