import React from 'react';
import styles from "../AdminMain.module.sass";

interface IHeaderNavLinksColorHoverProps {
    isLoading: boolean;
    onChangeHandler: Function;
    navLinksFontColorHover: string | undefined
}

const HeaderNavLinksColorHover: React.FC<IHeaderNavLinksColorHoverProps> = ({isLoading, onChangeHandler,
                                                                                navLinksFontColorHover
                                                                            }) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="navLinksFontColorHover">Цвет шрифта навигационных ссылок при наведении курсором</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={navLinksFontColorHover}
                   name={'navLinksFontColorHover'}
                   id={'navLinksFontColorHover'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderNavLinksColorHover;
