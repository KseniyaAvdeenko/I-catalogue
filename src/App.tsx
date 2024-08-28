import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import SingIn from "./pages/Authentication/SingIn";
import SignUp from "./pages/Authentication/SingUp";
import AdminPage from "./pages/AdminPage/AdminPage";
import {useAppSelector} from "./hooks/redux";

function App() {
    //const auth = useAppSelector(state => state.authReducer)

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'sign_in'} element={<SingIn/>}/>
                <Route path={'sign_up'} element={<SignUp/>}/>
                <Route path={'admin_page/*'} element={<AdminPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
