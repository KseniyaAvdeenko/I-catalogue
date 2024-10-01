import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialStatesBase, IOrderInitial, IPaymentData} from "../../interface/IInitialStates";
import {INewOrder, IOrder} from "../../interface/IOrder";
import {encodeToken} from "../../hooks/encodeDecodeTokens";
// export interface IOrderInitial extends IInitialStatesBase{
//     orders: IOrder[]|null;
//     newOrder: IOrder|null;
//     newOrderError: string
//     paymentChecked: 'checked'|'unchecked'
//     newOrderPaymentData: {youkassaPaymentId: string, orderPaymentId: number, orderId:number}
//     paymentError: string
// }

const initialState: IOrderInitial = {
    isLoading: false,
    error: '',
    orders: null,
    newOrder: null,
    newOrderError: '',
    paymentError: '',
    newOrderPaymentData: {
        confirmation_url: '',
        youkassaPaymentId: localStorage.youkassaPaymentId ? localStorage.youkassaPaymentId : null,
        orderPaymentId: localStorage.oderPaymentId ? localStorage.oderPaymentId : null,
        orderId: localStorage.orderId ? localStorage.orderId : null
    }
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        ordersFetching(state) {
            state.isLoading = true;
        },
        loadOrdersSuccess(state, action: PayloadAction<IOrder[]>) {
            state.isLoading = false;
            state.orders = action.payload
        },
        loadOrdersFail(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
        createNewOrderSuccess(state, action: PayloadAction<INewOrder>) {
            state.newOrder = action.payload
        },
        createNewOrderFail(state, action: PayloadAction<string>) {
            state.newOrderError = action.payload
        },
        updateNewOrderSuccess(state, action: PayloadAction<INewOrder>) {
            state.newOrder = action.payload
        },
        updateNewOrderFail(state, action: PayloadAction<string>) {
            state.newOrderError = action.payload
        },
        newOrderPaymentSuccess(state, action: PayloadAction<IPaymentData>) {
            state.newOrderPaymentData = action.payload
            localStorage.setItem('orderId', String(action.payload.orderId))
            localStorage.setItem('youkassaPaymentId', encodeToken(action.payload.youkassaPaymentId ? action.payload.youkassaPaymentId : ''))
            localStorage.setItem('oderPaymentId', String(action.payload.orderPaymentId))
        },
        newOrderPaymentFail(state, action: PayloadAction<string>) {
            state.newOrderError = action.payload
        },
        destroyNewOrderAfterSuccessfulPayment(state) {
            state.newOrder = null
            state.newOrderError = ''
            state.paymentError = ''
            localStorage.removeItem('orderId')
            localStorage.removeItem('youkassaPaymentId')
            localStorage.removeItem('oderPaymentId')
        }
    }
})

export default orderSlice.reducer