import Navbar from '../../components/Navbar'
import ContactsList from '../../containers/ContactsList'
import { Container, ContainerList } from '../../styles'

const Favorites = () => {
  return (
    <Container>
      <ContainerList>
        <ContactsList />
      </ContainerList>
      <Navbar onDetails={false} />
    </Container>
  )
}

export default Favorites
