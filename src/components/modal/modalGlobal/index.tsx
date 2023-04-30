import { ReactNode } from 'react'
import { ClosedButton, ModalContent, ModalOutside, Title } from '../styled'
import { Header } from './styled'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title: string
}

export const Modal = ({ isOpen, onClose, children, title }: Props) => {
  return (
    <ModalOutside isOpen={isOpen}>
      <ModalContent>
        <Header>
          <Title>{title}</Title>
          <ClosedButton onClick={onClose}>&times;</ClosedButton>
        </Header>
        {children}
      </ModalContent>
    </ModalOutside>
  )
}
