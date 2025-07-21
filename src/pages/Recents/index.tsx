import Navbar from '../../components/Navbar'
import { Container } from '../../styles'

const Recents = () => {
  return (
    <Container>
      <h2>Olá, recentes</h2>
      <Navbar onDetails={false} />
    </Container>
  )
}

export default Recents
