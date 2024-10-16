import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../UI/Inputs/AdminInput";

interface IMainPageBorderColorProps extends IAdminComponentsProps {
    cardBorder: boolean;
    type: string;
    name: string;
    id: string;
    value: string | number;
    checked: boolean;
    required: boolean;
    readonly: boolean;
    inputClass: string
}

const MainPageBorderColor: React.FC<IMainPageBorderColorProps> = ({
                                                                      type,
                                                                      name,
                                                                      onChangeHandler,
                                                                      cardBorder,
                                                                      id,
                                                                      value,
                                                                      checked,
                                                                      inputClass,
                                                                      required,
                                                                      readonly
                                                                  }) => {
    return (
        <div className={styles.form__inputContainer} style={{display: cardBorder ? 'flex' : 'none'}}>
            <label htmlFor={id}>Цвет границы карточки товара/услуги</label>
            <AdminInput
                type={type}
                name={name}
                id={id}
                value={value}
                checked={checked}
                onChangeHandler={onChangeHandler}
                required={required}
                readonly={readonly}
                classname={inputClass}/>
        </div>
    );
};

export default MainPageBorderColor;
