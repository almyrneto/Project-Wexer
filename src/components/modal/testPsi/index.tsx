import {
  Components,
  InputFooter,
  Input,
  InputContainer,
  Title,
  ButtonSend,
  ButtonCancel,
  Text,
  ContainerFooter,
  Card,
  TitleAvaliation,
  ContentCard
} from '@/components/modal/styled'
import { Modal } from '../modalGlobal'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  text: string
}

export const ModalNewAvaliation = ({ isOpen, onClose, title, text }: Props) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Nova Avaliação Psicológica">
    <Title>{title}</Title>
    <div>
      <Components>
        <InputContainer>
          <label>Data*</label>
          <Input type="date" />
        </InputContainer>
      </Components>
      <Card>
        <TitleAvaliation>Atenção!</TitleAvaliation>
        <ContentCard>{text}</ContentCard>
      </Card>
      <ContainerFooter>
        <Text>*Campos Obrigátorios</Text>
        <InputFooter>
          <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <ButtonSend>Prosseguir</ButtonSend>
        </InputFooter>
      </ContainerFooter>
    </div>
  </Modal>
)
