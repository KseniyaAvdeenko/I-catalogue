import React from 'react';
import styles from "../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";

interface IFooterTopBorderProps extends IAdminComponentsProps{
    footerBorderTop: boolean
}

const FooterTopBorder: React.FC<IFooterTopBorderProps> = ({isLoading, footerBorderTop,onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="footerBorderTop">Верхняя граница “подвала” сайта</label>
            {isLoading && 'Loading...'}
            <input type="checkbox"
                   checked={footerBorderTop}
                   name={'footerBorderTop'}
                   id={'footerBorderTop'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default FooterTopBorder;
