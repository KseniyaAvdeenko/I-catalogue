import React from 'react';
import styles from "../AdminMain.module.sass";

interface IHeaderNavLinksFontSizeProps{
    isLoading: boolean;
    navLinksFontSize: number|undefined;
    onChangeHandler: Function;
}

const HeaderNavLinksFontSize: React.FC<IHeaderNavLinksFontSizeProps> = ({isLoading, navLinksFontSize,onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="navLinksFontSize">Размер шрифта навигационных ссылок</label>
            {isLoading && 'Loading...'}
            <input type="number"
                   value={navLinksFontSize}
                   name={'navLinksFontSize'}
                   id={'navLinksFontSize'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderNavLinksFontSize;
