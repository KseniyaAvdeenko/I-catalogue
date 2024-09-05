import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";

interface IButtonTextFontSizeProps extends IAdminComponentsProps{
    buttonTextFontSize: number|undefined
}
const ButtonTextFontSize: React.FC<IButtonTextFontSizeProps> = ({isLoading, buttonTextFontSize, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="buttonTextFontSize">Размер шрифта кнопки</label>
            {isLoading && 'Loading...'}
            <input type="number"
                   value={buttonTextFontSize??20}
                   name={'buttonTextFontSize'}
                   id={'buttonTextFontSize'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default ButtonTextFontSize;
