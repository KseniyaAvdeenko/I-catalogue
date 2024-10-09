import React from 'react';
import styles from '../AdminMain.module.sass';
import CommonSettingsForm from "./CommonSettingsForm/CommonSettingsForm";
import HeaderSettingsForm from "./HeaderSettingsForm/HeaderSettingsForm";
import FooterSettingsForm from "./FooterSettingsForm/FooterSettingsForm";
import ButtonSettingsForm from "./ButtonSettingsForm/ButtonSettingsForm";

const AdminCommonSettings = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div ref={ref} className={styles.AdminMain}>
            <CommonSettingsForm/>
            <HeaderSettingsForm/>
            <FooterSettingsForm/>
            <ButtonSettingsForm/>
        </div>
    );
})

export default AdminCommonSettings;
