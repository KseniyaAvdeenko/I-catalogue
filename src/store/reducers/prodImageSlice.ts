import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProdImagesInitial} from "../../interface/IInitialStates";
import {IImage} from "../../interface/IProduct";
const initialState: IProdImagesInitial= {
    isLoading: false,
    images: null,
    image: null
}
export const prodImageSlice = createSlice({
    name: 'prodImages',
    initialState,
    reducers: {
        imagesFetching(state){
            state.isLoading = true;
        },
        loadImagesSuccess(state, action: PayloadAction<IImage[]>){
            state.isLoading = false;
            state.images = action.payload
        },
        loadImagesFail(state){
            state.isLoading = false;
        },
        createImageSuccess(state, action: PayloadAction<IImage>){
            state.image = action.payload
        },
        updateImageSuccess(state, action: PayloadAction<IImage>){
            state.isLoading = false;
            state.image = action.payload
        },

        deleteImageSuccess(state){
            state.image = null
        },
    }
})

export default prodImageSlice.reducer