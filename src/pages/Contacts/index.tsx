import Navbar from '../../components/Navbar'
import ContactsList from '../../containers/ContactsList'
import { Container } from '../../styles'

const Contacts = () => {
  return (
    <Container>
      <ContactsList />
      <Navbar onDetails={false} />
    </Container>
  )
}

export default Contacts
