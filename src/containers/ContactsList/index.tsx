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
      <Contact />
      <Contact />
      <Contact />
    </>
  )
}

export default ContactsList
