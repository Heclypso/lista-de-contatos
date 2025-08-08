import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContactClass from '../../models/Contact'

type ContactState = {
  contacts: ContactClass[]
  viewContact: ContactClass | null
  currentPage: string
  canEditContact: boolean
  newContact: ContactClass | null
}

const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      avatar:
        'https://www.agenciasp.sp.gov.br/wp-content/uploads/2025/02/Praia-do-Felix-1024x768.jpg',
      name: 'Alison',
      email: 'alexemplo@gmail.com',
      number: '12 345678910',
      favorited: true
    },
    {
      id: 2,
      avatar:
        'https://images.unsplash.com/photo-1610393144490-a930182ad2f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yaXpvbnRlJTIwbWFyfGVufDB8fDB8fHww',
      name: 'Armando',
      email: 'arexemplo@gmail.com',
      number: '11 121314151',
      favorited: false
    },
    {
      id: 3,
      avatar:
        'https://yt3.googleusercontent.com/AamnL9U7pxpc4R-fPX6XPuz-3J0IGzXoxJsTNYIuNvN1K0_cd-peP2g_xk4oWnmhdVaYxXl0=s900-c-k-c0x00ffffff-no-rj',
      name: 'Alan',
      email: 'alanxemplo@gmail.com',
      number: '61 718192021',
      favorited: true
    },
    {
      id: 4,
      avatar:
        'https://t3.ftcdn.net/jpg/05/81/58/24/360_F_581582461_NeNwtaWqqHQ6q3X13I2m5BDVrfMs8BND.jpg',
      name: 'Bernardo',
      email: 'bexemplo@gmail.com',
      number: '22 232425269',
      favorited: false
    },
    {
      id: 5,
      avatar:
        'https://pt.quizur.com/_image?href=https://img.quizur.com/f/img6297614f4e5b48.34472406.jpg?lastEdited=1654088044&w=600&h=600&f=webp',
      name: 'Carlos',
      email: 'cexemplo@gmail.com',
      number: '22 232425262',
      favorited: false
    }
  ],
  viewContact: null,
  currentPage: '',
  canEditContact: false,
  newContact: null
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    newContact: (state, action: PayloadAction<ContactClass>) => {
      state.newContact = action.payload
    },
    addToContacts: (state) => {
      if (!state.newContact) {
        console.log('não existe novo contato')
      } else {
        state.contacts.push(state.newContact)
      }
    },
    viewContact: (state, action: PayloadAction<ContactClass>) => {
      state.viewContact = action.payload
    },
    removeViewContact: (state) => {
      state.viewContact = null
    },
    changeOnPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload
    },
    favoriteContact: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.contacts.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.contacts[contactIndex].favorited = true
      }
    },
    removeFavorited: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.contacts.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.contacts[contactIndex].favorited = false
      }
    },
    deleteContact: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.contacts.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.contacts.splice(contactIndex, 1)
      }
    },
    changeCanEdit: (state) => {
      state.canEditContact = !state.canEditContact
    }
  }
})

export const {
  addToContacts,
  viewContact,
  removeViewContact,
  changeOnPage,
  favoriteContact,
  removeFavorited,
  deleteContact,
  changeCanEdit,
  newContact
} = contactSlice.actions
export default contactSlice.reducer
