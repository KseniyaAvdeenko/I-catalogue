import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {INavLinksInitial} from "../../interface/IInitialStates";
import {INavLinks} from "../../interface/INavbar";

const initialState: INavLinksInitial = {
    isLoading: false,
    error: '',
    navLinks: null,
    navLink: null
}

export const navLinksSlice = createSlice({
    name: 'navLinks',
    initialState,
    reducers: {
       navLinksFetching(state){
            state.isLoading = true;
        },
        loadNavLinksSuccess(state, action: PayloadAction<INavLinks[]>){
            state.isLoading = false;
            state.navLinks = action.payload;
        },
        loadNavLinksFail(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        createNavLinkSuccess(state, action: PayloadAction<INavLinks>){
            state.navLink = action.payload
        },
        createNavLinkFail(state, action: PayloadAction<string>){
            state.error = action.payload
        },
        updateNavLinkSuccess(state, action: PayloadAction<INavLinks>){
            state.navLink = action.payload
        },
        updateNavLinkFail(state, action: PayloadAction<string>){
            state.error = action.payload
        },
        deleteNavLinkSuccess(state){
            state.navLink = null
        },
        deleteNavLinkFail(state, action: PayloadAction<string>){
            state.error = action.payload
        }
    }
})

export default navLinksSlice.reducer