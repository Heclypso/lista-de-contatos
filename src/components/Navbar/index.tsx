import * as S from './styles'

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
    <S.Nav onDetails={onDetails}>
      {onDetails ? (
        <>
          <S.OptionIcon
            onClick={() => navigate('/')}
            src={returnIcon}
            alt="Ícone de navegar para a página anterior"
          />
          <S.IconsContainer>
            <S.EditIcon src={editIcon} alt="Ícone de editar contato" />
            <S.OptionIcon src={favoriteIcon} alt="Ícone de favoritar contato" />
            <S.DeleteIcon src={deleteIcon} alt="Ícone de deletar contato" />
          </S.IconsContainer>
        </>
      ) : (
        <>
          <S.OptionWrapper>
            <S.OptionIcon
              src={favoriteIcon}
              alt="Ícone da aba de contatos favoritos"
            />
            <S.LinkOption to="/favorites">Favoritos</S.LinkOption>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon
              src={recentIcon}
              alt="Ícone da aba de contatos recentes"
            />
            <S.LinkOption to="/">Recentes</S.LinkOption>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon src={contactsIcon} alt="Ícone da aba de contatos" />
            <S.LinkOption to="/contacts">Contatos</S.LinkOption>
          </S.OptionWrapper>
        </>
      )}
    </S.Nav>
  )
}

export default Navbar
