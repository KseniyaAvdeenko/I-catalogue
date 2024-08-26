import {AppDispatch} from "../store";
import {userSlice} from "../reducers/userSlice";
import axios from "axios";
import {IButtonSettings} from "../../interface/ICommonSettings";
import {apiUrl, getAuthConfigApplicationJson} from "./apiUrl";
import {buttonSettingsSlice} from "../reducers/buttonSettingsSlice";

export const loadButtonSettings = () => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            dispatch(buttonSettingsSlice.actions.buttonSettingsFetching())
            const response = await axios.get<IButtonSettings>(apiUrl + 'common_page_settings/button_settings/get_button/', getAuthConfigApplicationJson(localStorage.access))
            dispatch(buttonSettingsSlice.actions.loadButtonSettingsSuccess(response.data))
        } catch (e) {
            dispatch(buttonSettingsSlice.actions.loadButtonSettingsFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const updateButtonSettings = (id: number, data: any) => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            const body = JSON.stringify(data)
            const response = await axios.patch<IButtonSettings>(apiUrl + `common_page_settings/button_settings/${id}/`, body, getAuthConfigApplicationJson(localStorage.access))
            dispatch(buttonSettingsSlice.actions.updateButtonSettingsSuccess(response.data))
        } catch (e) {
            dispatch(buttonSettingsSlice.actions.updateButtonSettingsFail('Ошибка'))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const restoreButtonSettings = (id: number) => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            const response = await axios.patch<boolean>(apiUrl + `common_page_settings/button_settings/${id}/restore_button/`, getAuthConfigApplicationJson(localStorage.access))
            dispatch(buttonSettingsSlice.actions.restoreButtonSettingsSuccess(response.data))
        } catch (e) {
            dispatch(buttonSettingsSlice.actions.restoreButtonSettingsFail(false))
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}