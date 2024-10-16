import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../UI/Inputs/AdminInput";

interface IPageCardBorderProps extends IAdminComponentsProps {
    type: string;
    name: string;
    inputId: string;
    value: string | number;
    checked: boolean
    required: boolean
    readonly: boolean;
    label: string;
    inputClass: string;
    isBlockWithProds: boolean;
}

const PageCardBorder: React.FC<IPageCardBorderProps> = ({
                                                            type,
                                                            isBlockWithProds,
                                                            inputClass,
                                                            inputId,
                                                            value,
                                                            checked,
                                                            label,
                                                            name,
                                                            required,
                                                            readonly,
                                                            onChangeHandler
                                                        }) => {
    return (
        <div className={styles.form__inputContainer} style={{display: isBlockWithProds ? 'flex' : 'none'}}>
            <label htmlFor={inputId}>{label}</label>
            <AdminInput type={type}
                        value={value}
                        name={name}
                        id={inputId}
                        classname={inputClass}
                        checked={checked}
                        required={required}
                        readonly={readonly}
                        onChangeHandler={onChangeHandler}
            />
        </div>
    );
};

export default PageCardBorder;
