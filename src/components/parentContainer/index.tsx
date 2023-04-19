import Remove from '@/assets/icons/Remove'
import { Button, Card, Content, ContentSections, Div } from './styled'
import New from '@/assets/icons/New'
import Section from '@/assets/icons/Section'
import Pin from '@/assets/icons/Pin'
import Annex from '@/assets/icons/Annex'
import File from '@/assets/icons/File'
import { useState } from 'react'
import { Modal } from '../modal/section'
import { ModalRelavantFacts } from '../modal/relevantFacts'

export const ParentContainer = () => {
  const [isSectionModalOpen, setIsSectionModalOpen] = useState(false)
  const [isFactsModalOpen, setIsFactsModalOpen] = useState(false)
  return (
    <>
      <Card>
        <Content>
          <div>
            <label>Serviço:</label>
            <select>
              <option>Novo Acompanhamento</option>
            </select>
          </div>
          <p>Data inicial: 18/10/2022</p>
          <div>
            <New />
            <Remove />
          </div>
        </Content>
        <hr></hr>
        <ContentSections>
          <Div>
            <Button onClick={() => setIsSectionModalOpen(true)}>
              <Section />
            </Button>
            <p>Sessão</p>
          </Div>
          <Div>
            <Button onClick={() => setIsFactsModalOpen(true)}>
              <Pin />
            </Button>
            <p>Fato Relevante</p>
          </Div>
          <Div>
            <Button>
              <Annex />
            </Button>
            <p>Anexo</p>
          </Div>
          <Div>
            <Button>
              <File />
            </Button>
            <p>Avaliação Psicológica</p>
          </Div>
        </ContentSections>
      </Card>
      <Modal isOpen={isSectionModalOpen} onClose={() => setIsSectionModalOpen(false)} />
      <ModalRelavantFacts isOpen={isFactsModalOpen} onClose={() => setIsFactsModalOpen(false)} />
    </>
  )
}
