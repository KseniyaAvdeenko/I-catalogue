import React from 'react';
import styles from './AdminMain.module.sass';
import CommonSettingsForm from "./CommonSettingsForm/CommonSettingsForm";
import HeaderSettingsForm from "./HeaderSettingsForm/HeaderSettingsForm";
import FooterSettingsForm from "./FooterSettingsForm/FooterSettingsForm";

const AdminMain = () => {
    return (
        <main className={styles.AdminMain}>
            <CommonSettingsForm/>
            <HeaderSettingsForm/>
            <FooterSettingsForm/>
        </main>
    );
};

export default AdminMain;
