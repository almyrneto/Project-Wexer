import { FormLabel } from '@mui/material'
import { Modal } from '../modalGlobal'
import {
  ButtonCancel,
  ButtonSend,
  Components,
  ContainerFooter,
  Input,
  InputContainer,
  InputFooter,
  NumberIcon,
  SecondTitle,
  SubContainer,
  Text,
  TextArea
} from '../styled'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const ModalSection = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Nova Sessão">
      <div>
        <Components>
          <NumberIcon>1</NumberIcon>
          <SecondTitle>Dados Gerais</SecondTitle>
        </Components>
        <Components>
          <InputContainer>
            <label>Data*</label>
            <Input type="date" />
          </InputContainer>
          <InputContainer>
            <label>Hora de inicio*</label>
            <Input type="time" />
          </InputContainer>
          <InputContainer>
            <label>Hora fim</label>
            <Input type="time" />
          </InputContainer>
        </Components>
      </div>
      <SubContainer>
        <Components>
          <NumberIcon>2</NumberIcon>
          <SecondTitle>Sessão</SecondTitle>
        </Components>
        <Components>
          <InputContainer>
            <label>Titulo*</label>
            <Input type="text" placeholder="Digite" />
            <label>Resumo da sessão*</label>
            <TextArea placeholder="text" />
          </InputContainer>
        </Components>
        <Components>
          <NumberIcon>3</NumberIcon>
          <SecondTitle>Pagamento</SecondTitle>
        </Components>
        <Components>
          <InputContainer>
            <label>Valor</label>
            <input type="number" placeholder="0,00" />
          </InputContainer>
          <InputContainer>
            <FormLabel>Forma de pagamento</FormLabel>
            <select>
              <option>PIX</option>
              <option>DINHEIRO</option>
              <option>DEBITO</option>
              <option>CRÉDITO</option>
            </select>
          </InputContainer>
          <InputContainer>
            <FormLabel>Status</FormLabel>
            <label>
              <input type="radio" />
              Pago
            </label>
            <label>
              <input type="radio" />
              Não pago
            </label>
          </InputContainer>
        </Components>
        <ContainerFooter>
          <Text>*Campos Obrigátorios</Text>
          <InputFooter>
            <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
            <ButtonSend>criar</ButtonSend>
          </InputFooter>
        </ContainerFooter>
      </SubContainer>
    </Modal>
  )
}
