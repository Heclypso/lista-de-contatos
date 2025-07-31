import Contact from '../../components/Contact'
import CreateNewContact from '../../components/CreateNewContact'
import SearchBar from '../../components/SearchBar'
import WordCategory from '../../components/WordCategory'

import { ContactList, contactsArray as contacts } from '../../scripts/package'

type Props = {
  onContactsPage: boolean
  onFavoritesPage: boolean
}

const ContactsList = ({ onContactsPage, onFavoritesPage }: Props) => {
  const contactMap = new Map<string, ContactList>()

  contacts.forEach((contact) => contactMap.set(contact.number, contact))

  const contactsArray = Array.from(contactMap.values())

  const WordCategorys = contactsArray.map((contact) => contact.name.charAt(0))

  const WordCaterysSet: Set<string> = new Set([...WordCategorys])

  const WordsCategoryArray = [...WordCaterysSet]

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

        if (onFavoritesPage === true && favoritedContacts.length === 0)
          return null

        const contactsToUse = onFavoritesPage
          ? favoritedContacts
          : filteredContacts

        return (
          <div key={word}>
            <WordCategory wordCategory={word} />
            {contactsToUse.map((contact, index) => (
              <Contact
                key={contact.number}
                contactAvatar={contact.avatar}
                contactName={contact.name}
                phoneNumber={contact.number}
                emailAdress={contact.email}
                onContactsPage={onContactsPage}
                isFirst={index === 0}
                isLast={index === contactsToUse.length - 1}
                favorited={contact.favorited}
              />
            ))}
          </div>
        )
      })}
    </>
  )
}

export default ContactsList
