import Remove from '@/assets/icons/Remove'
import { Button, Card, Content, ContentSections, Date, Div, Label, Select, Text } from './styled'
import New from '@/assets/icons/New'
import Section from '@/assets/icons/Section'
import Pin from '@/assets/icons/Pin'
import File from '@/assets/icons/File'
import { useState } from 'react'
import { ModalRelavantFacts } from '../modal/relevantFacts'
import { ModalSection } from '../modal/section'
import AnnexIcon from '@/assets/icons/Annex'
import { ModalAnnex } from '../modal/annex'
import { ModalNewAvaliation } from '../modal/testPsi'

type Props = {
  date: string
}

export const ParentContainer = ({ date }: Props) => {
  const [isSectionModalOpen, setIsSectionModalOpen] = useState(false)
  const [isFactsModalOpen, setIsFactsModalOpen] = useState(false)
  const [isAnnexModalOpen, setIsAnnexModalOpen] = useState(false)
  const [isPsiModalOpen, setIsPsiModalOpen] = useState(false)
  return (
    <>
      <Card>
        <Content>
          <>
            <Label>Serviço:</Label>
            <Select>
              <option>Novo Acompanhamento</option>
            </Select>
          </>
          <Date>Data inicial: </Date>
          <>{date}</>
          <div>
            <Button>
              <New />
            </Button>
            <Button>
              <Remove />
            </Button>
          </div>
        </Content>
        <hr></hr>
        <ContentSections>
          <Div>
            <Button onClick={() => setIsSectionModalOpen(true)}>
              <Section />
            </Button>
            <Button onClick={() => setIsSectionModalOpen(true)}>
              <Text>Sessão</Text>
            </Button>
          </Div>
          <Div>
            <Button onClick={() => setIsFactsModalOpen(true)}>
              <Pin />
            </Button>
            <Button onClick={() => setIsFactsModalOpen(true)}>
              <Text>Fato Relevante</Text>
            </Button>
          </Div>
          <Div>
            <Button onClick={() => setIsAnnexModalOpen(true)}>
              <AnnexIcon />
            </Button>
            <Button onClick={() => setIsAnnexModalOpen(true)}>
              <Text>Anexo</Text>
            </Button>
          </Div>
          <Div>
            <Button onClick={() => setIsPsiModalOpen(true)}>
              <File />
            </Button>
            <Button onClick={() => setIsPsiModalOpen(true)}>
              <Text>Avaliação Psicológica</Text>
            </Button>
          </Div>
        </ContentSections>
      </Card>
      <ModalSection isOpen={isSectionModalOpen} onClose={() => setIsSectionModalOpen(false)} />
      <ModalRelavantFacts isOpen={isFactsModalOpen} onClose={() => setIsFactsModalOpen(false)} title={''} />
      <ModalAnnex isOpen={isAnnexModalOpen} onClose={() => setIsAnnexModalOpen(false)} title={''} />
      <ModalNewAvaliation
        isOpen={isPsiModalOpen}
        onClose={() => setIsPsiModalOpen(false)}
        title={''}
        text="você será redirecionado para uma nova página onde irá preencher os dados da avaliação psicológica"
      />
    </>
  )
}
