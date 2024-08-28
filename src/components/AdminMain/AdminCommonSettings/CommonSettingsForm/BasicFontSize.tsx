import React from 'react';
import styles from "../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";

interface IBasicFontSizeProps extends IAdminComponentsProps{
    basicFontSize: number | undefined
}

const BasicFontSize: React.FC<IBasicFontSizeProps> = ({isLoading, basicFontSize, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="basicFontSize">Основной размер шрифта</label>
            {isLoading && 'Loading...'}
            <input type="number"
                   value={basicFontSize ?? 16}
                   name={'basicFontSize'}
                   id={'basicFontSize'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default BasicFontSize;
