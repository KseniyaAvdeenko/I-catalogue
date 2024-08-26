import React from 'react';
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminFooter from "../../components/AdminFooter/AdminFooter";
import {useAppSelector} from "../../hooks/redux";
import styles from './AdminPage.module.sass'
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminMain from "../../components/AdminMain/AdminMain";

const AdminPage = () => {
    const auth = useAppSelector(state => state.authReducer);
    console.log(auth.isAuth)
    return (
        <>
            <AdminHeader></AdminHeader>
            {auth.isAuth
                ? <section className={styles.AdminPage}>
                    <Sidebar/>
                    <AdminMain/>
                </section>
                : <main className={styles.AdminPage_notAuth}>Вы не авторизованы</main>
            }
            <AdminFooter/>
        </>
    );
};

export default AdminPage;
