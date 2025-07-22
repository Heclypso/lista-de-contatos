import * as S from './styles'
import { useState } from 'react'

import icon from '../../icons/call_icon.svg'
import { useNavigate } from 'react-router-dom'
import { LabelBig, Title } from '../../styles'

type ContactType = {
  isFirst?: boolean
  isLast?: boolean
  uniqueOfWord?: boolean
  onContactsPage: boolean
}

const Contact = ({
  isFirst,
  isLast,
  uniqueOfWord,
  onContactsPage
}: ContactType) => {
  const [borderVisibleState, setBorderVisibleState] = useState(true)
  const [infoExpandedState, setInfoExpandedState] = useState(false)
  const navigate = useNavigate()
  const placeholderPhoto = 'https://placehold.co/40x40'

  return (
    <S.ContactContainer
      uniqueOfWord={uniqueOfWord}
      isFirst={isFirst}
      isLast={isLast}
      onClick={() => {
        setBorderVisibleState(false)
        setInfoExpandedState(true)
        console.log(borderVisibleState)
      }}
    >
      <S.ContactWrapper
        borderVisible={borderVisibleState}
        infoExpanded={infoExpandedState}
        isFirst={isFirst}
        isLast={isLast}
      >
        <S.Avatar src={placeholderPhoto} alt="Imagem do avatar do contato" />
        <S.TextContainer>
          <Title>Nome do contato</Title>
          {!onContactsPage && <S.Label>Celular, 8 de jul. 14:00</S.Label>}
        </S.TextContainer>
        {!onContactsPage && (
          <S.CallIcon src={icon} alt="Ícone de iniciar chamada" />
        )}
      </S.ContactWrapper>
      {infoExpandedState && !borderVisibleState && (
        <S.ContactExpanded>
          <S.ContactInfosWrapper>
            <LabelBig>Telefone</LabelBig>
            <S.ContactInfos>12 345678910</S.ContactInfos>
          </S.ContactInfosWrapper>
          <S.ContactInfosWrapper>
            <LabelBig>Email</LabelBig>
            <S.ContactInfos>exemplo@gmail.com</S.ContactInfos>
          </S.ContactInfosWrapper>
          <S.ContactButtonsWrapper>
            <S.ContactButton onClick={() => navigate('/contact-details')}>
              Ver
            </S.ContactButton>
            <S.ContactButton>Chamar</S.ContactButton>
          </S.ContactButtonsWrapper>
        </S.ContactExpanded>
      )}
    </S.ContactContainer>
  )
}

export default Contact
