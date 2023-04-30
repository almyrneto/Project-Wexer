import Logo from '@/assets/icons/Logo'
import { Text, Container, ContentImg, Div, ButtonLogin } from './styled'
import Mask from '@/assets/icons/Mask'
import Login from '@/assets/icons/Login'
import { UserProps } from '../types/user.types'
import { useEffect, useState } from 'react'
import { userService } from '../services/user'

export const Header = () => {
  const [data, setData] = useState<UserProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      setLoading(true)
      try {
        const response = await userService()
        setData(response.data)
        setLoading(false)
      } catch (error) {
        alert('ocorreu um erro no servidor')
        setLoading(false)
      }
    }
    getUser()
  }, [])

  if (loading) {
    return <p>carregando</p>
  }
  if (!data) {
    return <p>ocorreu um erro, tente mais tarde!</p>
  }

  return (
    <Container>
      <ContentImg>
        <Logo />
      </ContentImg>
      <Div>
        <Mask />
        <Text>
          Bem Vindo(a), <b>{data.name}</b>
        </Text>
      </Div>
      <ButtonLogin>
        <Login />
      </ButtonLogin>
    </Container>
  )
}
