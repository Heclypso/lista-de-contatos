import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  contacts: []
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addToContacts: (state, action: PayloadAction<string>) => {
      console.log('Esse é o state', state)
      console.log('Essa é a action', action)
    },
    removeContacts: (state, action: PayloadAction<string>) => {
      console.log('Esse é o state', state)
      console.log('Essa é a action', action)
    },
    editContacts: (state, action: PayloadAction<string>) => {
      console.log('Esse é o state', state)
      console.log('Essa é a action', action)
    }
  }
})

export const { addToContacts, removeContacts, editContacts } =
  contactSlice.actions
export default contactSlice.reducer
