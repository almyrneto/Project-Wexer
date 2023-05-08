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
import { getTimeLine } from '@/components/services/timeline'
import { TimelineProps } from '@/components/types/timeline.types'

export const MedicalRecord = () => {
  const [timeline, setTimeline] = useState<TimelineProps>()
  const [data, setData] = useState<PatientProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getTimeline = async () => {
      setLoading(true)
      try {
        const response = await getTimeLine()
        setTimeline(response.data)
        setLoading(false)
      } catch (error) {
        alert('ocorreu um erro no servidor')
        setLoading(false)
      }
    }
    getTimeline()

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
  if (loading) {
    return <p>carregando</p>
  }
  if (!timeline) {
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
          {timeline.timeline.occurrences.map(occurrence => {
            if (occurrence.type === 'session') {
              return (
                <Section
                  key={occurrence._id}
                  title={occurrence.title}
                  date={occurrence.createdOn}
                  text={occurrence.content}
                />
              )
            } else if (occurrence.type === 'relevant_fact') {
              return (
                <RelevantFact
                  key={occurrence._id}
                  title={occurrence.title}
                  date={occurrence.createdOn}
                  text={occurrence.content}
                />
              )
            } else if (occurrence.type === 'attachment') {
              return <Annex key={occurrence._id} title={occurrence.title} date={occurrence.createdOn} />
            } else if (occurrence.type === 'assessment') {
              return (
                <PshycologicalEvaluation key={occurrence._id} title={occurrence.title} date={occurrence.createdOn} />
              )
            }
          })}
        </div>
      </Grid>
    </div>
  )
}
