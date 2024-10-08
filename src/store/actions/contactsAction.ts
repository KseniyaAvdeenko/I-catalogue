import {AppDispatch} from "../store";
import axios from "axios";
import {IContacts} from "../../interface/INavbar";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {contactsSlice} from "../reducers/contactsSlice";

export const loadContacts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(contactsSlice.actions.contactsFetching())
        const response = await axios.get<IContacts[]>(apiUrl + 'navbar/contacts/', getRequestHeaders())
        dispatch(contactsSlice.actions.loadContactsSuccess(response.data))
    } catch (e) {
        dispatch(contactsSlice.actions.loadContactsFail('Ошибка загрузки контактов'))
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
            dispatch(contactsSlice.actions.createContactSuccess(response.data))
            dispatch(loadContacts())
        } catch (e) {
            dispatch(contactsSlice.actions.createContactFail('Ошибка создания нового контакта'))
        }
    } else {
        dispatch(contactsSlice.actions.createContactFail('Вы не авторизованы'))
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
            dispatch(contactsSlice.actions.updateContactSuccess(response.data))
            dispatch(loadContacts())
        } catch (e) {
            dispatch(contactsSlice.actions.updateContactFail('Ошибка обновления контакта'))
        }
    } else {
        dispatch(contactsSlice.actions.updateContactFail('Вы не авторизованы'))
    }
}


export const deleteContact = (access: string, id: number) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `navbar/contacts/${id}/`, getAuthConfigApplicationJson(access))
            dispatch(contactsSlice.actions.deleteContactsSuccess())
            dispatch(loadContacts())
        } catch (e) {
            dispatch(contactsSlice.actions.deleteContactFail('Ошибка удаления контакта'))
        }
    } else {
        dispatch(contactsSlice.actions.deleteContactFail('Вы не авторизованы'))
    }
}