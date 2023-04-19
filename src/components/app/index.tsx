import { Normalize } from 'styled-normalize'
import { Header } from '../header'
import { SideBar } from '../sideBar'
import { Content } from './styled'
import { GlobalStyle } from '@/assets/styles/global'
import { MedicalRecord } from '@/pages/medicalRecord'

function App() {
  return (
    <div className="App">
      <Normalize />
      <GlobalStyle />
      <div>
        <Header />
        <SideBar />
      </div>
      <Content>
        <MedicalRecord />
      </Content>
    </div>
  )
}

export default App
