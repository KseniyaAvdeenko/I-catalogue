import React from 'react';
import styles from "../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";

interface IHeaderNavLinksFontSizeProps extends IAdminComponentsProps{
    navLinksFontSize: number|undefined;
}

const HeaderNavLinksFontSize: React.FC<IHeaderNavLinksFontSizeProps> = ({isLoading, navLinksFontSize,onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="navLinksFontSize">Размер шрифта навигационных ссылок</label>
            {isLoading && 'Loading...'}
            <input type="number"
                   value={navLinksFontSize??20}
                   name={'navLinksFontSize'}
                   id={'navLinksFontSize'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderNavLinksFontSize;
