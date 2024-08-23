import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from './reducers/authSlice';
import userReducer from './reducers/userSlice';

export const rootReducer = combineReducers({
    authReducer,
    userReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];