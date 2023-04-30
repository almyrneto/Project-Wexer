import { Modal } from '../modalGlobal'
import {
  ButtonCancel,
  ButtonSend,
  Components,
  ContainerFooter,
  Input,
  InputContainer,
  InputFooter,
  Text,
  Title,
  TextArea,
  InputFile
} from '../styled'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
}

export const ModalAnnex = ({ isOpen, onClose, title }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Novo Anexo">
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
        <Components>
          <InputContainer>
            <label>Anexar arquivos*</label>
            <InputFile type="file" />
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
}
