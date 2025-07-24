import Contact from '../../components/Contact'
import CreateNewContact from '../../components/CreateNewContact'
import SearchBar from '../../components/SearchBar'
import WordCategory from '../../components/WordCategory'

type Props = {
  onContactsPage: boolean
}

const ContactsList = ({ onContactsPage }: Props) => {
  return (
    <>
      <SearchBar />
      <CreateNewContact />
      <WordCategory wordCategory="A" />
      <Contact
        contactName="ola"
        phoneNumber={'12 345678910'}
        emailAdress="exemplo@gmail.com"
        onContactsPage={onContactsPage}
        isFirst={true}
        isLast={false}
      />
      <Contact
        contactName="ola"
        phoneNumber={'12 345678910'}
        emailAdress="exemplo@gmail.com"
        onContactsPage={onContactsPage}
        isFirst={false}
        isLast={false}
      />
      <Contact
        contactName="ola"
        phoneNumber={'12 345678910'}
        emailAdress="exemplo@gmail.com"
        onContactsPage={onContactsPage}
        isFirst={false}
        isLast={true}
      />
      <WordCategory wordCategory="B" />
      <Contact
        contactName="ola"
        phoneNumber={'12 345678910'}
        emailAdress="exemplo@gmail.com"
        onContactsPage={onContactsPage}
        isFirst={true}
        isLast={true}
        uniqueOfWord={true}
      />
    </>
  )
}

export default ContactsList
