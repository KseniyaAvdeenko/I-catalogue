import React from 'react';
import styles from "../../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";

interface IFooterTopBorderColorProps extends IAdminComponentsProps {
    borderTopColor: string | undefined;
    footerTopBorder: boolean;
}

const FooterTopBorderColor: React.FC<IFooterTopBorderColorProps> = ({
                                                                        isLoading,
                                                                        onChangeHandler,
                                                                        footerTopBorder,
                                                                        borderTopColor
                                                                    }) => {
    return (
        <div className={styles.form__inputContainer} style={{display: footerTopBorder?'flex':'none'}}>
            <label htmlFor="borderTopColor">Цвет верхней границы “подвала” сайта</label>
            {isLoading && 'Loading...'}
            <input type="color"
                   value={borderTopColor??'#bbb'}
                   name={'borderTopColor'}
                   id={'borderTopColor'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default FooterTopBorderColor;
