import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";

interface IButtonBorderProps extends IAdminComponentsProps{
    buttonBorders: boolean
}
const ButtonBorders: React.FC<IButtonBorderProps> = ({isLoading, buttonBorders, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="buttonBorders">Границы кнопки</label>
            {isLoading && 'Loading...'}
            <input type="checkbox"
                   checked={buttonBorders}
                   name={'buttonBorders'}
                   id={'buttonBorders'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default ButtonBorders;
