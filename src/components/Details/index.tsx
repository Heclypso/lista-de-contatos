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
    (state: RootReducer) => state.contacts.canEditContact
  )
  const [avatarImage, setAvatarImage] = useState('')
  const [createdContactName, setCreatedContactName] = useState('')
  const [createdContactNumber, setCreatedContactNumber] = useState('')
  const [createdContactEmail, setCreatedContactEmail] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    createdContactName && createdContactNumber && createdContactEmail != ''
      ? dispatch(
          newContact({
            id: 10,
            avatar: avatarImage,
            name: createdContactName,
            number: createdContactNumber,
            email: createdContactEmail,
            favorited: false
          })
        )
      : ''
  }, [
    createdContactName,
    createdContactNumber,
    createdContactEmail,
    avatarImage,
    dispatch
  ])

  return (
    <S.DetailsWrapper>
      <S.AvatarWrapper
        $avatarImage={viewContact ? viewContact.avatar : avatarImage}
      >
        <S.Avatar
          disabled={canEdit}
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (!file) return
            const avatarUrl = URL.createObjectURL(file)
            setAvatarImage(avatarUrl)
            setTimeout(() => {
              URL.revokeObjectURL(avatarUrl)
            }, 10000)
          }}
        />
      </S.AvatarWrapper>
      <S.Name
        disabled={canEdit}
        placeholder="Digite o nome"
        value={viewContact?.name}
        onChange={(e) => setCreatedContactName(e.target.value)}
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
              value={viewContact?.number}
              onChange={(e) => setCreatedContactNumber(e.target.value)}
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
              value={viewContact?.email}
              onChange={(e) => setCreatedContactEmail(e.target.value)}
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
