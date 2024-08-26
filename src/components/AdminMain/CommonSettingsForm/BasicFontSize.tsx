import React from 'react';
import styles from "../AdminMain.module.sass";

interface IBasicFontSizeProps {
    isLoading: boolean;
    basicFontSize: number | undefined
    onChangeHandler: Function
}

const BasicFontSize: React.FC<IBasicFontSizeProps> = ({isLoading, basicFontSize, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="basicFontSize">Основной размер шрифта</label>
            {isLoading && 'Loading...'}
            <input type="number"
                   value={basicFontSize}
                   name={'basicFontSize'}
                   id={'basicFontSize'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default BasicFontSize;
