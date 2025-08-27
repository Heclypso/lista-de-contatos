import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContactClass from '../../models/Contact'

type ContactState = {
  contacts: ContactClass[]
  selectedContactId: number | null
  currentPage: string
  canEditContact: boolean
  newContact: ContactClass | null
  newContactFavorited: boolean
  searchValue: string
  formError: string
}

const initialState: ContactState = {
  contacts: [],
  selectedContactId: 0,
  currentPage: 'contact',
  canEditContact: true,
  newContact: null,
  searchValue: '',
  formError: '',
  newContactFavorited: false
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactClass>) => {
      const exists = state.contacts.some((c) => c.id === action.payload.id)
      if (!exists) {
        state.contacts.push(action.payload)
        state.newContact = action.payload
      }
    },
    setNewContact: (state, action: PayloadAction<ContactClass | null>) => {
      const exists = state.contacts.some((c) => {
        if (action.payload != null) {
          c.id === action.payload.id
        }
      })
      if (!exists) {
        state.newContact = action.payload
      }
    },
    toggleNewContactFavorited: (state) => {
      state.newContactFavorited = !state.newContactFavorited
    },
    turnNewContactFavoritedFalse: (state) => {
      state.newContactFavorited = false
    },
    setSelectedContactId: (state, action: PayloadAction<number | null>) => {
      state.selectedContactId = action.payload
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
    editContact: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.contacts.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex === -1) return

      state.contacts[contactIndex] = action.payload
    },
    toggleFavorited: (state) => {
      const index = state.selectedContactId

      if (index === null) return

      const currentContact = state.contacts[index]

      currentContact.favorited = !currentContact
    },
    toggleCanEdit: (state) => {
      state.canEditContact = !state.canEditContact
    },
    setCanEditTrue: (state) => {
      state.canEditContact = true
    },
    setCanEditFalse: (state) => {
      state.canEditContact = false
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
    }
  }
})

export const {
  addContact,
  setSelectedContactId,
  changeOnPage,
  deleteContact,
  editContact,
  setCanEditTrue,
  setCanEditFalse,
  toggleCanEdit,
  toggleNewContactFavorited,
  turnNewContactFavoritedFalse,
  setSearchValue,
  setLastCall,
  setFormError,
  toggleFavorited,
  setNewContact
} = contactSlice.actions
export default contactSlice.reducer
export function removecurrentContact(): any {
  throw new Error('Function not implemented.')
}
