import {AppDispatch} from "../store";
import {buttonSettingsSlice} from "../reducers/buttonSettingsSlice";
import axios from "axios/index";
import {IButtonSettings} from "../../interface/ICommonSettings";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {userSlice} from "../reducers/userSlice";
import {navbarSlice} from "../reducers/navbarSlice";
import {IContacts, INavLinks} from "../../interface/INavbar";

export const loadContacts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(navbarSlice.actions.contactsFetching())
        const response = await axios.get<IContacts[]>(apiUrl + 'navbar/contacts/', getRequestHeaders())
        dispatch(navbarSlice.actions.loadContactsSuccess(response.data))
    } catch (e) {
        dispatch(navbarSlice.actions.loadContactsFail('Ошибка'))
    }
}

export const loadContact = (id: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<IContacts>(apiUrl + `navbar/contacts/${id}/`, getRequestHeaders())
        dispatch(navbarSlice.actions.loadContactSuccess(response.data))
    } catch (e) {
        dispatch(navbarSlice.actions.loadContactFail('Ошибка'))
    }
}

export const deleteContact = (access: string, id: number) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `navbar/contacts/${id}/`, getAuthConfigApplicationJson(access))
            dispatch(navbarSlice.actions.deleteContactsSuccess())
        } catch (e) {
            dispatch(navbarSlice.actions.deleteContactFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const loadNavLinks = () => async (dispatch: AppDispatch) => {
        try {
            dispatch(navbarSlice.actions.navLinksFetching())
            const response = await axios.get<INavLinks[]>(apiUrl + `navbar/navigation_links/`, getRequestHeaders())
            dispatch(navbarSlice.actions.loadNavLinksSuccess(response.data))
        } catch (e) {
            dispatch(navbarSlice.actions.loadNavLinksFail('Ошибка'))
        }
}

export const deleteNavLink = (access: string, id: number) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `navbar/navigation_links/${id}/`, getAuthConfigApplicationJson(access))
            dispatch(navbarSlice.actions.deleteNavLinkSuccess())
        } catch (e) {
            dispatch(navbarSlice.actions.loadNavLinksFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}