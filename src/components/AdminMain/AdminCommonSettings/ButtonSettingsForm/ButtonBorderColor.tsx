import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";
import Loader from "../../../UI/Loader/Loader";

interface IButtonBorderColorProps extends IAdminComponentsProps{
    buttonBorderColor: string
    buttonBorders: boolean
}
const ButtonBorderColor: React.FC<IButtonBorderColorProps> = ({ buttonBorderColor, onChangeHandler, buttonBorders}) => {
    return (
        <div className={styles.form__inputContainer} style={{display: buttonBorders?'flex':'none'}}>
            <label htmlFor="buttonBorderColor">Цвет границы кнопки</label>
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
