import {
  ClosedButton,
  Div,
  InputContainer,
  ModalContent,
  ModalOutside,
  NumberIcon,
  SecondTitle,
  Title
} from '@/components/modal/section/styled'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const ModalRelavantFacts = ({ isOpen, onClose }: Props) => (
  <ModalOutside isOpen={isOpen}>
    <ModalContent>
      <ClosedButton onClick={onClose}>&times;</ClosedButton>
      <Title>Fatos Relevantes</Title>
      <div>
        <Div>
          <NumberIcon>1</NumberIcon>
          <SecondTitle>Dados Gerais</SecondTitle>
        </Div>
        <Div>
          <InputContainer>
            <label>Data*</label>
            <input id="date" />
          </InputContainer>
          <InputContainer>
            <label>Hora de inicio*</label>
            <input />
          </InputContainer>
          <InputContainer>
            <label>Hora fim</label>
            <input />
          </InputContainer>
        </Div>
      </div>
    </ModalContent>
  </ModalOutside>
)
