import * as S from './styles'

import icon from '../../icons/add_user.svg'

const CreateNewContact = () => {
  return (
    <S.CreateNewContactWrapper>
      <S.CreateNewContactButton>Criar novo contato</S.CreateNewContactButton>
      <S.CreateNewContactIcon
        src={icon}
        alt="Ícone de adicionar novo contato"
      />
    </S.CreateNewContactWrapper>
  )
}

export default CreateNewContact
