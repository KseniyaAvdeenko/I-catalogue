import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProdAttrsInitial} from "../../interface/IInitialStates";
import {IProdAttrs} from "../../interface/IProduct";


const initialState: IProdAttrsInitial = {
    isLoading: false,
    error: '',
    prodAttrs: null,
    prodAttr: null,
    prodAttrError: ''
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
        loadProdAttrsFail(state, action: PayloadAction<string>){
            state.error = action.payload;
            state.isLoading = false;
        },
        createProdAttrSuccess(state, action: PayloadAction<IProdAttrs>){
            state.prodAttr = action.payload;
        },
        createProdAttrFail(state, action: PayloadAction<string>){
            state.prodAttrError = action.payload;
        },
        updateProdAttrSuccess(state, action: PayloadAction<IProdAttrs>){
            state.prodAttr = action.payload;
        },
        updateProdAttrFail(state, action: PayloadAction<string>){
            state.prodAttrError = action.payload;
        },
        deleteProdAttrSuccess(state){
            state.prodAttr = null;
        },
        deleteProdAttrFail(state, action: PayloadAction<string>){
            state.prodAttrError = action.payload
        }
    }
})

export default prodAttributesSlice.reducer;