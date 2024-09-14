import {AppDispatch} from "../store";
import {prodImageSlice} from "../reducers/prodImageSlice";
import axios from "axios";
import {IImage} from "../../interface/IProduct";
import {apiUrl, clearFormData, createFormData, formData, getAuthConfigMultipart, getRequestHeaders} from "./apiUrl";
import {loadProductsReadOnly} from "./productAction";


export const loadImages = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(prodImageSlice.actions.imagesFetching())
        const response = await axios.get<IImage[] | []>(apiUrl + `product/prod_images/`, getRequestHeaders())
        dispatch(prodImageSlice.actions.loadImagesSuccess(response.data))
    } catch (e) {
        dispatch(prodImageSlice.actions.loadImagesFail('error'))
    }
}

export const createImage = (access: string, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            const response = await axios.post<IImage>(apiUrl + `product/prod_images/`, createFormData(data), getAuthConfigMultipart(access))
            dispatch(prodImageSlice.actions.createImageSuccess(response.data))
            dispatch(loadImages());
            dispatch(loadProductsReadOnly())
            clearFormData(data)
        } catch (e) {
            dispatch(prodImageSlice.actions.createImageFail('Ошибка'))
        }
    } else {
        dispatch(prodImageSlice.actions.createImageFail('Вы не авторизованы'))
    }
}
export const updateImage = (access: string, id: number, data: any) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            dispatch(prodImageSlice.actions.imageFetching())
            const response = await axios.patch<IImage>(apiUrl + `product/prod_images/${id}/`, createFormData(data), getAuthConfigMultipart(access))
            dispatch(prodImageSlice.actions.updateImageSuccess(response.data))
            dispatch(loadImages());
            dispatch(loadProductsReadOnly())
            clearFormData(data)
        } catch (e) {
            dispatch(prodImageSlice.actions.updateImageFail('Ошибка'))
        }
    } else {
        dispatch(prodImageSlice.actions.updateImageFail('Вы не авторизованы'))
    }
}
export const deleteImage = (access: string, id: number,) => async (dispatch: AppDispatch) => {
    if (access) {
        try {
            await axios.delete(apiUrl + `product/prod_images/${id}/`, getAuthConfigMultipart(access))
            dispatch(prodImageSlice.actions.deleteImageSuccess())
            dispatch(loadImages());
            dispatch(loadProductsReadOnly())
        } catch (e) {
            dispatch(prodImageSlice.actions.deleteImageFail('Ошибка'))
        }
    } else {
        dispatch(prodImageSlice.actions.deleteImageFail('Вы не авторизованы'))
    }
}