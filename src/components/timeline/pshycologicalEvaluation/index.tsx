import Plus from '@/assets/icons/Plus'
import { Card, Title, Header, PencilButton } from '@/assets/styles/global'
import { Date } from '@/components/timeline/styled'

type Props = {
  title: string
  date: string
  text: string
}

export const PshycologicalEvaluation = ({ title, date }: Props) => {
  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        <PencilButton>
          <Plus />
        </PencilButton>
      </Header>
      <Date>{date}</Date>
    </Card>
  )
}
