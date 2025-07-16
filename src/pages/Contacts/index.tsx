import Navbar from '../../components/Navbar'
import ContactsList from '../../containers/ContactsList'

const Contacts = () => {
  return (
    <>
      <ContactsList />
      <Navbar onDetails={false} />
    </>
  )
}

export default Contacts
