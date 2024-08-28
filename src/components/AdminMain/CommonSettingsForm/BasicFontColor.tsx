import React from 'react';
import styles from "../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";

interface IBasicFontColorProps extends IAdminComponentsProps{
    basicFontColor: string|undefined;
}

const BasicFontColor: React.FC<IBasicFontColorProps> = ({isLoading, basicFontColor, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="basicFontColor">Основной цвет шрифта</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={basicFontColor?? '#000'}
                   name={'basicFontColor'}
                   id={'basicFontColor'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default BasicFontColor;
