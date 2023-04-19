import Folder from '@/assets/icons/Folder'
import People from '@/assets/icons/People'
import { Content, ContentMenuIcon } from './styled'
import Add from '@/assets/icons/Add'
import Config from '@/assets/icons/Config'

export const SideBar = () => {
  return (
    <Content>
      <ContentMenuIcon>
        <People />
      </ContentMenuIcon>
      <ContentMenuIcon>
        <Folder />
      </ContentMenuIcon>
      <ContentMenuIcon>
        <Add />
      </ContentMenuIcon>
      <ContentMenuIcon>
        <Config />
      </ContentMenuIcon>
    </Content>
  )
}
