import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    contacts: []
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        add: (state, action: PayloadAction) => {
            console.log(state)
            console.log(action)
        }
    }
})

export const {add} = contactSlice.actions
export default contactSlice.reducer
