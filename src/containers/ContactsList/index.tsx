import Contact from '../../components/Contact'
import CreateNewContact from '../../components/CreateNewContact'
import SearchBar from '../../components/SearchBar'
import WordCategory from '../../components/WordCategory'

type Props = {
  onContactsPage: boolean
}

type ContactList = {
  avatar: string
  name: string
  email: string
  number: string
}

const ContactsList = ({ onContactsPage }: Props) => {
  const contactsArray: ContactList[] = [
    {
      avatar:
        'https://www.agenciasp.sp.gov.br/wp-content/uploads/2025/02/Praia-do-Felix-1024x768.jpg',
      name: 'Alison',
      email: 'alexemplo@gmail.com',
      number: '12 345678910'
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1610393144490-a930182ad2f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yaXpvbnRlJTIwbWFyfGVufDB8fDB8fHww',
      name: 'Armando',
      email: 'arexemplo@gmail.com',
      number: '11 121314151'
    },
    {
      avatar:
        'https://yt3.googleusercontent.com/AamnL9U7pxpc4R-fPX6XPuz-3J0IGzXoxJsTNYIuNvN1K0_cd-peP2g_xk4oWnmhdVaYxXl0=s900-c-k-c0x00ffffff-no-rj',
      name: 'Alan',
      email: 'alanxemplo@gmail.com',
      number: '61 718192021'
    },
    {
      avatar:
        'https://t3.ftcdn.net/jpg/05/81/58/24/360_F_581582461_NeNwtaWqqHQ6q3X13I2m5BDVrfMs8BND.jpg',
      name: 'Bernardo',
      email: 'bexemplo@gmail.com',
      number: '22 232425262'
    }
  ]

  const WordCategorys = contactsArray.map((contact) => contact.name.charAt(0))

  const WordCaterysSet: Set<string> = new Set([...WordCategorys])

  const WordsCategoryArray = [...WordCaterysSet]

  return (
    <>
      <SearchBar />
      <CreateNewContact />

      {WordsCategoryArray.map((word) => {
        const filteredContacts = contactsArray.filter(
          (contact) => contact.name[0].toUpperCase() === word
        )

        if (filteredContacts.length === 0) return null

        return (
          <div key={word}>
            <WordCategory wordCategory={word} />
            {filteredContacts.map((contact, index) => (
              <Contact
                key={contact.number}
                contactAvatar={contact.avatar}
                contactName={contact.name}
                phoneNumber={contact.number}
                emailAdress={contact.email}
                onContactsPage={onContactsPage}
                isFirst={index === 0}
                isLast={index === filteredContacts.length - 1}
              />
            ))}
          </div>
        )
      })}
    </>
  )
}

export default ContactsList
