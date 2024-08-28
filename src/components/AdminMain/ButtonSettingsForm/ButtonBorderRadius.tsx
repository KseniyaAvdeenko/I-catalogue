import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";

interface IButtonBorderRadiusProps extends IAdminComponentsProps{
    buttonBorderRadius: number|undefined
}

const ButtonBorderRadius: React.FC<IButtonBorderRadiusProps> = ({isLoading, buttonBorderRadius, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="buttonBorderRadius">Скругление углов кнопки</label>
            {isLoading && 'Loading...'}
            <input type="number"
                   value={buttonBorderRadius??0}
                   name={'buttonBorderRadius'}
                   id={'buttonBorderRadius'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default ButtonBorderRadius;
