import {ISocialLinksInitial} from "../../interface/IInitialStates";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISocialLink} from "../../interface/INavbar";

const initialState: ISocialLinksInitial ={
    isLoading: false,
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
        loadSocialLinksFail(state){
            state.isLoading = false;
        },
        createSocialLinkSuccess(state, action:PayloadAction<ISocialLink>){
            state.socialLink = action.payload
        },
        updateSocialLinkSuccess(state, action:PayloadAction<ISocialLink>){
            state.socialLink = action.payload
        },
        deleteSocialLinkSuccess(state){
            state.socialLink = null
        },
    }
})

export default socialLinkSlice.reducer