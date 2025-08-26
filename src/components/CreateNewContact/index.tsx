import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import icon from '../../icons/add_user.svg'
import { toggleCanEdit } from '../../store/reducers/contacts'

const CreateNewContact = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <S.CreateNewContactWrapper
      onClick={() => {
        navigate('/contact-details')
        dispatch(toggleCanEdit())
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
