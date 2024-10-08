import {AppDispatch} from "../store";
import {orderSlice} from "../reducers/orderSlice";
import axios from "axios";
import {INewOrder, INewOrderBase, IOrder, IPayment, IPaymentBase} from "../../interface/IOrder";
import {apiUrl, getRequestHeaders} from "./apiUrl";
import {encodeToken} from "../../hooks/encodeDecodeTokens";
import {IPaymentData} from "../../interface/IInitialStates";

export const loadOrders = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(orderSlice.actions.ordersFetching())
        const response = await axios.get<IOrder[]>(apiUrl + 'order/order/', getRequestHeaders());
        dispatch(orderSlice.actions.loadOrdersSuccess(response.data))
    } catch (e) {
        dispatch(orderSlice.actions.loadOrdersFail('Ошибка загрузки заказов'))
    }
}

export const createOrder = (data: INewOrderBase) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<INewOrder>(apiUrl + 'order/new_order/', JSON.stringify(data), getRequestHeaders());
        dispatch(loadOrders())
        dispatch(orderSlice.actions.createNewOrderSuccess(response.data))
        dispatch(startPayment(response.data.total_price, response.data.id, response.data.currency))
    } catch (e) {
        console.log(e)
        dispatch(orderSlice.actions.createNewOrderFail('Ошибка создания нового заказа'))
    }
}
export const updateOrder = (id: number, data: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.patch<INewOrder>(apiUrl + `order/new_order/${id}/`, JSON.stringify(data), getRequestHeaders());
        dispatch(loadOrders())
        dispatch(orderSlice.actions.updateNewOrderSuccess(response.data))
    } catch (e) {
        console.log(e)
        dispatch(orderSlice.actions.updateNewOrderFail('Ошибка обновления заказа'))
    }
}
export const startPayment = (totalSum: number, orderId: number, currency: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<IPaymentData>(
            apiUrl + `order/create_payment/${totalSum}/${orderId}/${currency}/`, getRequestHeaders());
        dispatch(loadOrders())
        dispatch(orderSlice.actions.newOrderPaymentSuccess(response.data))
        window.location.replace(response.data.confirmation_url)
    } catch (e) {
        console.log(e)
        dispatch(orderSlice.actions.newOrderPaymentFail('Ошибка оплаты заказа'))
    }
}
export const editPayment = (id: number, data: any) => async (dispatch: AppDispatch) => {
    try {
        await axios.patch<IPayment>(
            apiUrl + `order/payment/${id}/`, JSON.stringify(data), getRequestHeaders());
        dispatch(loadOrders())
    } catch (e) {
        dispatch(orderSlice.actions.newOrderPaymentFail('Ошибка обновления оплаты заказа'))
    }
}
export const checkPayment = (youkassaId: string, orderId: number, paymentId: number ) => async (dispatch: AppDispatch) => {
    try{
        const response = await axios.get<{ id: string; status: string }>(apiUrl + `order/payment_info/${youkassaId}/`, getRequestHeaders())
        if (response.data.status === 'succeeded') {
            dispatch(editPayment(paymentId, {status: 'succeeded'}))
            dispatch(updateOrder(orderId, {paid: true}))
            dispatch(orderSlice.actions.paymentPaidSuccess())
            dispatch(orderSlice.actions.destroyNewOrderAfterSuccessfulPayment())
        }
        if (response.data.status === 'canceled') dispatch(editPayment(paymentId, {status: 'canceled'}))
    }catch (e) {
        dispatch(orderSlice.actions.newOrderPaymentFail('Ошибка проверки оплаты заказа'))
    }
}
