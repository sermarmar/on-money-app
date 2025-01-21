import { TypeApi } from "../../infraestructure/types/TypeApi"
import { TypeFactory } from "../factory/TypeFactory";
import { TypeResponse } from '../../infraestructure/types/response/TypeResponse';
import { ResponseMessage } from '../model/ResponseMessage';
import { Type } from "../model/Type";

export const TypeService = {
    getAll: async () => {
        try {
            const response = await TypeApi.getAll();
            const types: Type[] = [];
            response.data.forEach((type: TypeResponse) => {
                types.push(TypeFactory.mapResponseToType(type));
            });

        return ResponseMessage.success(types);
    } catch (error) {
            console.error(error);
            return ResponseMessage.error('Error fetching types: ' + error);
        }
    }
}