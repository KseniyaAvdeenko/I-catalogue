import React from 'react';
import styles from "../AdminMain.module.sass";
import FormSettings from "./FormSettings";
import ModalFormInputs from "./ModalFormInputs";

const ModalFormSettings = React.forwardRef<HTMLElement, {}>(({}, ref) => {
    return (
        <main ref={ref} className={styles.AdminMain}>
            <FormSettings/>
            <ModalFormInputs/>
        </main>
    );
});

export default ModalFormSettings;
