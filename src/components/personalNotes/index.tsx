import Pencil from '@/assets/icons/Pencil'
import { Card, Text, Title, Header, PencilButton } from '@/assets/styles/global'

type Props = {
  text: string
  title: string
  onclick: () => void
}

export const PersonalNotes = ({ text, title, onclick }: Props) => {
  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        <PencilButton onClick={onclick}>
          <Pencil />
        </PencilButton>
      </Header>
      <Text>{text}</Text>
    </Card>
  )
}
