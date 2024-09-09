import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProdInitial} from "../../interface/IInitialStates";
import {IProd, IProdAttrs} from "../../interface/IProduct";

const initialState: IProdInitial ={
    isLoading: false,
    error: '',
    products: null,
    product: null
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        prodsFetching(state){
            state.isLoading =true;
        },
        loadProductsSuccess(state, action: PayloadAction<IProd[]>){
            state.isLoading = false;
            state.products = action.payload
        },
        loadProductsFail(state, action: PayloadAction<string>){
            state.error =action.payload;
            state.products = null;
        },
        prodFetching(state){
            state.isLoading = true;
        },
        loadProductSuccess(state, action: PayloadAction<IProd>){
            state.product = action.payload;
            state.isLoading = false;
        },
        loadProductFail(state, action: PayloadAction<string>){
            state.error = action.payload;
            state.product = null;
            state.isLoading = false;
        },
        createProductSuccess(state, action: PayloadAction<IProd>){
            state.product = action.payload;
        },
        createProductFail(state, action: PayloadAction<string>){
            state.error = action.payload;
        },
        updateProductSuccess(state, action: PayloadAction<IProd>){
            state.product = action.payload;
        },
        updateProductFail(state, action: PayloadAction<string>){
            state.error = action.payload;
        },
        deleteProductSuccess(state){
            state.product = null;
        },
        deleteProductFail(state, action: PayloadAction<string>){
            state.error = action.payload
        }
    }
})

export default productSlice.reducer;