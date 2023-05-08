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
import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { ID_TIMELINE } from '@/components/utils/constants'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const ModalSection = ({ isOpen, onClose }: Props) => {
  const [title, setTitle] = useState('')
  const [data, setData] = useState('')
  const [inicialTime, setInicialTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [summary, setSummary] = useState('')
  const navigate = useNavigate()

  const newSection = async (title: string, summary: string) => {
    const dados = await api.post('/occurrence', {
      title: title,
      content: summary,
      type: 'session',
      timelineId: ID_TIMELINE
    })

    if (dados.status === 200) {
      api.defaults.headers.Authorization = dados.data.token
      return dados.data.token
    }
    if (dados.status === 401) {
      throw new Error('Arquivo invalido')
    }
    throw new Error('servidor nao esta respondendo, tente novamente mais tarde!')
  }

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
            <Input type="date" value={data} onChange={e => setData(e.target.value)} />
          </InputContainer>
          <InputContainer>
            <label>Hora de inicio*</label>
            <Input type="time" value={inicialTime} onChange={e => setInicialTime(e.target.value)} />
          </InputContainer>
          <InputContainer>
            <label>Hora fim</label>
            <Input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} />
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
            <Input type="text" placeholder="Digite" value={title} onChange={e => setTitle(e.target.value)} />
            <label>Resumo da sessão*</label>
            <TextArea placeholder="text" value={summary} onChange={e => setSummary(e.target.value)} />
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
            <ButtonSend
              onClick={async () => {
                try {
                  await newSection(title, summary)
                  navigate('/')
                } catch (error) {
                  alert((error as any).message)
                }
              }}
            >
              criar
            </ButtonSend>
          </InputFooter>
        </ContainerFooter>
      </SubContainer>
    </Modal>
  )
}
