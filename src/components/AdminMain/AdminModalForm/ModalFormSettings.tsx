import React from 'react';
import styles from "../AdminMain.module.sass";
import FormSettings from "./FormSettings";
import ModalFormInputs from "./ModalFormInputs";

const ModalFormSettings = React.forwardRef<HTMLDivElement, {}>(({}, ref) => {
    return (
        <div ref={ref} className={styles.AdminMain}>
            <FormSettings/>
            <ModalFormInputs/>
        </div>
    );
});

export default ModalFormSettings;
