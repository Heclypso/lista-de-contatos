import * as S from './styles'

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
    <S.ContactWrapper
      onClick={() => navigate('/contact-details')}
      isFirst={isFirst}
      isLast={isLast}
    >
      <S.Avatar src={placeholderPhoto} alt="Imagem do avatar do contato" />
      <S.TextContainer>
        <Title>Nome do contato</Title>
        <S.Label>Celular, 8 de jul. 14:00</S.Label>
      </S.TextContainer>
      <S.CallIcon src={icon} alt="Ícone de iniciar chamada" />
    </S.ContactWrapper>
  )
}

export default Contact
