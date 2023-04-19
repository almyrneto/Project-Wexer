import * as S from './styled'

type Props = {
  label: string
  value: string
  icon?: JSX.Element
}

export const LabelIcon = ({ label, value, icon }: Props) => {
  return (
    <S.Flex>
      <S.Img>{icon}</S.Img>
      <S.Info>
        <S.Label>{label}</S.Label>
        <S.Value>{value}</S.Value>
      </S.Info>
    </S.Flex>
  )
}
