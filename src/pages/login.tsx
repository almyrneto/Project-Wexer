import { postLogin } from '@/components/services/login'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [email, setEmail] = useState('mscarvalhaes@hotmail.com')
  const [password, setPassword] = useState('123456')
  const navigate = useNavigate()
  return (
    <div>
      <label htmlFor="email">Digite seu Email:</label>
      <input value={email} type="email" placeholder="email" onChange={event => setEmail(event.target.value)} />
      <label>Digite sua Senha:</label>
      <input value={password} type="password" placeholder="senha" onChange={event => setPassword(event.target.value)} />

      <button
        onClick={async () => {
          try {
            await postLogin(email, password)
            navigate('/timeline')
          } catch (error) {
            alert((error as any).message)
          }
        }}
      >
        Entrar
      </button>
    </div>
  )
}
