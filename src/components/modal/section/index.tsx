import {
  ClosedButton,
  Div,
  InputContainer,
  ModalContent,
  ModalOutside,
  NumberIcon,
  SecondTitle,
  SubContainer,
  Title
} from './styled'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const Modal = ({ isOpen, onClose }: Props) => (
  <ModalOutside isOpen={isOpen}>
    <ModalContent>
      <ClosedButton onClick={onClose}>&times;</ClosedButton>
      <Title>Nova Sessão</Title>
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
      <SubContainer>
        <Div>
          <NumberIcon>2</NumberIcon>
          <SecondTitle>Sessão</SecondTitle>
        </Div>
      </SubContainer>
    </ModalContent>
  </ModalOutside>
)
