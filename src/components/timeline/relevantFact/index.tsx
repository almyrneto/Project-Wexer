import KingPin from '@/assets/icons/KingPin'
import Plus from '@/assets/icons/Plus'
import { Title, Header, Text } from '@/assets/styles/global'
import { Date, Card, PlusButton } from '@/components/timeline/styled'
import { Icon, SideBar } from './styled'
type Props = {
  title: string
  date: string
  text: string
}

export const RelevantFact = ({ title, date, text }: Props) => {
  return (
    <SideBar>
      <Card>
        <Icon>
          <KingPin />
        </Icon>
        <Header>
          <Title>{title}</Title>
          <PlusButton>
            <Plus />
          </PlusButton>
        </Header>
        <Date>{date}</Date>
        <Text>{text}</Text>
      </Card>
    </SideBar>
  )
}
