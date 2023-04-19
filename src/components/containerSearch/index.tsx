import { Card } from '@/assets/styles/global'
import { Content, Text, Left, Right, InputSearch, ButtonSearch } from './styled'

export const ContainerSearch = () => {
  return (
    <Card>
      <Content>
        <Left>
          <Text>Dados Cadastrais</Text>
          <Text active>Prontuário</Text>
        </Left>
        <Right>
          <InputSearch placeholder="O que você está procurando?" />
          <ButtonSearch>
            <i className="fas fa-search"></i>
          </ButtonSearch>
        </Right>
      </Content>
    </Card>
  )
}
