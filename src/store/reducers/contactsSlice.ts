import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContactsInitial} from "../../interface/IInitialStates";
import {IContacts} from "../../interface/INavbar";

const initialState: IContactsInitial = {
    isLoading: false,
    error: '',
    contacts: null,
    contact: null,
    contactError: ''
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        contactsFetching(state){
            state.isLoading = true;
        },
        loadContactsSuccess(state, action: PayloadAction<IContacts[]>){
            state.isLoading = false;
            state.contacts = action.payload
        },
        loadContactsFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        createContactSuccess(state, action: PayloadAction<IContacts>){
            state.contact = action.payload
        },
        createContactFail(state, action: PayloadAction<string>){
            state.contactError = action.payload
        },
        updateContactSuccess(state, action: PayloadAction<IContacts>){
            state.contact = action.payload
        },
        updateContactFail(state, action: PayloadAction<string>){
            state.contactError = action.payload
        },
        deleteContactsSuccess(state){
            state.contact = null
        },
        deleteContactFail(state, action: PayloadAction<string>){
            state.contactError = action.payload
        },
    }
})

export default contactsSlice.reducer