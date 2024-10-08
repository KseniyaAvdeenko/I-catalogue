import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContactsInitial} from "../../interface/IInitialStates";
import {IContacts} from "../../interface/INavbar";

const initialState: IContactsInitial = {
    isLoading: false,
    contacts: null,
    contact: null,
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        contactsFetching(state) {
            state.isLoading = true;
        },
        loadContactsSuccess(state, action: PayloadAction<IContacts[]>) {
            state.isLoading = false;
            state.contacts = action.payload
        },
        loadContactsFail(state) {
            state.isLoading = false;
        },
        createContactSuccess(state, action: PayloadAction<IContacts>) {
            state.contact = action.payload
        },
        updateContactSuccess(state, action: PayloadAction<IContacts>) {
            state.contact = action.payload
        },
        deleteContactsSuccess(state) {
            state.contact = null
        },
    }
})

export default contactsSlice.reducer