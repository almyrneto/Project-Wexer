import { api } from "./api"

export const postLogin = async (email: string, senha: string) => {
    const result = await api.post('/user/login', {
        email,
        password: senha
    })
    
    if(result.status === 200){
        api.defaults.headers.Authorization = result.data.token

        const token = result.data.token
        localStorage.setItem('jwt', token)

        return result.data.token
    }
    if(result.status === 401){
        throw new Error('senha invalida')
    }
    throw new Error('servidor nao está respondendo, tente mais tarde!')
}