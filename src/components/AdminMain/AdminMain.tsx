import React from 'react';
import styles from './AdminMain.module.sass';
import CommonSettingsForm from "./CommonSettingsForm/CommonSettingsForm";
import HeaderSettingsForm from "./HeaderSettingsForm/HeaderSettingsForm";

const AdminMain = () => {
    return (
        <main className={styles.AdminMain}>
            <CommonSettingsForm/>
            <HeaderSettingsForm/>
        </main>
    );
};

export default AdminMain;
