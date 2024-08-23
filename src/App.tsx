import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useAppSelector} from "./hooks/redux";
import Main from "./pages/Main";
import SingIn from "./pages/Authentication/SingIn";
import SignUp from "./pages/Authentication/SingUp";
import AdminPage from "./pages/AdminPage";


function App() {
    const auth = useAppSelector(state => state.authReducer)
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'sign_in'} element={<SingIn/>}/>
                <Route path={'sign_up'} element={<SignUp/>}/>
                <Route path={'admin_page'} element={<AdminPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
