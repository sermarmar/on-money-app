import axios from "axios";

export const Api = {
    axiosInstance: axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
        },
    })
}