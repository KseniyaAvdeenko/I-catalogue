import {AppDispatch} from "../store";
import {prodPageSettingsSlice} from "../reducers/prodPageSettingsSlice";
import axios from "axios";
import {IProductPageSettings} from "../../interface/IProduct";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";


export const loadProdPage = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(prodPageSettingsSlice.actions.prodPageSettingsFetching())
        const response = await axios.get<IProductPageSettings>(apiUrl + `product/prod_page_settings/get_prod_page/`, getRequestHeaders());
        dispatch(prodPageSettingsSlice.actions.loadProdPageSettingsSuccess(response.data))
    } catch (e) {
        dispatch(prodPageSettingsSlice.actions.loadProdPageSettingsFail('Ошибка'))
    }
}

export const updateProdPageSettings = (access: string, id: number, data: any) => async (dispatch: AppDispatch) =>{
    if (access){
        try{
            const response = await axios.patch<IProductPageSettings>(apiUrl + `product/prod_page_settings/${id}/`,JSON.stringify(data), getAuthConfigApplicationJson(access));
            dispatch(prodPageSettingsSlice.actions.updateProdPageSettingsSuccess(response.data))
        }catch (e) {
            dispatch(prodPageSettingsSlice.actions.updateProdPageSettingsFail('Ошибка'));
        }
    }else{
        dispatch(prodPageSettingsSlice.actions.updateProdPageSettingsFail('Вы не авторизованы'));
    }
}