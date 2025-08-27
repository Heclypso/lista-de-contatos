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

  const { selectedContactId, contacts } = useSelector(
    (state: RootReducer) => state.contacts
  )

  const currentContact =
    selectedContactId != null
      ? contacts.find((c) => c.id === selectedContactId)
      : null

  const canEdit = useSelector(
    (state: RootReducer) => state.contacts.canEditContact
  )

  const { newContact } = useSelector((state: RootReducer) => state.contacts)

  const newContactFavorited = useSelector(
    (state: RootReducer) => state.contacts.newContactFavorited
  )

  const starIcon = currentContact
    ? currentContact.favorited
      ? favoritedIcon
      : favoriteIcon
    : newContactFavorited
      ? favoritedIcon
      : favoriteIcon

  const resolvedAction = () => {
    if (currentContact) {
      dispatch(A.editContact(currentContact))
    } else if (newContact) {
      dispatch(A.addContact(newContact))
    }
  }

  const handleExit = () => {
    dispatch(A.setCanEditFalse())
    dispatch(A.turnNewContactFavoritedFalse())
    dispatch(A.setSelectedContactId(null))
    navigate('/')
  }

  const deleteContact = () => {
    if (currentContact) {
      dispatch(A.deleteContact(currentContact.id))
      handleExit()
    } else {
      return
    }
  }

  const resolvedFavorite = () => {
    dispatch(A.toggleNewContactFavorited())
    if (currentContact) {
      dispatch(A.toggleFavorited())
      dispatch(
        A.editContact({
          ...currentContact,
          favorited: !currentContact.favorited
        })
      )
    }
  }

  return (
    <S.Nav $onDetails={onDetails}>
      {onDetails ? (
        <>
          <S.OptionIcon
            onClick={handleExit}
            src={returnIcon}
            alt="Ícone de navegar para a página anterior"
          />
          <S.IconsContainer>
            <S.EditIcon
              onClick={() => {
                dispatch(A.toggleCanEdit())
                resolvedAction()
              }}
              src={canEdit ? saveIcon : editIcon}
              alt="Ícone de editar contato"
            />
            <S.OptionIcon
              onClick={resolvedFavorite}
              src={starIcon}
              alt="Ícone de favoritar contato"
            />
            <S.DeleteIcon
              onClick={() => {
                navigate('/')
                deleteContact()
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
