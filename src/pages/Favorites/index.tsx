import Navbar from '../../components/Navbar'
import { Container } from '../../styles'

const Favorites = () => {
  return (
    <Container>
      <h2>Olá, favoritos</h2>
      <Navbar onDetails={false} />
    </Container>
  )
}

export default Favorites
