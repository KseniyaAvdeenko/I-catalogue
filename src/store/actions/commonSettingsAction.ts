import {AppDispatch} from "../store";
import {userSlice} from "../reducers/userSlice";
import {commonSettingsSlice} from "../reducers/commonSettingsSlice";
import axios from "axios";
import {ICommonSettings} from "../../interface/ICommonSettings";
import {apiUrl, formData, getAuthConfigMultipart} from "./apiUrl";


export const loadCommonSettings = () => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            dispatch(commonSettingsSlice.actions.loadCommonSettingsFetching());
            const response = await axios.get<ICommonSettings>(apiUrl + `common_page_settings/common_page_settings/get_common_settings/`, getAuthConfigMultipart(localStorage.access));
            dispatch(commonSettingsSlice.actions.loadCommonSettingsSuccess(response.data));
        } catch {
            dispatch(commonSettingsSlice.actions.loadCommonSettingsFail('Ошибка'));
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}

export const updateCommonSettings = (id: number, data: any) => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            Object.keys(data).map((key) => {
                formData.set(key, data[key])
            })
            const response = await axios.patch<ICommonSettings>(apiUrl + `/common_page_settings/common_page_settings/${id}/`, formData, getAuthConfigMultipart(localStorage.access));
            dispatch(commonSettingsSlice.actions.updateCommonSettingsSuccess(response.data));
        } catch {
            dispatch(commonSettingsSlice.actions.updateCommonSettingsFail('Ошибка'));
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}


export const restoreCommonSettings = (id: number) => async (dispatch: AppDispatch) => {
    if (localStorage.access) {
        try {
            const response = await axios.get<boolean>(apiUrl + `common_page_settings/common_page_settings/${id}/restore_common_settings/`, getAuthConfigMultipart(localStorage.access));
            dispatch(commonSettingsSlice.actions.restoreCommonSettingsSuccess(response.data));
        } catch {
            dispatch(commonSettingsSlice.actions.restoreCommonSettingsFail(false));
        }
    } else {
        dispatch(userSlice.actions.loadingCurrentUserFail('Вы не авторизованы'))
    }
}