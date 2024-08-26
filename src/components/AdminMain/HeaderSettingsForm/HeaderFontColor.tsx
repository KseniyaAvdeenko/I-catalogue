import React from 'react';
import styles from "../AdminMain.module.sass";
interface IHeaderFontColorProps{
    isLoading: boolean;
    fontColor: string|undefined;
    onChangeHandler: Function;
}
const HeaderFontColor: React.FC<IHeaderFontColorProps> = ({isLoading, fontColor, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="headerFontColor">Цвет текста “шапки” сайта</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={fontColor}
                   name={'fontColor'}
                   id={'headerFontColor'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderFontColor;
