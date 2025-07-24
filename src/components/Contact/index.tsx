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
  contactName: string
  phoneNumber: string
  emailAdress: string
}

const Contact = ({
  isFirst,
  isLast,
  uniqueOfWord,
  onContactsPage,
  contactName,
  phoneNumber,
  emailAdress
}: ContactType) => {
  const [borderVisibleState, setBorderVisibleState] = useState(true)
  const [infoExpandedState, setInfoExpandedState] = useState(false)
  const navigate = useNavigate()
  const placeholderPhoto = 'https://placehold.co/40x40'

  function getDetails(evento: any) {
    localStorage.setItem(
      'contact-avatar',
      evento.currentTarget.children[0].children[0].attributes[2].textContent
    )
    localStorage.setItem(
      'contact-name',
      evento.currentTarget.children[0].children[1].children[0].textContent
    )
    localStorage.setItem(
      'contact-number',
      evento.currentTarget.children[1].children[0].children[1].textContent
    )
    localStorage.setItem(
      'contact-email',
      evento.currentTarget.children[1].children[1].children[1].textContent
    )
  }

  return (
    <S.ContactContainer
      uniqueOfWord={uniqueOfWord}
      isFirst={isFirst}
      isLast={isLast}
      onClick={(evento) => {
        setBorderVisibleState(false)
        setInfoExpandedState(true)
        infoExpandedState && !borderVisibleState && getDetails(evento)
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
          <Title>{contactName}</Title>
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
            <S.ContactInfos>{phoneNumber}</S.ContactInfos>
          </S.ContactInfosWrapper>
          <S.ContactInfosWrapper>
            <LabelBig>Email</LabelBig>
            <S.ContactInfos>{emailAdress}</S.ContactInfos>
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
