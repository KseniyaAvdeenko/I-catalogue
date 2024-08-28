import React from 'react';
import styles from "../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";

interface IHeaderFontColorProps extends IAdminComponentsProps{
    fontColor: string|undefined;
}
const HeaderFontColor: React.FC<IHeaderFontColorProps> = ({isLoading, fontColor, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="headerFontColor">Цвет текста “шапки” сайта</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={fontColor??"#000"}
                   name={'fontColor'}
                   id={'headerFontColor'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderFontColor;
