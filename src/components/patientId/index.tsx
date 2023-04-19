import { Card, Title, Header } from '@/assets/styles/global'
import { LabelIcon } from '../LabelIcon'

type Props = {
  title: string
  infos: {
    label: string
    value: string
    icon?: JSX.Element
  }[]
}

export const PatientId = ({ infos, title }: Props) => {
  return (
    <Card>
      <Header>
        <Title>{title}</Title>
      </Header>
      {infos.map(info => (
        <LabelIcon key={info.label} {...info} />
      ))}
    </Card>
  )
}
