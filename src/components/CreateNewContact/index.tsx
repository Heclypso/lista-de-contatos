import * as S from './styles'

import icon from '../../icons/add_user.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeCanEdit } from '../../store/reducers/contacts'

const CreateNewContact = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <S.CreateNewContactWrapper
      onClick={() => {
        navigate('/contact-details')
        dispatch(changeCanEdit())
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
