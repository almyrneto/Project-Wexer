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
import { useEffect, useState } from 'react'
import { patientService } from '@/components/services/patient'
import { PatientProps } from '@/components/types/patient.types'

export const MedicalRecord = () => {
  // const [timeline, setTimeline] = useState()
  const [data, setData] = useState<PatientProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPatient = async () => {
      setLoading(true)
      try {
        const response = await patientService()
        setData(response.data)
        setLoading(false)
      } catch (error) {
        alert('ocorreu um erro no servidor')
        setLoading(false)
      }
    }
    getPatient()
  }, [])

  if (loading) {
    return <p>carregando</p>
  }
  if (!data) {
    return <p>ocorreu um erro, tente mais tarde!</p>
  }
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
              { label: 'Paciente', value: data.name, icon: <Pacient /> },
              { label: 'Nascimento', value: data.birthdate, icon: <Date /> },
              { label: 'Profissão', value: data.profession, icon: <Job /> },
              { label: 'Escolaridade', value: data.schooling, icon: <Schooling /> }
            ]}
          />
          <InformationCard text={data.demands} title="Demandas e objetivos" onclick={() => ({})} />
          <PersonalNotes text={data.personalAnnotations} title="Anotações pessoais" onclick={() => ({})} />
        </div>
        <div>
          <ParentContainer date="18/02/2022" />
          <Section
            title="Sessão 02"
            date="22 de setembro de 2022"
            text="A paciente relatou que estava tendo dificuldades com sua família e amigos próximos, pois demostra ansiedade diante de fatos cotidianos, resultando em reações de raiva com as pessoas que estão próximas a ela. Além disso, relatou brigas recentes com seus pais e namorado e, após a briga, ficou mal diante... Ver mais"
          />
          <RelevantFact title="Fato Relevante" date="15 de setembro de 2022" text="Cliente não compareceu." />
          <Annex title="Documentos Importante" date="10 de setembro de 2022" />
          <PshycologicalEvaluation title="Avaliação Psicológica" date="01 de setembro de 2022" />
        </div>
      </Grid>
    </div>
  )
}
