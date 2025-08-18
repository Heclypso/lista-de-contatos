import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContactClass from '../../models/Contact'

type ContactState = {
  contacts: ContactClass[]
  viewContact: ContactClass | null
  currentPage: string
  canEditContact: boolean
  newContact: ContactClass | null
  searchValue: string
  favoritedState: boolean
  formError: string
}

const initialState: ContactState = {
  contacts: [],
  viewContact: null,
  currentPage: 'contact',
  canEditContact: false,
  newContact: null,
  searchValue: '',
  favoritedState: false,
  formError: ''
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
    setFavoritedState: (state, action: PayloadAction<boolean>) => {
      state.favoritedState = action.payload
    },
    setFormError: (state, action: PayloadAction<string>) => {
      state.formError = action.payload
    }
  }
})

export const {
  addToContacts,
  setViewContact,
  removeViewContact,
  changeOnPage,
  favoriteContact,
  removeFavorited,
  deleteContact,
  changeCanEdit,
  newContact,
  setSearchValue,
  setLastCall,
  setFavoritedState,
  setFormError
} = contactSlice.actions
export default contactSlice.reducer
