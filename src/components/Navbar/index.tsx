import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
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

import {
  removeViewContact,
  changeOnPage,
  addToContacts,
  removeFavorited,
  favoriteContact,
  deleteContact,
  changeCanEdit
} from '../../store/reducers/contacts'
import { RootReducer } from '../../store'

type Props = {
  onDetails: boolean
}

const Navbar = ({ onDetails }: Props) => {
  const navigate = useNavigate()
  const [favoritedState, setFavoritedState] = useState(false)
  const dispatch = useDispatch()
  const currentContact = useSelector(
    (state: RootReducer) => state.contacts.viewContact
  )

  const currentContactFavorited = currentContact?.favorited

  useEffect(() => {
    if (currentContactFavorited === true) {
      setFavoritedState(currentContactFavorited)
    }
  }, [currentContactFavorited])

  function contactWasFavorited() {
    if (!currentContact) return
    const { id, avatar, name, number, email, favorited, lastCall } =
      currentContact

    if (favoritedState === true) {
      dispatch(
        favoriteContact({
          id: id,
          avatar: avatar,
          name: name,
          email: email,
          number: number,
          favorited: favorited,
          lastCall: lastCall
        })
      )
    } else {
      dispatch(
        removeFavorited({
          id: id,
          avatar: avatar,
          name: name,
          email: email,
          number: number,
          favorited: favorited,
          lastCall: lastCall
        })
      )
    }
  }

  function deleteContactFunction() {
    if (!currentContact) return
    const { id, avatar, name, number, email, favorited, lastCall } =
      currentContact

    dispatch(
      deleteContact({
        id: id,
        avatar: avatar,
        name: name,
        number: number,
        email: email,
        favorited: favorited,
        lastCall: lastCall
      })
    )
  }

  const canEdit = useSelector(
    (state: RootReducer) => state.contacts.canEditContact
  )

  const { newContact } = useSelector((state: RootReducer) => state.contacts)

  return (
    <S.Nav $onDetails={onDetails}>
      {onDetails ? (
        <>
          <S.OptionIcon
            onClick={() => {
              navigate('/')
              dispatch(removeViewContact())
              contactWasFavorited()
              newContact != null ? dispatch(addToContacts()) : ''
              canEdit ? dispatch(changeCanEdit()) : ''
            }}
            src={returnIcon}
            alt="Ícone de navegar para a página anterior"
          />
          <S.IconsContainer>
            <S.EditIcon
              onClick={() => {
                dispatch(changeCanEdit())
              }}
              src={canEdit ? saveIcon : editIcon}
              alt="Ícone de editar contato"
            />
            <S.OptionIcon
              onClick={() => {
                setFavoritedState((previousState) => !previousState)
              }}
              src={favoritedState ? favoritedIcon : favoriteIcon}
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
