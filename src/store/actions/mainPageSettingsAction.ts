import {AppDispatch} from "../store";
import axios from "axios";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {mainPageSettingsSlice} from "../reducers/mainPageSettingsSlice";
import {IMainPageSetting} from "../../interface/IPagesSettings";
import {errorSlice} from "../reducers/errorSlice";

export const loadMainPageSettings = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(mainPageSettingsSlice.actions.mainPageFetching())
        const response = await axios.get<IMainPageSetting>(apiUrl + `page_settings/main_page_settings/get_main_page/`, getRequestHeaders())
        dispatch(mainPageSettingsSlice.actions.loadMainPageSuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.loadingDataErrors('Ошибка загрузки настроек главной страницы'))
        dispatch(mainPageSettingsSlice.actions.loadMainPageFail())
    }
}

export const updateMainPageSettings = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            dispatch(mainPageSettingsSlice.actions.mainPageFetching())
            const response = await axios.patch<IMainPageSetting>(apiUrl + `page_settings/main_page_settings/${id}/`,
                JSON.stringify(data),
                getAuthConfigApplicationJson(access))
            dispatch(mainPageSettingsSlice.actions.updateMainPageSuccess(response.data))
            dispatch(loadMainPageSettings())
        } catch (e) {
            dispatch(errorSlice.actions.updatingDataErrors('Ошибка обновления настроек главной страницы'))
        }
    } else {
        dispatch(errorSlice.actions.updatingDataErrors('Вы не авторизованы'))
    }
}