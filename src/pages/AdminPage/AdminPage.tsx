import React, {useRef} from 'react';
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminFooter from "../../components/AdminFooter/AdminFooter";
import {useAppSelector} from "../../hooks/redux";
import styles from './AdminPage.module.sass'
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminMain from "../../components/AdminMain/AdminMain";
import {Route, Routes} from "react-router-dom";

const AdminPage = () => {
    const commonSettingsRef = useRef<HTMLElement>(null)
    const auth = useAppSelector(state => state.authReducer);
    //console.log(auth.isAuth)
    const scrollToBlock = (sectionId: string) => {
        if (commonSettingsRef.current && commonSettingsRef.current.childNodes) {
            commonSettingsRef.current.childNodes.forEach(child => {
                if (child instanceof HTMLElement && child.id && child.id===sectionId) {
                    child.scrollIntoView({behavior: "smooth"})
                }
            })
        }
    }

    return (
        <>
            <AdminHeader></AdminHeader>
            {localStorage.access
                ? <section className={styles.AdminPage}>
                    <Sidebar scrollToBlock={scrollToBlock}/>
                    <Routes>
                        <Route path={'common_settings/'} element={<AdminMain ref={commonSettingsRef}/>}/>
                    </Routes>
                </section>
                : <main className={styles.AdminPage_notAuth}>Вы не авторизованы</main>
            }
            <AdminFooter/>
        </>
    );
};

export default AdminPage;
