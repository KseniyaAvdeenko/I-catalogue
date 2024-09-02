import React, {useRef} from 'react';
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminFooter from "../../components/AdminFooter/AdminFooter";
import styles from './AdminPage.module.sass'
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminCommonSettings from "../../components/AdminMain/AdminCommonSettings/AdminCommonSettings";
import {Route, Routes} from "react-router-dom";
import AdminNavbar from "../../components/AdminMain/AdminNavbar/AdminNavbar";

const AdminPage = () => {
    const commonSettingsRef = useRef<HTMLElement>(null);
    const navbarContentRef = useRef<HTMLElement>(null);

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
                        <Route path={'common_settings/'} element={<AdminCommonSettings ref={commonSettingsRef}/>}/>
                        <Route path={'navbar/'} element={<AdminNavbar ref={navbarContentRef}/>}/>
                    </Routes>
                </section>
                : <main className={styles.AdminPage_notAuth}>Вы не авторизованы</main>
            }
            <AdminFooter/>
        </>
    );
};

export default AdminPage;
