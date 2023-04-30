import { Header, Title } from '@/assets/styles/global'
import { Card, Date, PlusButton } from '../styled'
import { Icon, SideBar } from './styled'
import Clips from '@/assets/icons/Clips'
import Plus from '@/assets/icons/Plus'

type Props = {
  title: string
  date: string
}

export const Annex = ({ title, date }: Props) => {
  return (
    <SideBar>
      <Card>
        <Icon>
          <Clips />
        </Icon>
        <Header>
          <Title>{title}</Title>
          <PlusButton>
            <Plus />
          </PlusButton>
        </Header>
        <>
          <Date>{date}</Date>
        </>
      </Card>
    </SideBar>
  )
}
