import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IOrderInitial, IPaymentData} from "../../interface/IInitialStates";
import {INewOrder, IOrder} from "../../interface/IOrder";
import {encodeToken} from "../../hooks/encodeDecodeTokens";


const initialState: IOrderInitial = {
    isLoading: false,
    orders: null,
    newOrder: null,
    paymentPaid: false,
    createdOrderSuccess: false,
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
        loadOrdersFail(state) {
            state.isLoading = false;
        },
        createNewOrderSuccess(state, action: PayloadAction<INewOrder>) {
            state.newOrder = action.payload
            state.createdOrderSuccess = true
        },
        createNewOrderFail(state) {
            state.createdOrderSuccess = false;
        },
        updateNewOrderSuccess(state, action: PayloadAction<INewOrder>) {
            state.newOrder = action.payload
        },
        newOrderPaymentSuccess(state, action: PayloadAction<IPaymentData>) {
            state.newOrderPaymentData = action.payload
            localStorage.setItem('orderId', String(action.payload.orderId))
            localStorage.setItem('youkassaPaymentId', encodeToken(action.payload.youkassaPaymentId ? action.payload.youkassaPaymentId : ''))
            localStorage.setItem('oderPaymentId', String(action.payload.orderPaymentId))
        },

        destroyNewOrderAfterSuccessfulPayment(state) {
            state.newOrder = null;
            state.createdOrderSuccess = false;
            state.paymentPaid = false;
            localStorage.removeItem('orderId')
            localStorage.removeItem('youkassaPaymentId')
            localStorage.removeItem('oderPaymentId')
        },
        paymentPaidSuccess(state){
            state.paymentPaid = true
        }
    }
})

export default orderSlice.reducer