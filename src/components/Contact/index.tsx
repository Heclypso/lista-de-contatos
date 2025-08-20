import * as S from './styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import icon from '../../icons/call_icon.svg'
import { LabelBig, Title } from '../../styles'

import { setLastCall, setViewContact } from '../../store/reducers/contacts'
import ContactClass from '../../models/Contact'
import { RootReducer } from '../../store'

type ContactType = ContactClass

type StyledContact = {
  $isFirst: boolean
  $isLast: boolean
}

type Props = ContactType & StyledContact

const Contact = ({
  id,
  avatar,
  name,
  number,
  email,
  favorited,
  lastCall,
  $isFirst,
  $isLast
}: Props) => {
  const [borderVisibleState, setBorderVisibleState] = useState(true)
  const [infoExpandedState, setInfoExpandedState] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentPage } = useSelector((state: RootReducer) => state.contacts)

  function getLastCallTime() {
    const date = new Date()
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()
    const lastCall = hours * 10000 + minutes * 100 + seconds
    return lastCall
  }

  function formatLastCall(lastcall: number) {
    const string = lastcall.toString()

    const hours = string.slice(0, 2)
    const minutes = string.slice(2, 4)

    return `${hours}:${minutes}`
  }

  return (
    <S.ContactContainer
      onClick={() => {
        setBorderVisibleState((previousState) => !previousState)
        setInfoExpandedState((previousState) => !previousState)
      }}
    >
      <S.ContactWrapper
        $isFirst={$isFirst}
        $isLast={$isLast}
        $infoExpanded={borderVisibleState}
        $borderBottomVisible={borderVisibleState}
      >
        <S.Avatar src={avatar} alt="Imagem do avatar do contato" />
        <S.TextContainer>
          <Title>{name}</Title>
          {currentPage === 'recent' && (
            <S.Label>Hoje às {formatLastCall(lastCall)}</S.Label>
          )}
        </S.TextContainer>
        {currentPage === 'contact' && infoExpandedState === false && (
          <S.CallIcon
            onClick={() => {
              dispatch(
                setLastCall({
                  id: id,
                  avatar: avatar,
                  name: name,
                  number: number,
                  email: email,
                  favorited: favorited,
                  lastCall: getLastCallTime()
                })
              )
              dispatch(
                setViewContact({
                  id,
                  avatar,
                  name,
                  number,
                  email,
                  favorited,
                  lastCall
                })
              )
              navigate('/call')
            }}
            src={icon}
            alt="Ícone de iniciar chamada"
          />
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
                    setViewContact({
                      id,
                      avatar,
                      name,
                      number,
                      email,
                      favorited,
                      lastCall
                    })
                  )
              }}
            >
              Ver
            </S.ContactButton>
            <S.ContactButton
              onClick={() => {
                dispatch(
                  setLastCall({
                    id: id,
                    avatar: avatar,
                    name: name,
                    number: number,
                    email: email,
                    favorited: favorited,
                    lastCall: getLastCallTime()
                  })
                )
                dispatch(
                  setViewContact({
                    id,
                    avatar,
                    name,
                    number,
                    email,
                    favorited,
                    lastCall
                  })
                )
                navigate('/call')
              }}
            >
              Chamar
            </S.ContactButton>
          </S.ContactButtonsWrapper>
        </S.ContactExpanded>
      )}
    </S.ContactContainer>
  )
}

export default Contact
