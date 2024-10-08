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
        dispatch(socialLinkSlice.actions.loadSocialLinksFail('Ошибка загрузки социальных ссылок'))
    }
}

export const createSocialLink = (access: string, data: any) => async (dispatch: AppDispatch)=>{
    if(access){
        try {
            const response = await axios.post<ISocialLink>(apiUrl + `navbar/social-links/`, JSON.stringify(data), getAuthConfigApplicationJson(access))
            dispatch(socialLinkSlice.actions.createSocialLinkSuccess(response.data))
            dispatch(loadSocialLinks())
        } catch (e) {
            dispatch(socialLinkSlice.actions.createSocialLinkFail('Ошибка создания социальной ссылки'))
        }
    }else{
        dispatch(socialLinkSlice.actions.createSocialLinkFail('Вы не авторизованы'))
    }
}

export const updateSocialLink = (access: string, id: number, data: any) => async (dispatch: AppDispatch)=>{
    if(access){
        try {
            const response = await axios.patch<ISocialLink>(apiUrl + `navbar/social-links/${id}/`, JSON.stringify(data), getAuthConfigApplicationJson(access))
            dispatch(socialLinkSlice.actions.updateSocialLinkSuccess(response.data))
            dispatch(loadSocialLinks())
        } catch (e) {
            dispatch(socialLinkSlice.actions.updateSocialLinkFail('Ошибка обновления социальной ссылки'))
        }
    }else{
        dispatch(socialLinkSlice.actions.updateSocialLinkFail('Вы не авторизованы'))
    }
}

export const deleteSocialLink = (id: number, access: string) => async (dispatch: AppDispatch)=>{
     if(access){
        try {
            await axios.delete(apiUrl + `navbar/social-links/${id}/`, getAuthConfigApplicationJson(access))
            dispatch(socialLinkSlice.actions.deleteSocialLinkSuccess())
            dispatch(loadSocialLinks())
        } catch (e) {
            dispatch(socialLinkSlice.actions.deleteSocialLinkFail('Ошибка удаления социальной ссылки'))
        }
    }else{
        dispatch(socialLinkSlice.actions.deleteSocialLinkFail('Вы не авторизованы'))
    }
}