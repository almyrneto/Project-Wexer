import Plus from '@/assets/icons/Plus'
import { Title, Header } from '@/assets/styles/global'
import { Card, Date, PlusButton } from '@/components/timeline/styled'
import { Icon, SideBar } from './styled'
import Document from '@/assets/icons/Document'

type Props = {
  title: string
  date: string
}

export const PshycologicalEvaluation = ({ title, date }: Props) => {
  return (
    <SideBar>
      <Card>
        <Icon>
          <Document />
        </Icon>
        <Header>
          <Title>{title}</Title>
          <PlusButton>
            <Plus />
          </PlusButton>
        </Header>
        <Date>{date}</Date>
      </Card>
    </SideBar>
  )
}
