import {
  Label,
  ContactWrapper,
  TextContainer,
  Avatar,
  CallIcon
} from './styles'

import icon from '../../icons/call_icon.svg'
import { useNavigate } from 'react-router-dom'
import { Title } from '../../styles'

type ContactType = {
  isFirst?: boolean
  isLast?: boolean
}

const Contact = ({ isFirst, isLast }: ContactType) => {
  const placeholderPhoto = 'https://placehold.co/40x40'
  const navigate = useNavigate()

  return (
    <ContactWrapper
      onClick={() => navigate('/contact-details')}
      isFirst={isFirst}
      isLast={isLast}
    >
      <Avatar src={placeholderPhoto} alt="Imagem do avatar do contato" />
      <TextContainer>
        <Title>Nome do contato</Title>
        <Label>Celular, 8 de jul. 14:00</Label>
      </TextContainer>
      <CallIcon src={icon} alt="Ícone de iniciar chamada" />
    </ContactWrapper>
  )
}

export default Contact
