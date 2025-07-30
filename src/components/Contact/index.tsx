import * as S from './styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import icon from '../../icons/call_icon.svg'
import { LabelBig, Title } from '../../styles'

type ContactType = {
  isFirst?: boolean
  isLast?: boolean
  onContactsPage: boolean
  contactAvatar: string
  contactName: string
  phoneNumber: string
  emailAdress: string
  favorited: boolean
}

const Contact = ({
  isFirst,
  isLast,
  onContactsPage,
  contactName,
  phoneNumber,
  emailAdress,
  contactAvatar,
  favorited
}: ContactType) => {
  const [borderVisibleState, setBorderVisibleState] = useState(true)
  const [infoExpandedState, setInfoExpandedState] = useState(false)
  const navigate = useNavigate()

  const getInfos = () => {
    navigate('/contact-details', {
      state: {
        avatar: contactAvatar,
        name: contactName,
        number: phoneNumber,
        email: emailAdress,
        favorited: favorited
      }
    })
  }

  return (
    <S.ContactContainer
      isFirst={isFirst}
      isLast={isLast}
      onClick={() => {
        setBorderVisibleState((previousState) => !previousState)
        setInfoExpandedState((previousState) => !previousState)
      }}
    >
      <S.ContactWrapper
        borderVisible={borderVisibleState}
        infoExpanded={infoExpandedState}
        isFirst={isFirst}
        isLast={isLast}
      >
        <S.Avatar src={contactAvatar} alt="Imagem do avatar do contato" />
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
            <S.ContactButton
              onClick={() => {
                navigate('/contact-details')
                infoExpandedState && !borderVisibleState && getInfos()
              }}
            >
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
