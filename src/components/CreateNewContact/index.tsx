import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import icon from '../../icons/add_user.svg'
import {
  setCanEditTrue,
  setSelectedContactId
} from '../../store/reducers/contacts'
import { RootReducer } from '../../store'

const CreateNewContact = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { selectedContactId, contacts } = useSelector(
    (state: RootReducer) => state.contacts
  )

  const currentContact =
    selectedContactId != null
      ? contacts.find((c) => c.id === selectedContactId)
      : null

  return (
    <S.CreateNewContactWrapper
      onClick={() => {
        navigate('/contact-details')
        if (currentContact === null) {
          dispatch(setSelectedContactId(null))
          dispatch(setCanEditTrue())
        }
      }}
    >
      <S.CreateNewContactButton>Criar novo contato</S.CreateNewContactButton>
      <S.CreateNewContactIcon
        src={icon}
        alt="Ícone de adicionar novo contato"
      />
    </S.CreateNewContactWrapper>
  )
}

export default CreateNewContact
