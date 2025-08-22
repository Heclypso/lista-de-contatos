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

  function onContactPage() {
    return currentPage === 'contact'
  }

  function onRecentsPage() {
    return currentPage === 'recent'
  }

  function onFavoritesPage() {
    return currentPage === 'favorite'
  }

  const [contactArray, setContactArray] = useState<ContactClass[]>([])

  useEffect(() => {
    const contactMap = new Map<string, ContactList>()

    contacts.forEach((contact) => contactMap.set(contact.number, contact))

    const contactsArray = Array.from(contactMap.values())
    setContactArray(contactsArray)
  }, [contacts])

  const filteredContacts = [...contactArray]

  let contactsToUse: ContactClass[] = []

  if (onFavoritesPage())
    contactsToUse = [...filteredContacts].filter((contact) => contact.favorited)
  else if (onRecentsPage())
    contactsToUse = [...filteredContacts]
      .filter((c) => c.lastCall != 0)
      .sort((a, b) => (b.lastCall ?? 0) - (a.lastCall ?? 0))
  else if (onContactPage()) contactsToUse = filteredContacts

  if (searchValue) {
    contactsToUse = [...filteredContacts].filter((c) => {
      const name = c.name.toLowerCase().split(' ')

      return name.some((name) => name.includes(searchValue.toLowerCase()))
    })
  }

  const WordCategorys = contactsToUse.map((contact) =>
    contact.name.charAt(0).toUpperCase()
  )
  const WordCaterysSet: Set<string> = new Set([...WordCategorys])

  const WordsCategoryArray = [...WordCaterysSet]

  return (
    <>
      <SearchBar />
      <CreateNewContact />

      {onContactPage() &&
      contactsToUse.length === 0 &&
      searchValue.length === 0 ? (
        <TextContainer>
          <Title>Lista de contatos vazia, adicione um novo contato.</Title>
        </TextContainer>
      ) : onRecentsPage() && contactsToUse.length === 0 ? (
        <TextContainer>
          <Title>Não existem chamadas recentes.</Title>
        </TextContainer>
      ) : searchValue.length > 0 && contactsToUse.length === 0 ? (
        <TextContainer>
          <Title>Nenhum contato corresponde à pesquisa</Title>
        </TextContainer>
      ) : onFavoritesPage() &&
        contactsToUse.filter((c) => c.favorited).length === 0 ? (
        <TextContainer>
          <Title>Não existem contatos favoritados.</Title>
        </TextContainer>
      ) : (
        WordsCategoryArray.map((word) => {
          const contactsByWord = contactsToUse.filter(
            (c) => c.name[0].toUpperCase() === word
          )
          return (
            <div key={word}>
              <WordCategory wordCategory={word} />
              {contactsByWord.map((c, index) => (
                <Contact
                  $isFirst={index === 0}
                  $isLast={index === contactsByWord.length - 1}
                  key={c.number}
                  id={c.id}
                  avatar={c.avatar}
                  name={c.name}
                  number={c.number}
                  email={c.email}
                  favorited={c.favorited}
                  lastCall={c.lastCall}
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
