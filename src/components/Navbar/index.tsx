import {
  Nav,
  OptionIcon,
  OptionWrapper,
  LinkOption,
  IconsContainer,
  EditIcon,
  DeleteIcon
} from './styles'

import favoriteIcon from '../../icons/favorite_icon.svg'
import recentIcon from '../../icons/clock_icon.svg'
import contactsIcon from '../../icons/user_icon.svg'

import returnIcon from '../../icons/arrow_back.svg'
import editIcon from '../../icons/edit_icon.svg'
import deleteIcon from '../../icons/trash_cam.svg'
import { useNavigate } from 'react-router-dom'

type Props = {
  onDetails: boolean
}

const Navbar = ({ onDetails }: Props) => {
  const navigate = useNavigate()

  return (
    <Nav onDetails={onDetails}>
      {onDetails ? (
        <>
          <OptionIcon
            onClick={() => navigate('/')}
            src={returnIcon}
            alt="Ícone de navegar para a página anterior"
          />
          <IconsContainer>
            <EditIcon src={editIcon} alt="Ícone de editar contato" />
            <OptionIcon src={favoriteIcon} alt="Ícone de favoritar contato" />
            <DeleteIcon src={deleteIcon} alt="Ícone de deletar contato" />
          </IconsContainer>
        </>
      ) : (
        <>
          <OptionWrapper>
            <OptionIcon
              src={favoriteIcon}
              alt="Ícone da aba de contatos favoritos"
            />
            <LinkOption to="/favorites">Favoritos</LinkOption>
          </OptionWrapper>

          <OptionWrapper>
            <OptionIcon
              src={recentIcon}
              alt="Ícone da aba de contatos recentes"
            />
            <LinkOption to="/">Recentes</LinkOption>
          </OptionWrapper>

          <OptionWrapper>
            <OptionIcon src={contactsIcon} alt="Ícone da aba de contatos" />
            <LinkOption to="/contacts">Contatos</LinkOption>
          </OptionWrapper>
        </>
      )}
    </Nav>
  )
}

export default Navbar
