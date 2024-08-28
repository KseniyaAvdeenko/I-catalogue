import React from 'react';
import styles from "../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";

interface IHeaderNavLinksColorHoverProps extends IAdminComponentsProps{
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
                   value={navLinksFontColorHover??'darkred'}
                   name={'navLinksFontColorHover'}
                   id={'navLinksFontColorHover'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderNavLinksColorHover;
