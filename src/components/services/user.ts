import { api } from "./api"

export const userService = () => {

    return api.get('/user')
}