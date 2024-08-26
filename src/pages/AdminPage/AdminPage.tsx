import React from 'react';
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminFooter from "../../components/AdminFooter/AdminFooter";
import {useAppSelector} from "../../hooks/redux";

const AdminPage = () => {
    const auth = useAppSelector(state => state.authReducer);
    console.log(auth.isAuth)
    return (
        <div>
            <AdminHeader></AdminHeader>
            <main></main>
            <AdminFooter/>
        </div>
    );
};

export default AdminPage;
