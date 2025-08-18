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

import { newContact } from '../../store/reducers/contacts'

const Details = () => {
  const { viewContact } = useSelector((state: RootReducer) => state.contacts)
  const canEdit = useSelector(
    (state: RootReducer) => !state.contacts.canEditContact
  )

  const [isEditing, setIsEditing] = useState(false)
  const [avatarImage, setAvatarImage] = useState('')
  const [createdContactName, setCreatedContactName] = useState('')
  const [createdContactNumber, setCreatedContactNumber] = useState('')
  const [createdContactEmail, setCreatedContactEmail] = useState('')
  const dispatch = useDispatch()
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
          favorited: false,
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
    viewContact
  ])

  const resolvedAvatarImage = avatarImage ? avatarImage : viewContact?.avatar

  return (
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
        disabled={canEdit}
        placeholder="Digite o nome"
        value={createdContactName}
        onChange={(e) => {
          setIsEditing(true)
          setCreatedContactName(e.target.value)
        }}
      />
      <S.OptionsContainer>
        <S.OptionWrapper>
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
              disabled={canEdit}
              placeholder="Telefone do contato"
              value={createdContactNumber}
              onChange={(e) => {
                setIsEditing(true)
                setCreatedContactNumber(e.target.value)
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
                setCreatedContactEmail(e.target.value)
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
    </S.DetailsWrapper>
  )
}

export default Details
