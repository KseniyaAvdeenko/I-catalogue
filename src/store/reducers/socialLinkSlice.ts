import {ISocialLinksInitial} from "../../interface/IInitialStates";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISocialLink} from "../../interface/INavbar";

const initialState: ISocialLinksInitial ={
    isLoading: false,
    error: '',
    socialLinks: null,
    socialLink: null,
}

export const socialLinkSlice = createSlice({
    name: 'socialLinks',
    initialState,
    reducers: {
        fetchingSocialLinks(state){
            state.isLoading = true;
        },
        loadSocialLinksSuccess(state, action:PayloadAction<ISocialLink[]>){
            state.isLoading = false;
            state.socialLinks= action.payload
        },
        loadSocialLinksFail(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        createSocialLinkSuccess(state, action:PayloadAction<ISocialLink>){
            state.socialLink = action.payload
        },
        createSocialLinkFail(state, action:PayloadAction<string>){
            state.error = action.payload
        },
        updateSocialLinkSuccess(state, action:PayloadAction<ISocialLink>){
            state.socialLink = action.payload
        },
        updateSocialLinkFail(state, action:PayloadAction<string>){
            state.error = action.payload
        },
        deleteSocialLinkSuccess(state){
            state.socialLink = null
        },
        deleteSocialLinkFail(state, action:PayloadAction<string>){
            state.error = action.payload
        },
    }
})

export default socialLinkSlice.reducer