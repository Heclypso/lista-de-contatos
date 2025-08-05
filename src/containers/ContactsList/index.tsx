import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import CreateNewContact from '../../components/CreateNewContact'
import SearchBar from '../../components/SearchBar'
import WordCategory from '../../components/WordCategory'

import { RootReducer } from '../../store'
import ContactClass from '../../models/Contact'

type ContactList = ContactClass

const ContactsList = () => {
  const { contacts, currentPage } = useSelector(
    (state: RootReducer) => state.contacts
  )

  const contactMap = new Map<string, ContactList>()

  contacts.forEach((contact) => contactMap.set(contact.number, contact))

  const contactsArray = Array.from(contactMap.values())

  const WordCategorys = contactsArray.map((contact) => contact.name.charAt(0))

  const WordCaterysSet: Set<string> = new Set([...WordCategorys])

  const WordsCategoryArray = [...WordCaterysSet]

  function onFavoritesPage() {
    return currentPage === 'favorite'
  }

  return (
    <>
      <SearchBar />
      <CreateNewContact />

      {WordsCategoryArray.map((word) => {
        const filteredContacts = contactsArray.filter(
          (contact) => contact.name[0].toUpperCase() === word
        )

        if (filteredContacts.length === 0) return null

        const favoritedContacts = filteredContacts.filter(
          (contact) => contact.favorited === true
        )

        if (onFavoritesPage() && favoritedContacts.length === 0) return null

        const contactsToUse = onFavoritesPage()
          ? favoritedContacts
          : filteredContacts

        return (
          <div key={word}>
            <WordCategory wordCategory={word} />
            {contactsToUse.map((c) => (
              <Contact
                key={c.number}
                avatar={c.avatar}
                name={c.name}
                number={c.number}
                email={c.email}
                favorited={c.favorited}
              />
            ))}
          </div>
        )
      })}
    </>
  )
}

export default ContactsList
