import {AppDispatch} from "../store";
import {navLinksSlice} from "../reducers/navLinksSlice";
import axios from "axios";
import {INavLinks} from "../../interface/INavbar";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {userSlice} from "../reducers/userSlice";

export const loadNavLinks = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(navLinksSlice.actions.navLinksFetching())
        const response = await axios.get<INavLinks[]>(apiUrl + `navbar/navigation_links/`, getRequestHeaders())
        dispatch(navLinksSlice.actions.loadNavLinksSuccess(response.data))
    } catch (e) {
        dispatch(navLinksSlice.actions.loadNavLinksFail('Ошибка'))
    }
}
export const createNavLink = (access: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.post(apiUrl + `navbar/navigation_links/`, JSON.stringify(data),
                getAuthConfigApplicationJson(access))
            dispatch(navLinksSlice.actions.createNavLinkSuccess(response.data))
            dispatch(loadNavLinks())
        } catch (e) {
            dispatch(navLinksSlice.actions.createNavLinkFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const updateNavLink = (access: string,id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch(apiUrl + `navbar/navigation_links/${id}/`, JSON.stringify(data),
                getAuthConfigApplicationJson(access))
            dispatch(navLinksSlice.actions.updateNavLinkSuccess(response.data))
            dispatch(loadNavLinks())
        } catch (e) {
            dispatch(navLinksSlice.actions.updateNavLinkFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const deleteNavLink = (access: string, id: number) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `navbar/navigation_links/${id}/`, getAuthConfigApplicationJson(access))
            dispatch(navLinksSlice.actions.deleteNavLinkSuccess())
            dispatch(loadNavLinks())
        } catch (e) {
            dispatch(navLinksSlice.actions.deleteNavLinkFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}