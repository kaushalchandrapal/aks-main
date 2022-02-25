import { createSlice } from "@reduxjs/toolkit";

const allContactsSlice = createSlice({
    name: "allContactsReducer",
    initialState: {
        allContactsResponseData: null,
        errorAllContactsResponseDate: null,
    },
    reducers: {
        allContacts: state => ({ ...state }),
        allContactsSuccess: (state, action) => ({
            ...state,
            allContactsResponseData: action.payload,
        }),
        allContactsError: (state, action) => ({
            ...state,
            errorAllContactsResponseDate: action.payload,
        }),
        resetAllContacts: state => ({
            ...state,
            allContactsResponseData: null,
            errorAllContactsResponseDate: null,
        }),
    }
});

export const {
    allContacts,
    allContactsSuccess,
    allContactsError,
    resetAllContacts,
} = allContactsSlice.actions;

export default allContactsSlice.reducer;
