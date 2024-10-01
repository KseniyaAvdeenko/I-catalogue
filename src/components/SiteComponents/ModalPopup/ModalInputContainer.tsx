import React from 'react';
import styles from "./Modal.module.sass";
import {IModalLabels} from "../../../interface/IModalForm";

interface IModalInputContainerProps {
    label: IModalLabels;
    formData: { [key: string]: string | number; };
    changeHandler: Function
}

const ModalInputContainer: React.FC<IModalInputContainerProps> = ({label, formData, changeHandler}) => {
    return (
        <div className={styles.modal__inputItem}>
            <label htmlFor={label.inputIdName}>{label.inputLabel}</label>
            <input type={label.inputType}
                   name={label.inputIdName}
                   id={label.inputIdName}
                   required={true}
                   min={1}
                   value={formData[label.inputIdName]}
                   onChange={e => changeHandler(e)}
            />
        </div>
    );
};

export default ModalInputContainer;
