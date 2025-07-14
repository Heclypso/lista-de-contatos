import {
  CreateNewContactIcon,
  CreateNewContactWrapper,
  CreateNewContactButton
} from './styles'

import icon from '../../icons/add_user.svg'

const CreateNewContact = () => {
  return (
    <CreateNewContactWrapper>
      <CreateNewContactButton>Criar novo contato</CreateNewContactButton>
      <CreateNewContactIcon src={icon} alt="Ícone de adicionar novo contato" />
    </CreateNewContactWrapper>
  )
}

export default CreateNewContact
