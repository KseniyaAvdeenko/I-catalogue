import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProdPageInitial} from "../../interface/IInitialStates";
import {IProductPageSettings} from "../../interface/IProduct";

const initialState: IProdPageInitial = {
    isLoading: false,
    prodPageSettings: null,
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
        loadProdPageSettingsFail(state){
            state.isLoading = false;
        },
        updateProdPageSettingsSuccess(state, action: PayloadAction<IProductPageSettings>){
            state.prodPageSettings = action.payload;
        },
    }
})

export default prodPageSettingsSlice.reducer