import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProdAttrsInitial} from "../../interface/IInitialStates";
import {IProdAttrs} from "../../interface/IProduct";


const initialState: IProdAttrsInitial = {
    isLoading: false,
    prodAttrs: null,
    prodAttr: null,
}

export const prodAttributesSlice = createSlice({
    name: 'productAttributes',
    initialState,
    reducers: {
        prodAttrsFetching(state){
            state.isLoading =true;
        },
        loadProdAttrsSuccess(state, action: PayloadAction<IProdAttrs[]>){
            state.isLoading = false;
            state.prodAttrs = action.payload
        },
        loadProdAttrsFail(state){
            state.isLoading = false;
        },
        createProdAttrSuccess(state, action: PayloadAction<IProdAttrs>){
            state.prodAttr = action.payload;
        },
        updateProdAttrSuccess(state, action: PayloadAction<IProdAttrs>){
            state.prodAttr = action.payload;
        },
        deleteProdAttrSuccess(state){
            state.prodAttr = null;
        },
    }
})

export default prodAttributesSlice.reducer;