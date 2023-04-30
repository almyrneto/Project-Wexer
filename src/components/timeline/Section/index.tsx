import Health from '@/assets/icons/Health'
import { Card, Date, PlusButton } from '../styled'
import { Icon, SideBar } from './styled'
import { Header, Title } from '@/assets/styles/global'
import Plus from '@/assets/icons/Plus'

type Props = {
  title: string
  date: string
  text: string
}

export const Section = ({ title, date, text }: Props) => {
  return (
    <SideBar>
      <Card>
        <Icon>
          <Health />
        </Icon>
        <Header>
          <Title>{title}</Title>
          <PlusButton>
            <Plus />
          </PlusButton>
        </Header>
        <>
          <Date>{date}</Date>
          <p>{text}</p>
        </>
      </Card>
    </SideBar>
  )
}
