import React from 'react';
import styles from './AdminMain.module.sass';
import CommonSettingsForm from "./CommonSettingsForm/CommonSettingsForm";
import HeaderSettingsForm from "./HeaderSettingsForm/HeaderSettingsForm";
import FooterSettingsForm from "./FooterSettingsForm/FooterSettingsForm";
import ButtonSettingsForm from "./ButtonSettingsForm/ButtonSettingsForm";

const AdminMain = React.forwardRef<HTMLElement, {}>((props, ref) => {
    return (
        <main ref={ref} className={styles.AdminMain}>
            <CommonSettingsForm/>
            <HeaderSettingsForm/>
            <FooterSettingsForm/>
            <ButtonSettingsForm/>
        </main>
    );
})

export default AdminMain;
