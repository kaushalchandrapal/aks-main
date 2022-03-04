import { createSlice } from "@reduxjs/toolkit";

const addContactSlice = createSlice({
    name: "addContactReducer",
    initialState: {
        addContactResponseData: null,
        erroraddContactResponseDate: null,
    },
    reducers: {
        addContact: state => ({ ...state }),
        addContactSuccess: (state, action) => ({
            ...state,
            addContactResponseData: action.payload,
        }),
        addContactError: (state, action) => ({
            ...state,
            erroraddContactResponseDate: action.payload,
        }),
        resetaddContact: state => ({
            ...state,
            addContactResponseData: null,
            erroraddContactResponseDate: null,
        }),
    }
});

export const {
    addContact,
    addContactSuccess,
    addContactError,
    resetaddContact,
} = addContactSlice.actions;

export default addContactSlice.reducer;
