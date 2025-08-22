import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContactClass from '../../models/Contact'

type ContactState = {
  contacts: ContactClass[]
  viewContact: ContactClass | null
  currentPage: string
  canEditContact: boolean
  newContact: ContactClass | null
  searchValue: string
  formError: string
  favoritedState: boolean
}

const initialState: ContactState = {
  contacts: [],
  viewContact: null,
  currentPage: 'contact',
  canEditContact: false,
  newContact: null,
  searchValue: '',
  formError: '',
  favoritedState: false
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
        if (!state.contacts.some((c) => c.name === state.newContact?.name)) {
          state.contacts.push(state.newContact)
        }
      }
    },
    setViewContact: (state, action: PayloadAction<ContactClass>) => {
      state.viewContact = action.payload
    },
    removeViewContact: (state) => {
      state.viewContact = null
    },
    changeOnPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload
    },
    deleteContact: (state, action: PayloadAction<ContactClass['id']>) => {
      const contactIndex = state.contacts.findIndex(
        (c) => c.id === action.payload
      )
      if (contactIndex >= 0) {
        state.contacts.splice(contactIndex, 1)
      }
    },
    editContact: (state, action: PayloadAction<ContactClass['id']>) => {
      const contactIndex = state.contacts.findIndex(
        (c) => c.id === action.payload
      )

      const currentContactInfos = state.viewContact
      const storedContactInfos = state.contacts[contactIndex]

      if (!storedContactInfos || !currentContactInfos) return

      if (
        storedContactInfos.avatar != currentContactInfos.avatar ||
        storedContactInfos.name != currentContactInfos.name ||
        storedContactInfos.number != currentContactInfos.number ||
        storedContactInfos.email != currentContactInfos.email ||
        state.favoritedState != storedContactInfos.favorited
      ) {
        state.contacts.splice(contactIndex, 1)

        storedContactInfos.avatar = currentContactInfos.avatar
        storedContactInfos.name = currentContactInfos.name
        storedContactInfos.number = currentContactInfos.number
        storedContactInfos.email = currentContactInfos.email
        storedContactInfos.favorited = state.favoritedState
      }
    },
    changeCanEdit: (state) => {
      state.canEditContact = !state.canEditContact
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setLastCall: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.contacts.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.contacts[contactIndex].lastCall = action.payload.lastCall
      }
    },
    setFormError: (state, action: PayloadAction<string>) => {
      state.formError = action.payload
    },
    setFavoritedState: (state, action: PayloadAction<boolean>) => {
      state.favoritedState = action.payload
    }
  }
})

export const {
  addToContacts,
  setViewContact,
  removeViewContact,
  changeOnPage,
  deleteContact,
  editContact,
  changeCanEdit,
  newContact,
  setSearchValue,
  setLastCall,
  setFormError,
  setFavoritedState
} = contactSlice.actions
export default contactSlice.reducer
