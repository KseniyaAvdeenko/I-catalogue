import React from 'react';
import styles from "../../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";

interface IHeaderBottomBorderColorProps extends IAdminComponentsProps{
    headerBottomBorderColor: string;
    headerBorderBottom: boolean
}

const HeaderBottomBorderColor: React.FC<IHeaderBottomBorderColorProps> = ({
                                                                               headerBottomBorderColor,
                                                                              onChangeHandler, headerBorderBottom
                                                                          }) => {
    return (
        <div className={styles.form__inputContainer} style={{display: headerBorderBottom?'flex':'none'}}>
            <label htmlFor="headerBottomBorderColor">Цвет нижней границы “шапки” сайта </label>
            <input type="color"
                   value={headerBottomBorderColor}
                   name={'headerBottomBorderColor'}
                   id={'headerBottomBorderColor'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderBottomBorderColor;
