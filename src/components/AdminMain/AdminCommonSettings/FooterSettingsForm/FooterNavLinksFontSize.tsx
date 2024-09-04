import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";

interface IFooterNavLinksFontSizeProps extends IAdminComponentsProps {
    navLinksFontSize: number|undefined
}

const FooterNavLinksFontSize: React.FC<IFooterNavLinksFontSizeProps> = ({isLoading, navLinksFontSize, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="navLinksFontSize">Размер шрифта навигационных ссылок</label>
            {isLoading && 'Loading...'}
            <input type="number"
                   value={navLinksFontSize??16}
                   name={'navLinksFontSize'}
                   id={'navLinksFontSize'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default FooterNavLinksFontSize;
