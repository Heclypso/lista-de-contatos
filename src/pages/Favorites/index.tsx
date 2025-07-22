import Navbar from '../../components/Navbar'
import ContactsList from '../../containers/ContactsList'
import { Container } from '../../styles'

const Favorites = () => {
  return (
    <Container>
      <ContactsList onContactsPage={false} />
      <Navbar onDetails={false} />
    </Container>
  )
}

export default Favorites
