import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";

interface IFooterNavLinksFontColorHoverProps extends IAdminComponentsProps {
    footerNavLinksFontColorHover: string | undefined
}

const FooterNavLinksFontColorHover: React.FC<IFooterNavLinksFontColorHoverProps> = ({
                                                                                        isLoading,
                                                                                        footerNavLinksFontColorHover,
                                                                                        onChangeHandler
                                                                                    }) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="navLinksFontColorHover">Цвет шрифта навигационных ссылок при наведении курсором</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={footerNavLinksFontColorHover}
                   name={'navLinksFontColorHover'}
                   id={'navLinksFontColorHover'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default FooterNavLinksFontColorHover;
