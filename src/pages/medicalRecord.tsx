import Job from '@/assets/icons/Job'
import Pacient from '@/assets/icons/Pacient'
import Schooling from '@/assets/icons/Schooling'
import Date from '@/assets/icons/Date'
import { Grid } from '@/components/grid/styled'
import { InformationCard } from '@/components/informationCard'
import { PatientId } from '@/components/patientId'
import { PersonalNotes } from '@/components/personalNotes'
import { ParentContainer } from '@/components/parentContainer'
import { ContainerSearch } from '@/components/containerSearch'
import { Section } from '@/components/timeline/Section'
import { RelevantFact } from '@/components/timeline/relevantFact'
import { Annex } from '@/components/timeline/annex'
import { PshycologicalEvaluation } from '@/components/timeline/pshycologicalEvaluation'

export const MedicalRecord = () => {
  return (
    <div>
      <div>
        <ContainerSearch />
      </div>

      <Grid>
        <div>
          <PatientId
            title="Identificação do paciente"
            infos={[
              { label: 'Paciente', value: 'Ana Ester Rezende', icon: <Pacient /> },
              { label: 'Nascimento', value: '10/09/2000', icon: <Date /> },
              { label: 'Profissão', value: 'Designer', icon: <Job /> },
              { label: 'Escolaridade', value: 'Superior Incompleto', icon: <Schooling /> }
            ]}
          />
          <InformationCard
            text="No dia 12 de fevereiro de 2015, a paciente B. A. V, 40 anos, solteira e residente na cidade de Manaus, procurou atendimento psicológico em virtude de estar apresentando..."
            title="Demandas e objetivos"
            onclick={() => ({})}
          />
          <PersonalNotes
            text="Na sessão de hoje consegui identificar alguns sintomas de ansiedade através da fala e comportamento da paciente. Tal como: inquietação e medos."
            title="Anotações pessoais"
            onclick={() => ({})}
          />
        </div>
        <div>
          <ParentContainer />
          <Section />
          <RelevantFact title="Fato Relevante" date="15 de setembro de 2022" text="Cliente não compareceu." />
          <Annex />
          <PshycologicalEvaluation title="Avaliação Psicológica" date="01 de setembro de 2022" />
        </div>
      </Grid>
    </div>
  )
}
