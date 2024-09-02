import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";

interface IButtonBorderColorProps extends IAdminComponentsProps{
    buttonBorderColor: string|undefined
    buttonBorders: boolean
}
const ButtonBorderColor: React.FC<IButtonBorderColorProps> = ({isLoading, buttonBorderColor, onChangeHandler, buttonBorders}) => {
    return (
        <div className={styles.form__inputContainer} style={{display: buttonBorders?'flex':'none'}}>
            <label htmlFor="buttonBorderColor">Цвет границы кнопки</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={buttonBorderColor??'#bbb'}
                   name={'buttonBorderColor'}
                   id={'buttonBorderColor'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default ButtonBorderColor;
