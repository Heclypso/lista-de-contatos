import Contact from '../../components/Contact'
import CreateNewContact from '../../components/CreateNewContact'
import SearchBar from '../../components/SearchBar'
import WordCategory from '../../components/WordCategory'

const ContactsList = () => {
  return (
    <>
      <SearchBar />
      <CreateNewContact />
      <WordCategory />
      <Contact isFirst={true} isLast={false} />
      <Contact isFirst={false} isLast={false} />
      <Contact isFirst={false} isLast={true} />
      <WordCategory />
      <Contact isFirst={true} isLast={true} />
    </>
  )
}

export default ContactsList
