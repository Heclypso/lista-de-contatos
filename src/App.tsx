// import { useDispatch } from 'react-redux'
import { GlobalStyle } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { addToContacts } from './store/reducers/contacts'
import Contacts from './pages/Contacts'
import Favorites from './pages/Favorites'
import Recents from './pages/Recents'
import ContactDetails from './pages/ContactsDetails'
import {} from './components/Navbar'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Recents />
  },
  {
    path: '/favorites',
    element: <Favorites />
  },
  {
    path: '/contacts',
    element: <Contacts />
  },
  {
    path: '/contact-details',
    element: <ContactDetails />
  }
])

function App() {
  // const dispatcher = useDispatch()
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
