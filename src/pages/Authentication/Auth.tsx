import React from 'react';
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import {useAppDispatch} from "../../hooks/redux";
import {Route, Routes} from "react-router-dom";
import SingIn from "./SingIn";
import SignUp from "./SingUp";
import AdminFooter from "../../components/AdminFooter/AdminFooter";

const Auth = () => {
    const dispatch = useAppDispatch()
    //console.log(auth)
    return (
        <>
           <AdminHeader></AdminHeader>
            <Routes>
                <Route path={'sing-in'} element={<SingIn/>}/>
                <Route path={'sign-up'} element={<SignUp/>}/>
            </Routes>
            <AdminFooter/>
        </>
    );
};

export default Auth;
