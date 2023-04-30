import { api } from "./api"

export const patientService = () => {

    return api.get('/patient/64348d31d1f55efc1d6dcdda')
}