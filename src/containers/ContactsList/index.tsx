import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Contact from '../../components/Contact'
import CreateNewContact from '../../components/CreateNewContact'
import SearchBar from '../../components/SearchBar'
import WordCategory from '../../components/WordCategory'

import { RootReducer } from '../../store'
import ContactClass from '../../models/Contact'
import { Title } from '../../styles'
import { TextContainer } from './styles'

type ContactList = ContactClass

const ContactsList = () => {
  const { contacts, currentPage, searchValue } = useSelector(
    (state: RootReducer) => state.contacts
  )

  const [contactArray, setContactArray] = useState<ContactClass[]>([])

  useEffect(() => {
    const contactMap = new Map<string, ContactList>()

    contacts.forEach((contact) => contactMap.set(contact.number, contact))

    const contactsArray = Array.from(contactMap.values())
    setContactArray(contactsArray)
  }, [contacts])

  const WordCategorys = contactArray.map((contact) => contact.name.charAt(0))
  const WordCaterysSet: Set<string> = new Set([...WordCategorys])

  const WordsCategoryArray = [...WordCaterysSet]

  function onContactPage() {
    return currentPage === 'contact'
  }

  function onRecentsPage() {
    return currentPage === 'recent'
  }

  function onFavoritesPage() {
    return currentPage === 'favorite'
  }

  return (
    <>
      <SearchBar />
      <CreateNewContact />

      {onContactPage() && contactArray.length === 0 ? (
        <TextContainer>
          <Title>Lista de contatos vazia, adicione um novo contato.</Title>
        </TextContainer>
      ) : onRecentsPage() && contactArray.length === 0 ? (
        <TextContainer>
          <Title>Não existem contatos recentes.</Title>
        </TextContainer>
      ) : onFavoritesPage() &&
        contactArray.filter((c) => c.favorited).length === 0 ? (
        <TextContainer>
          <Title>Não existem contatos favoritados.</Title>
        </TextContainer>
      ) : (
        WordsCategoryArray.map((word) => {
          const filteredContacts = contactArray.filter(
            (contact) => contact.name[0].toUpperCase() === word
          )

          if (filteredContacts.length === 0) return null

          const favoritedContacts = filteredContacts.filter(
            (contact) => contact.favorited
          )

          if (onFavoritesPage() && favoritedContacts.length === 0) return null

          const searchedContacts = contacts.filter((c) =>
            c.name.toLocaleLowerCase().includes(searchValue)
          )

          const contactsToUse = onFavoritesPage()
            ? favoritedContacts
            : searchedContacts
              ? searchedContacts
              : filteredContacts

          return (
            <div key={word}>
              <WordCategory wordCategory={word} />
              {contactsToUse.map((c, index) => (
                <Contact
                  $isFirst={index === 0}
                  $isLast={index === contactsToUse.length - 1}
                  key={c.number}
                  id={c.id}
                  avatar={c.avatar}
                  name={c.name}
                  number={c.number}
                  email={c.email}
                  favorited={c.favorited}
                />
              ))}
            </div>
          )
        })
      )}
    </>
  )
}

export default ContactsList
