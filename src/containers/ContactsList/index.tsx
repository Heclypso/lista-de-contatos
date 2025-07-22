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
      <Contact onContactsPage={onContactsPage} isFirst={true} isLast={false} />
      <Contact onContactsPage={onContactsPage} isFirst={false} isLast={false} />
      <Contact onContactsPage={onContactsPage} isFirst={false} isLast={true} />
      <WordCategory wordCategory="B" />
      <Contact
        onContactsPage={onContactsPage}
        isFirst={true}
        isLast={true}
        uniqueOfWord={true}
      />
    </>
  )
}

export default ContactsList
