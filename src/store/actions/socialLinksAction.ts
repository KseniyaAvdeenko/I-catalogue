import {AppDispatch} from "../store";
import {socialLinkSlice} from "../reducers/socialLinkSlice";
import axios from "axios";
import {ISocialLink} from "../../interface/INavbar";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";

export const loadSocialLinks = () => async (dispatch: AppDispatch)=>{
    try {
        dispatch(socialLinkSlice.actions.fetchingSocialLinks())
        const response = await axios.get<ISocialLink[]>(apiUrl + `navbar/social-links/`, getRequestHeaders())
        dispatch(socialLinkSlice.actions.loadSocialLinksSuccess(response.data))
    }catch (e) {
        dispatch(socialLinkSlice.actions.loadSocialLinksFail('loading social links error'))
    }
}

export const createSocialLink = (access: string, data: any) => async (dispatch: AppDispatch)=>{
    if(access){
        try {
            const response = await axios.post<ISocialLink>(apiUrl + `navbar/social-links/`, JSON.stringify(data), getAuthConfigApplicationJson(access))
            dispatch(socialLinkSlice.actions.createSocialLinkSuccess(response.data))
            dispatch(loadSocialLinks())
        } catch (e) {
            dispatch(socialLinkSlice.actions.createSocialLinkFail('creating social link error'))
        }
    }else{
        dispatch(socialLinkSlice.actions.createSocialLinkFail('you are not logged in'))
    }
}

export const updateSocialLink = (access: string, id: number, data: any) => async (dispatch: AppDispatch)=>{
    if(access){
        try {
            const response = await axios.patch<ISocialLink>(apiUrl + `navbar/social-links/${id}/`, JSON.stringify(data), getAuthConfigApplicationJson(access))
            dispatch(socialLinkSlice.actions.updateSocialLinkSuccess(response.data))
            dispatch(loadSocialLinks())
        } catch (e) {
            dispatch(socialLinkSlice.actions.updateSocialLinkFail('updating social link error'))
        }
    }else{
        dispatch(socialLinkSlice.actions.updateSocialLinkFail('you are not logged in'))
    }
}

export const deleteSocialLink = (id: number, access: string) => async (dispatch: AppDispatch)=>{
     if(access){
        try {
            await axios.delete(apiUrl + `navbar/social-links/${id}/`, getAuthConfigApplicationJson(access))
            dispatch(socialLinkSlice.actions.deleteSocialLinkSuccess())
            dispatch(loadSocialLinks())
        } catch (e) {
            dispatch(socialLinkSlice.actions.deleteSocialLinkFail('deleting social link error'))
        }
    }else{
        dispatch(socialLinkSlice.actions.deleteSocialLinkFail('you are not logged in'))
    }
}