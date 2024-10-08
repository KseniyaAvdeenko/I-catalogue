import {AppDispatch} from "../store";
import {prodImageSlice} from "../reducers/prodImageSlice";
import axios from "axios";
import {IImage} from "../../interface/IProduct";
import {apiUrl, clearFormData, createFormData, getAuthConfigMultipart, getRequestHeaders} from "./apiUrl";
import {loadProductsRead} from "./productAction";
import {errorSlice} from "../reducers/errorSlice";

export const loadImages = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(prodImageSlice.actions.imagesFetching())
        const response = await axios.get<IImage[] | []>(apiUrl + `product/prod_images/`, getRequestHeaders())
        dispatch(prodImageSlice.actions.loadImagesSuccess(response.data))
    } catch (e) {
        dispatch(errorSlice.actions.prodErrors('Ошибка загрузки картинок товаров'))
        dispatch(prodImageSlice.actions.loadImagesFail())
    }
}

export const createImage = (access: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.post<IImage>(apiUrl + `product/prod_images/`, createFormData(data), getAuthConfigMultipart(access))
            dispatch(prodImageSlice.actions.createImageSuccess(response.data))
            dispatch(loadImages());
            dispatch(loadProductsRead())
            clearFormData(data)
        } catch (e) {
            dispatch(errorSlice.actions.prodErrors('Ошибка создания картинки товаров'))
        }
    } else {
        dispatch(errorSlice.actions.prodErrors('Вы не авторизованы'))
    }
}
export const updateImage = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.patch<IImage>(apiUrl + `product/prod_images/${id}/`, createFormData(data), getAuthConfigMultipart(access))
            dispatch(prodImageSlice.actions.updateImageSuccess(response.data))
            dispatch(loadImages());
            dispatch(loadProductsRead())
            clearFormData(data)
        } catch (e) {
            dispatch(errorSlice.actions.prodErrors('Ошибка обновления картинки товаров'))
        }
    } else {
        dispatch(errorSlice.actions.prodErrors('Вы не авторизованы'))
    }
}
export const deleteImage = (access: string, id: number,) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `product/prod_images/${id}/`, getAuthConfigMultipart(access))
            dispatch(prodImageSlice.actions.deleteImageSuccess())
            dispatch(loadImages());
            dispatch(loadProductsRead())
        } catch (e) {
            dispatch(errorSlice.actions.prodErrors('Ошибка удаления картинки товаров'))
        }
    } else {
        dispatch(errorSlice.actions.prodErrors('Вы не авторизованы'))
    }
}