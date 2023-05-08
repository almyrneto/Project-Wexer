import { ID_TIMELINE } from "../utils/constants";
import { api } from "./api";

export const getTimeLine = async () => {
    const result = await api.get(`/timeline/${ID_TIMELINE}`)
    return result
}