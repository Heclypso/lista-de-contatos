import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Contacts from './pages/Contacts'
import Favorites from './pages/Favorites'
import Recents from './pages/Recents'
import ContactDetails from './pages/ContactsDetails'
import {} from './components/Navbar'
import store from './store'

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
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
