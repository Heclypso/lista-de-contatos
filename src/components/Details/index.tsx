import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'

import phoneIcon from '../../icons/phone_icon.svg'
import messageIcon from '../../icons/message_icon.svg'
import videoIcon from '../../icons/video_icon.svg'
import mailIcon from '../../icons/mail_icon.svg'
import addIcon from '../../icons/plus_icon.svg'

import { Label, LabelBlack, Title } from '../../styles'

import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'

import {
  newContact,
  setFormError,
  setViewContact
} from '../../store/reducers/contacts'
import { useNavigate } from 'react-router-dom'

const Details = () => {
  const { viewContact } = useSelector((state: RootReducer) => state.contacts)
  const canEdit = useSelector(
    (state: RootReducer) => !state.contacts.canEditContact
  )

  const { favoritedState } = useSelector((state: RootReducer) => state.contacts)
  const { formError } = useSelector((state: RootReducer) => state.contacts)

  const [isEditing, setIsEditing] = useState(false)
  const [avatarImage, setAvatarImage] = useState('')
  const [createdContactName, setCreatedContactName] = useState('')
  const [createdContactNumber, setCreatedContactNumber] = useState('')
  const [createdContactEmail, setCreatedContactEmail] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const dinamicId = useSelector(
    (state: RootReducer) => state.contacts.contacts.length + 1
  )

  useEffect(() => {
    if (viewContact && !isEditing) {
      setCreatedContactName(viewContact.name)
      setCreatedContactNumber(viewContact.number)
      setCreatedContactEmail(viewContact.email)
      setAvatarImage(viewContact.avatar)
    }
  }, [viewContact, isEditing])

  useEffect(() => {
    if (
      isEditing &&
      createdContactName &&
      createdContactNumber &&
      createdContactEmail !== ''
    ) {
      dispatch(
        newContact({
          id: dinamicId,
          avatar: avatarImage,
          name: createdContactName,
          number: createdContactNumber,
          email: createdContactEmail,
          favorited: favoritedState,
          lastCall: 0
        })
      )
    }
  }, [
    createdContactName,
    createdContactNumber,
    createdContactEmail,
    avatarImage,
    dispatch,
    dinamicId,
    isEditing,
    viewContact,
    favoritedState
  ])

  const resolvedAvatarImage = avatarImage ? avatarImage : viewContact?.avatar

  return (
    <>
      <S.DetailsWrapper>
        <S.AvatarWrapper $avatarImage={resolvedAvatarImage}>
          <S.Avatar
            disabled={canEdit}
            type="file"
            onChange={(e) => {
              setIsEditing(true)
              const file = e.target.files?.[0]
              if (!file) return

              if (avatarImage) {
                URL.revokeObjectURL(avatarImage)
              }

              const avatarUrl = URL.createObjectURL(file)
              setAvatarImage(avatarUrl)
            }}
          />
        </S.AvatarWrapper>
        <S.Name
          maxLength={12}
          disabled={canEdit}
          placeholder="Digite o nome"
          value={createdContactName}
          onChange={(e) => {
            const value = e.target.value
            setIsEditing(true)
            setCreatedContactName(value)

            if (value.length > 3 && value.length < 12) {
              dispatch(setFormError(''))
            } else if (value.length < 3) {
              dispatch(setFormError('Nome menor que 3 caracteres'))
            } else {
              dispatch(setFormError('Valor inválido'))
            }
          }}
        />
        <S.OptionsContainer>
          <S.OptionWrapper onClick={() => navigate('/call')}>
            <S.OptionIcon src={phoneIcon} />
            <S.OptionText>Ligar</S.OptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon src={messageIcon} />
            <S.OptionText $textAlign={true}>Enviar mensagem</S.OptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon src={videoIcon} />
            <S.OptionText>Videochamada</S.OptionText>
          </S.OptionWrapper>
        </S.OptionsContainer>
        <S.DataContainer>
          <Title>Dados de contato</Title>
          <S.DataItemWrapper>
            <S.OptionIcon src={phoneIcon} />
            <S.DataTextWrapper>
              <S.DataText
                maxLength={11}
                disabled={canEdit}
                placeholder="Telefone do contato"
                value={createdContactNumber}
                onChange={(e) => {
                  setIsEditing(true)
                  const value = e.target.value

                  setCreatedContactNumber(value)
                  if (value.length === 11) {
                    dispatch(setFormError(''))
                  } else if (value.length === 9) {
                    dispatch(setFormError('Digite o DDD'))
                  } else {
                    dispatch(setFormError('Valor inválido'))
                  }
                }}
              />
              <Label>Telefone</Label>
            </S.DataTextWrapper>
          </S.DataItemWrapper>
          <S.DataItemWrapper>
            <S.OptionIcon src={mailIcon} />
            <S.DataTextWrapper>
              <S.DataText
                disabled={canEdit}
                placeholder="Email do contato"
                value={createdContactEmail}
                onChange={(e) => {
                  setIsEditing(true)

                  const value = e.target.value
                  setCreatedContactEmail(value)

                  const endWithDomains = [
                    '.com',
                    '.org',
                    '.net',
                    '.edu',
                    '.gov',
                    '.info',
                    '.br',
                    '.com.br',
                    '.edu.br',
                    '.us',
                    '.uk',
                    '.ca',
                    '.de',
                    '@gmail.com'
                  ]

                  const domains = [
                    '@gmail.com',
                    '@yahoo.com',
                    '@yahoo.com.br',
                    '@hotmail.com',
                    '@outlook.com',
                    '@live.com',
                    '@aol.com',
                    '@icloud.com',
                    '@me.com',
                    '@mac.com',
                    '@uol.com.br',
                    '@bol.com.br',
                    '@terra.com.br',
                    '@globo.com',
                    '@ig.com.br',
                    '@r7.com',
                    '@edu.br',
                    '@protonmail.com',
                    '@zoho.com',
                    '@mail.com'
                  ]

                  if (
                    value.length < 64 &&
                    value.length > 1 &&
                    endWithDomains.some((domain) => value.endsWith(domain)) &&
                    domains.some((domain) => value.includes(domain))
                  ) {
                    dispatch(setFormError(''))
                  } else {
                    dispatch(setFormError('Valor inválido'))
                  }
                }}
              />
              <Label>Email</Label>
            </S.DataTextWrapper>
          </S.DataItemWrapper>
        </S.DataContainer>
        <S.DataContainer>
          <Title>Apps conectados</Title>
          <S.DataItemWrapper>
            <S.OptionIcon src={addIcon} />
            <S.DataTextWrapper>
              <LabelBlack>Conecte um app</LabelBlack>
            </S.DataTextWrapper>
          </S.DataItemWrapper>
        </S.DataContainer>
        {formError && <S.Error>{formError}</S.Error>}
      </S.DetailsWrapper>
    </>
  )
}

export default Details
