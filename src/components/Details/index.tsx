import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import phoneIcon from '../../icons/phone_icon.svg'
import messageIcon from '../../icons/message_icon.svg'
import videoIcon from '../../icons/video_icon.svg'
import mailIcon from '../../icons/mail_icon.svg'
import addIcon from '../../icons/plus_icon.svg'

import { Label, LabelBlack, Title } from '../../styles'

import { RootReducer } from '../../store'

import * as A from '../../store/reducers/contacts'
import Contact from '../../models/Contact'

const Details = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { viewContact, formError } = useSelector(
    (state: RootReducer) => state.contacts
  )

  // const viewContactId = useSelector(
  //   (state: RootReducer) => state.contacts.viewContact?.id
  // )

  // const viewContactFavorited = useSelector((state: RootReducer) =>
  //   state.contacts.viewContact ? state.contacts.viewContact.favorited : false
  // )

  // const viewContactLastCall = useSelector(
  //   (state: RootReducer) => state.contacts.viewContact?.lastCall ?? 0
  // )

  const canEdit = useSelector(
    (state: RootReducer) => !state.contacts.canEditContact
  )

  const [isEditing, setIsEditing] = useState(false)

  const [avatarImage, setAvatarImage] = useState('')
  const [createdContactName, setCreatedContactName] = useState('')
  const [createdContactNumber, setCreatedContactNumber] = useState('')
  const [createdContactEmail, setCreatedContactEmail] = useState('')

  const localContactId = viewContact?.id ?? Date.now()

  const [createdContact, setCreatedContact] = useState<Contact>({
    id: localContactId,
    avatar: '',
    name: '',
    number: '',
    email: '',
    favorited: false,
    lastCall: 0
  })

  useEffect(() => {
    if (viewContact && !isEditing) {
      setCreatedContactName(viewContact.name)
      setCreatedContactNumber(viewContact.number)
      setCreatedContactEmail(viewContact.email)
      setAvatarImage(viewContact.avatar)
    }
  }, [viewContact, isEditing])

  // useEffect(() => {
  //   dispatch(
  //     A.setViewContact({
  //       id: viewContactId || 0,
  //       avatar: avatarImage,
  //       name: createdContactName,
  //       number: createdContactNumber,
  //       email: createdContactEmail,
  //       favorited: viewContactFavorited,
  //       lastCall: viewContactLastCall
  //     })
  //   )
  // })

  const resolvedAvatarImage = avatarImage ? avatarImage : viewContact?.avatar

  const validateAvatar = (file: File | undefined) => {
    if (!file) return

    setIsEditing(true)

    if (avatarImage) URL.revokeObjectURL(avatarImage)

    const avatarUrl = URL.createObjectURL(file)
    setAvatarImage(avatarUrl)
    setCreatedContact({ ...createdContact, avatar: avatarUrl })

    if (viewContact) {
      dispatch(
        A.setViewContact({
          ...viewContact,
          avatar: avatarUrl
        })
      )
      dispatch(A.editContact(viewContact))
    }
    if (avatarImage) {
      dispatch(
        A.setNewContact({
          ...createdContact,
          avatar: avatarImage
        })
      )
    }
  }

  const validateName = (value: string) => {
    setIsEditing(true)
    setCreatedContactName(value)
    setCreatedContact({ ...createdContact, name: value })
    dispatch(
      A.setNewContact({
        ...createdContact,
        name: value
      })
    )

    const words = value.split(' ')

    if ('0123456789'.includes(value[0])) {
      dispatch(A.setFormError('O nome não pode começar com um número'))
    } else if (value.length < 3) {
      dispatch(A.setFormError('Nome menor que 3 caracteres'))
    } else if (words.length < 2) {
      dispatch(A.setFormError('Informe o nome completo'))
    } else if (words.includes('')) {
      dispatch(A.setFormError('Sobrenome inválido'))
    } else {
      dispatch(A.setFormError(''))
    }
  }

  const validateNumber = (value: string) => {
    setIsEditing(true)
    setCreatedContactNumber(value)
    setCreatedContact({ ...createdContact, number: value })
    dispatch(
      A.setNewContact({
        ...createdContact,
        number: value
      })
    )

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const validValue = value.split('').some((char) => !numbers.includes(char))

    if (validValue || value.length < 11) {
      dispatch(A.setFormError('Numero de telefone invalido'))
    } else if (value.length === 9) {
      dispatch(A.setFormError('Digite o DDD'))
    } else {
      dispatch(A.setFormError(''))
    }
  }

  const validateEmail = (value: string) => {
    setIsEditing(true)
    setCreatedContactEmail(value)
    setCreatedContact({ ...createdContact, email: value })
    dispatch(
      A.setNewContact({
        ...createdContact,
        email: value
      })
    )

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

    if (
      value.length < 64 &&
      value.length > 1 &&
      endWithDomains.some((domain) => value.endsWith(domain)) &&
      domains.some((domain) => value.includes(domain))
    ) {
      dispatch(A.setFormError(''))
    } else {
      dispatch(A.setFormError('Valor inválido'))
    }
  }

  return (
    <>
      <S.DetailsWrapper>
        <S.AvatarWrapper $avatarImage={resolvedAvatarImage}>
          <S.Avatar
            disabled={canEdit}
            type="file"
            onChange={(e) => validateAvatar(e.target.files?.[0])}
          />
        </S.AvatarWrapper>
        <S.Name
          disabled={canEdit}
          placeholder="Digite o nome"
          value={createdContactName}
          onChange={(e) => validateName(e.target.value)}
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
                onChange={(e) => validateNumber(e.target.value)}
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
                onChange={(e) => validateEmail(e.target.value)}
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
