import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContacts, INavLinks} from "../../interface/INavbar";

interface INavbarInitial{
    isLoadingContacts: boolean;
    errorContacts: string;
    contacts: IContacts[]|null;
    contact: IContacts|null
    isLoadingNavLinks: boolean;
    errorNavLinks: string;
    navLinks: INavLinks[]|null;
    deletedNavLink: boolean
}

const initialState:INavbarInitial = {
    isLoadingContacts: false,
    errorContacts: '',
    contacts: null,
    contact: null,
    isLoadingNavLinks: false,
    errorNavLinks: '',
    navLinks: null,
    deletedNavLink: false
}


export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers:{
        contactsFetching(state){
            state.isLoadingContacts = true;
        },
        loadContactsSuccess(state, action: PayloadAction<IContacts[]>){
            state.isLoadingContacts = false;
            state.contacts = action.payload
        },
        loadContactsFail(state, action: PayloadAction<string>){
            state.isLoadingContacts = false;
            state.errorContacts = action.payload
        },
        loadContactSuccess(state, action: PayloadAction<IContacts>){
            state.contact = action.payload
        },
        loadContactFail(state, action: PayloadAction<string>){
            state.errorContacts = action.payload
        },
        deleteContactsSuccess(state){
            state.contact = null
        },
        deleteContactFail(state, action: PayloadAction<string>){
            state.errorContacts = action.payload
        },
        navLinksFetching(state){
            state.isLoadingNavLinks = true;
        },
        loadNavLinksSuccess(state, action: PayloadAction<INavLinks[]>){
            state.isLoadingNavLinks = false;
            state.navLinks = action.payload;
        },
        loadNavLinksFail(state, action: PayloadAction<string>){
            state.errorNavLinks = action.payload
        },
        deleteNavLinkSuccess(state){
            state.deletedNavLink = true
        },
        deleteNavLinkFail(state){
            state.deletedNavLink = false
        }
    }
})

export default navbarSlice.reducer