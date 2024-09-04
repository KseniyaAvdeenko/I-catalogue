import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";

interface IButtonTextColorProps extends IAdminComponentsProps{
    buttonTextColor: string|undefined
}
const ButtonTextColor:React.FC<IButtonTextColorProps> = ({isLoading, buttonTextColor, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="buttonTextColor">Цвет текста кнопки</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={buttonTextColor??'#000'}
                   name={'buttonTextColor'}
                   id={'buttonTextColor'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default ButtonTextColor;
