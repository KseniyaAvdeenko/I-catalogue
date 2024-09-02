import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
interface IButtonBackgroundProps extends IAdminComponentsProps{
    buttonBackground: string|undefined
}
const ButtonBackground: React.FC<IButtonBackgroundProps> = ({isLoading, buttonBackground, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="buttonBackground">Цвет кнопки</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={buttonBackground??'#bbb'}
                   name={'buttonBackground'}
                   id={'buttonBackground'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default ButtonBackground;
