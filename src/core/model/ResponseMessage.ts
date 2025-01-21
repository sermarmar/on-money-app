export interface ResponseMessage<T = unknown> {
    data?: T | T[];
    status: string;
    message?: string;
}

export const ResponseMessage = {
    success: (data: unknown) => success(data),
    error: (message: string) => error(message)
};

const success = <T>(data: T): ResponseMessage<T> => ({  data, status: 'success' });
const error = <T>(message: string): ResponseMessage<T> => ({ status: 'error', message });