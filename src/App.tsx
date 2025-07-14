import { useDispatch } from 'react-redux'
import { Container, GlobalStyle } from './styles'
import { addToContacts } from './store/reducers/contacts'
import ContactsList from './containers/ContactsList'

function App() {
  const dispatcher = useDispatch()

  return (
    <Container>
      <GlobalStyle />
      <ContactsList />
    </Container>
  )
}

export default App
