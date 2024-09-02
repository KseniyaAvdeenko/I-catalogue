import {AppDispatch} from "../store";
import axios from "axios";
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
export const createContact = (access: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.post<IContacts>(
                apiUrl + `navbar/contacts/`,
                JSON.stringify(data),
                getAuthConfigApplicationJson(access)
            )
            dispatch(navbarSlice.actions.createContactSuccess(response.data))
            dispatch(loadContacts())
        } catch (e) {
            dispatch(navbarSlice.actions.createContactFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}
export const updateContact = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch<IContacts>(
                apiUrl + `navbar/contacts/${id}/`,
                JSON.stringify(data),
                getAuthConfigApplicationJson(access)
            )
            dispatch(navbarSlice.actions.updateContactSuccess(response.data))
            dispatch(loadContacts())
        } catch (e) {
            dispatch(navbarSlice.actions.updateContactFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}


export const deleteContact = (access: string, id: number) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `navbar/contacts/${id}/`, getAuthConfigApplicationJson(access))
            dispatch(navbarSlice.actions.deleteContactsSuccess())
            dispatch(loadContacts())
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
export const createNavLink = (access: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.post(apiUrl + `navbar/navigation_links/`, JSON.stringify(data),
                getAuthConfigApplicationJson(access))
            dispatch(navbarSlice.actions.createNavLinkSuccess(response.data))
            dispatch(loadNavLinks())
        } catch (e) {
            dispatch(navbarSlice.actions.createNavLinkFail('Ошибка'))
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
            dispatch(navbarSlice.actions.updateNavLinkSuccess(response.data))
            dispatch(loadNavLinks())
        } catch (e) {
            dispatch(navbarSlice.actions.updateNavLinkFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const deleteNavLink = (access: string, id: number) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `navbar/navigation_links/${id}/`, getAuthConfigApplicationJson(access))
            dispatch(navbarSlice.actions.deleteNavLinkSuccess())
            dispatch(loadNavLinks())
        } catch (e) {
            dispatch(navbarSlice.actions.deleteNavLinkFail())
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}