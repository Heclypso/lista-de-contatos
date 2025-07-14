import { useDispatch } from 'react-redux'
import { Container, GlobalStyle } from './styles'
import { addToContacts } from './store/reducers/contacts'
import ContactsList from './containers/ContactsList'
import Navbar from './components/Navbar'

function App() {
  const dispatcher = useDispatch()

  return (
    <Container>
      <GlobalStyle />
      <ContactsList />
      <Navbar />
    </Container>
  )
}

export default App
