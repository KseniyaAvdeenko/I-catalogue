import React from 'react';
import styles from "../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";

interface IHeaderContactsFontColorProps extends IAdminComponentsProps{
    contactsFontSize: number | undefined
}

const HeaderContactsFontColor: React.FC<IHeaderContactsFontColorProps> = ({
                                                                              isLoading,
                                                                              contactsFontSize,
                                                                              onChangeHandler
                                                                          }) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="contactsFontSize">Размер шрифта контактов</label>
            {isLoading && 'Loading...'}
            <input type="number"
                   value={contactsFontSize??'#000'}
                   name={'contactsFontSize'}
                   id={'contactsFontSize'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderContactsFontColor;
