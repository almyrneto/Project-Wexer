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
  TextArea
} from '@/components/modal/styled'
import { Modal } from '../modalGlobal'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
}

export const ModalRelavantFacts = ({ isOpen, onClose, title }: Props) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Novo Fato Relevante">
    <Title>{title}</Title>
    <div>
      <Components>
        <InputContainer>
          <label>Data*</label>
          <Input type="date" />
        </InputContainer>
        <InputContainer>
          <label>Titulo*</label>
          <Input type="text" placeholder="digite" />
        </InputContainer>
      </Components>
      <Components>
        <InputContainer>
          <label>Descrição*</label>
          <TextArea placeholder="Digite" />
        </InputContainer>
      </Components>
      <ContainerFooter>
        <Text>*Campos Obrigátorios</Text>
        <InputFooter>
          <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <ButtonSend>criar</ButtonSend>
        </InputFooter>
      </ContainerFooter>
    </div>
  </Modal>
)
