import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";

interface IFooterContactsFontSizeProps extends IAdminComponentsProps {
    footerContactsFontSize: number | undefined
}

const FooterContactsFontSize: React.FC<IFooterContactsFontSizeProps> = ({
                                                                            isLoading,
                                                                            footerContactsFontSize,
                                                                            onChangeHandler
                                                                        }) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="contactsFontSize">Размер шрифта контактов</label>
            {isLoading && 'Loading...'}
            <input type="number"
                   value={footerContactsFontSize??16}
                   name={'contactsFontSize'}
                   id={'contactsFontSize'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default FooterContactsFontSize;
