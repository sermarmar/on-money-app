import { TypeResponse } from "../../infraestructure/types/response/TypeResponse";
import { Type } from "../model/Type";

export class TypeFactory {
    static mapResponseToType(response: TypeResponse): Type {
        return {
            id: response.id,
            name: response.name,
            description: response.description
        };
    }
}