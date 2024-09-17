import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProdPageInitial} from "../../interface/IInitialStates";
import {IProductPageSettings} from "../../interface/IProduct";

const initialState: IProdPageInitial = {
    isLoading: false,
    error: '',
    prodPageSettings: null
}

export const prodPageSettingsSlice = createSlice({
    name: 'product page settings',
    initialState,
    reducers: {
        prodPageSettingsFetching(state){
            state.isLoading = true;
        },
        loadProdPageSettingsSuccess(state, action: PayloadAction<IProductPageSettings>){
            state.isLoading = false;
            state.prodPageSettings = action.payload;
        },
        loadProdPageSettingsFail(state, action: PayloadAction<string>){
            state.error = action.payload;
            state.isLoading = false;
        },
        updateProdPageSettingsSuccess(state, action: PayloadAction<IProductPageSettings>){
            state.prodPageSettings = action.payload;
        },
        updateProdPageSettingsFail(state, action: PayloadAction<string>){
            state.error = action.payload
        }
    }
})

export default prodPageSettingsSlice.reducer