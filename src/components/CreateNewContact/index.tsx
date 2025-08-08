import * as S from './styles'

import icon from '../../icons/add_user.svg'
import { useNavigate } from 'react-router-dom'

const CreateNewContact = () => {
  const navigate = useNavigate()

  return (
    <S.CreateNewContactWrapper onClick={() => navigate('/contact-details')}>
      <S.CreateNewContactButton>Criar novo contato</S.CreateNewContactButton>
      <S.CreateNewContactIcon
        src={icon}
        alt="Ícone de adicionar novo contato"
      />
    </S.CreateNewContactWrapper>
  )
}

export default CreateNewContact
