import React from 'react';
import styles from "../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";

interface IFooterBackgroundProps extends IAdminComponentsProps {
    footerBg: string|undefined
}

const FooterBackground:React.FC<IFooterBackgroundProps> = ({isLoading, footerBg, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="footerBg">Цвет фона</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={footerBg}
                   name={'background'}
                   id={'footerBg'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default FooterBackground;
