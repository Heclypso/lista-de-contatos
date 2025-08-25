import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import favoriteIcon from '../../icons/favorite_icon.svg'
import favoritedIcon from '../../icons/favorited_icon.svg'
import recentIcon from '../../icons/clock_icon.svg'
import contactsIcon from '../../icons/user_icon.svg'

import returnIcon from '../../icons/arrow_back.svg'
import editIcon from '../../icons/edit_icon.svg'
import deleteIcon from '../../icons/trash_cam.svg'
import saveIcon from '../../icons/save_icon.svg'

import * as A from '../../store/reducers/contacts'
import { RootReducer } from '../../store'

type Props = {
  onDetails: boolean
}

const Navbar = ({ onDetails }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { viewContact } = useSelector((state: RootReducer) => state.contacts)

  const deleteContactFunction = () => {
    dispatch(A.removeViewContact())
  }

  const canEdit = useSelector(
    (state: RootReducer) => state.contacts.canEditContact
  )

  const { newContact } = useSelector((state: RootReducer) => state.contacts)

  const newContactFavorited = useSelector(
    (state: RootReducer) => state.contacts.newContactFavorited
  )

  const starIcon = viewContact
    ? viewContact.favorited
      ? favoritedIcon
      : favoriteIcon
    : newContactFavorited
      ? favoritedIcon
      : favoriteIcon

  return (
    <S.Nav $onDetails={onDetails}>
      {onDetails ? (
        <>
          <S.OptionIcon
            onClick={() => {
              if (viewContact) {
                dispatch(
                  A.editContact({
                    ...viewContact
                  })
                )
              }
              newContact ? dispatch(A.addContact(newContact)) : ''
              canEdit ? dispatch(A.changeCanEdit()) : ''
              dispatch(A.removeViewContact())
              dispatch(A.turnNewContactFavoritedFalse())
              navigate('/')
            }}
            src={returnIcon}
            alt="Ícone de navegar para a página anterior"
          />
          <S.IconsContainer>
            <S.EditIcon
              onClick={() => {
                dispatch(A.changeCanEdit())
              }}
              src={canEdit ? saveIcon : editIcon}
              alt="Ícone de editar contato"
            />
            <S.OptionIcon
              onClick={() => {
                if (viewContact) {
                  dispatch(A.toggleFavorited())
                  dispatch(
                    A.editContact({
                      ...viewContact,
                      favorited: !viewContact.favorited
                    })
                  )
                } else {
                  dispatch(A.toggleNewContactFavorited())
                }
              }}
              src={starIcon}
              alt="Ícone de favoritar contato"
            />
            <S.DeleteIcon
              onClick={() => {
                navigate('/')
                deleteContactFunction()
              }}
              src={deleteIcon}
              alt="Ícone de deletar contato"
            />
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
              onClick={() => dispatch(A.changeOnPage('favorite'))}
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
              onClick={() => dispatch(A.changeOnPage('recent'))}
            >
              Recentes
            </S.LinkOption>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon src={contactsIcon} alt="Ícone da aba de contatos" />
            <S.LinkOption
              to="/contacts"
              onClick={() => dispatch(A.changeOnPage('contact'))}
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
