import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {'x-api-key': "1e7977ea-d97e-11ed-afa1-0242ac120002"}
})

