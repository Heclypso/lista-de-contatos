import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import favoriteIcon from '../../icons/favorite_icon.svg'
import favoritedIcon from '../../icons/favorited_icon.svg'
import recentIcon from '../../icons/clock_icon.svg'
import contactsIcon from '../../icons/user_icon.svg'

import returnIcon from '../../icons/arrow_back.svg'
import editIcon from '../../icons/edit_icon.svg'
import deleteIcon from '../../icons/trash_cam.svg'

import { removeViewContact, changeOnPage } from '../../store/reducers/contacts'

type Props = {
  onDetails: boolean
}

const Navbar = ({ onDetails }: Props) => {
  const navigate = useNavigate()
  const [favoritedState, setFavoritedState] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (location.state?.favorited !== undefined) {
      setFavoritedState(location.state.favorited)
    }
  }, [location.state?.favorited])

  return (
    <S.Nav $onDetails={onDetails}>
      {onDetails ? (
        <>
          <S.OptionIcon
            onClick={() => {
              navigate('/')
              dispatch(removeViewContact())
            }}
            src={returnIcon}
            alt="Ícone de navegar para a página anterior"
          />
          <S.IconsContainer>
            <S.EditIcon src={editIcon} alt="Ícone de editar contato" />
            <S.OptionIcon
              onClick={() => {
                setFavoritedState((previousState) => !previousState)
              }}
              src={favoritedState ? favoritedIcon : favoriteIcon}
              alt="Ícone de favoritar contato"
            />
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
            <S.LinkOption
              to="/favorites"
              onClick={() => dispatch(changeOnPage('favorite'))}
            >
              Favoritos
            </S.LinkOption>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon
              src={recentIcon}
              alt="Ícone da aba de contatos recentes"
            />
            <S.LinkOption
              to="/"
              onClick={() => dispatch(changeOnPage('recent'))}
            >
              Recentes
            </S.LinkOption>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon src={contactsIcon} alt="Ícone da aba de contatos" />
            <S.LinkOption
              to="/contacts"
              onClick={() => dispatch(changeOnPage('contact'))}
            >
              Contatos
            </S.LinkOption>
          </S.OptionWrapper>
        </>
      )}
    </S.Nav>
  )
}

export default Navbar
