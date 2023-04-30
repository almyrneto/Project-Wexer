import { Normalize } from 'styled-normalize'
import { Header } from '../header'
import { SideBar } from '../sideBar'
import { Content } from '../app/styled'
import { GlobalStyle } from '@/assets/styles/global'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="App">
      <Normalize />
      <GlobalStyle />
      <div>
        <Header />
        <SideBar />
      </div>
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}
