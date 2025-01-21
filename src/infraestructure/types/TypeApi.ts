import { Api } from '../Api';
import { TypeResponse } from './response/TypeResponse';

const api = Api.axiosInstance;

export const TypeApi = {
    getAll: () => api.get<TypeResponse[]>('/type'),
    getById: (id: number) => api.get<TypeResponse>(`/types/${id}`)
}