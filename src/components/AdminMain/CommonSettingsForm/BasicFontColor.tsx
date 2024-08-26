import React from 'react';
import styles from "../AdminMain.module.sass";

interface IBasicFontColorProps {
    basicFontColor: string|undefined;
    isLoading: boolean;
    onChangeHandler: Function
}

const BasicFontColor: React.FC<IBasicFontColorProps> = ({isLoading, basicFontColor, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="basicFontColor">Основной цвет шрифта</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={basicFontColor}
                   name={'basicFontColor'}
                   id={'basicFontColor'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default BasicFontColor;
