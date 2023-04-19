import Logo from '@/assets/icons/Logo'
import { Text, Container, ContentImg, Div, ButtonLogin } from './styled'
import Mask from '@/assets/icons/Mask'
import Login from '@/assets/icons/Login'

export const Header = () => {
  return (
    <Container>
      <ContentImg>
        <Logo />
      </ContentImg>
      <Div>
        <Mask />
        <Text>
          Bem Vindo(a), <b>Daniel</b>
        </Text>
      </Div>
      <ButtonLogin>
        <Login />
      </ButtonLogin>
    </Container>
  )
}
