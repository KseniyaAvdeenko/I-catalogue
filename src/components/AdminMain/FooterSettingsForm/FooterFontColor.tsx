import React from 'react';
import styles from "../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";

interface IFooterFontColorProps extends IAdminComponentsProps{
    footerFontColor: string|undefined
}

const FooterFontColor: React.FC<IFooterFontColorProps> = ({
    isLoading, onChangeHandler, footerFontColor
                                                          }) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="fontColor">Цвет текста “подвала” сайта</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={footerFontColor??'#000'}
                   name={'fontColor'}
                   id={'fontColor'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default FooterFontColor;
