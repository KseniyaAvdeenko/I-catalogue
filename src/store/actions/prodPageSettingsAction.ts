import {AppDispatch} from "../store";
import {prodPageSettingsSlice} from "../reducers/prodPageSettingsSlice";
import axios from "axios";
import {IProductPageSettings} from "../../interface/IProduct";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {errorSlice} from "../reducers/errorSlice";

export const loadProdPage = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(prodPageSettingsSlice.actions.prodPageSettingsFetching())
        const response = await axios.get<IProductPageSettings>(apiUrl + `product/prod_page_settings/get_prod_page/`, getRequestHeaders());
        dispatch(prodPageSettingsSlice.actions.loadProdPageSettingsSuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.loadingDataErrors('Ошибка загрузки настроек детальной страницы товара/услуги'))
        dispatch(prodPageSettingsSlice.actions.loadProdPageSettingsFail())
    }
}

export const updateProdPageSettings = (access: string, id: number, data: any) => async (dispatch: AppDispatch) =>{
    if (access){
        try{
            const response = await axios.patch<IProductPageSettings>(apiUrl + `product/prod_page_settings/${id}/`,JSON.stringify(data), getAuthConfigApplicationJson(access));
            dispatch(prodPageSettingsSlice.actions.updateProdPageSettingsSuccess(response.data))
        }catch (e) {
            dispatch(errorSlice.actions.updatingDataErrors('Ошибка обновления настроек детальной страницы товара/услуги'));
        }
    }else{
        dispatch(errorSlice.actions.updatingDataErrors('Вы не авторизованы'));
    }
}