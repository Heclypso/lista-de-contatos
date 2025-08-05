import * as S from './styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import icon from '../../icons/call_icon.svg'
import { LabelBig, Title } from '../../styles'

import { viewContact } from '../../store/reducers/contacts'
import ContactClass from '../../models/Contact'
import { RootReducer } from '../../store'

type ContactType = ContactClass

const Contact = ({ avatar, name, number, email, favorited }: ContactType) => {
  const [borderVisibleState, setBorderVisibleState] = useState(true)
  const [infoExpandedState, setInfoExpandedState] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentPage } = useSelector((state: RootReducer) => state.contacts)

  return (
    <S.ContactContainer
      onClick={() => {
        setBorderVisibleState((previousState) => !previousState)
        setInfoExpandedState((previousState) => !previousState)
      }}
    >
      <S.ContactWrapper
        $borderVisible={borderVisibleState}
        $infoExpanded={infoExpandedState}
      >
        <S.Avatar src={avatar} alt="Imagem do avatar do contato" />
        <S.TextContainer>
          <Title>{name}</Title>
          {currentPage === 'contact' && (
            <S.Label>Celular, 8 de jul. 14:00</S.Label>
          )}
        </S.TextContainer>
        {currentPage === 'contact' && (
          <S.CallIcon src={icon} alt="Ícone de iniciar chamada" />
        )}
      </S.ContactWrapper>
      {infoExpandedState && !borderVisibleState && (
        <S.ContactExpanded>
          <S.ContactInfosWrapper>
            <LabelBig>Telefone</LabelBig>
            <S.ContactInfos>{number}</S.ContactInfos>
          </S.ContactInfosWrapper>
          <S.ContactInfosWrapper>
            <LabelBig>Email</LabelBig>
            <S.ContactInfos>{email}</S.ContactInfos>
          </S.ContactInfosWrapper>
          <S.ContactButtonsWrapper>
            <S.ContactButton
              onClick={() => {
                navigate('/contact-details')
                infoExpandedState &&
                  !borderVisibleState &&
                  dispatch(
                    viewContact({ avatar, name, number, email, favorited })
                  )
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
