import {AppDispatch} from "../store";
import {productSlice} from "../reducers/productSlice";
import axios from "axios";
import {apiUrl, getAuthConfigApplicationJson, getRequestHeaders} from "./apiUrl";
import {IProd, IProdReadOnly} from "../../interface/IProduct";
import {errorSlice} from "../reducers/errorSlice";

export const loadProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.prodsFetching())
        const response = await axios.get<IProd[] | []>(apiUrl + `product/products/`, getRequestHeaders())
        dispatch(productSlice.actions.loadProductsSuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.prodErrors('Ошибка загрузки товаров/услуг'))
        dispatch(productSlice.actions.loadProductsFail())
    }
}

export const createProduct = (access: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.post<IProd>(apiUrl + `product/products/`,
                JSON.stringify(data), getAuthConfigApplicationJson(access));
            dispatch(productSlice.actions.createProductSuccess(response.data));
            dispatch(loadProducts());
            dispatch(loadProductsRead());
        } catch (e) {
            dispatch(errorSlice.actions.prodErrors('Ошибка создания товара/услуги'))
        }
    } else {
        dispatch(errorSlice.actions.prodErrors('Вы не авторизованы'))
    }
}

export const updateProduct = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch<IProd>(apiUrl + `product/products/${id}/`,
                JSON.stringify(data), getAuthConfigApplicationJson(access));
            dispatch(productSlice.actions.updateProductSuccess(response.data));
            dispatch(loadProductRead(id))
        } catch (e) {
            dispatch(errorSlice.actions.prodErrors('Ошибка обновления товара/услуги'))
        }
    } else {
        dispatch(errorSlice.actions.prodErrors('Вы не авторизованы'))
    }
}
export const deleteProduct = (access: string, id: number,) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `product/products_all/${id}/`,
                getAuthConfigApplicationJson(access));
            dispatch(productSlice.actions.deleteProductSuccess());
            dispatch(loadProducts())
            dispatch(loadProductsRead())
        } catch (e) {
            dispatch(errorSlice.actions.prodErrors('Ошибка удаления товара/услуги'))
        }
    } else {
        dispatch(errorSlice.actions.prodErrors('Вы не авторизованы'))
    }
}

export const loadProductsRead = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.prodsReadOnlyFetching())
        const response = await axios.get<IProdReadOnly[] | []>(apiUrl + `product/products_all/`, getRequestHeaders())
        dispatch(productSlice.actions.loadProductsReadOnlySuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.loadingDataErrors('Ошибка загрузки товаров/услуг'))
        dispatch(productSlice.actions.loadProductsReadOnlyFail())
    }
}

export const loadProductRead = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.prodReadOnlyFetching())
        const response = await axios.get<IProdReadOnly>(apiUrl + `product/products_all/${id}/`, getRequestHeaders())
        dispatch(productSlice.actions.loadProductReadOnlySuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.loadingDataErrors('Ошибка загрузки товара/услуги'))
        dispatch(productSlice.actions.loadProductReadOnlyFail())
    }
}

