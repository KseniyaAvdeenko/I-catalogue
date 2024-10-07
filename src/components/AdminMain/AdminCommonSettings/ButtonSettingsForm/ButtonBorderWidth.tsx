import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";
import Loader from "../../../UI/Loader/Loader";

interface IButtonBorderWidthProps extends IAdminComponentsProps {
    buttonBorderWidth: number
    buttonBorders: boolean
}

const ButtonBorderWidth: React.FC<IButtonBorderWidthProps> = ({
                                                                  buttonBorderWidth,
                                                                  onChangeHandler,
                                                                  buttonBorders
                                                              }) => {
    return (
        <div className={styles.form__inputContainer} style={{display: buttonBorders ? 'flex': 'none'}}>
            <label htmlFor="buttonBorderWidth">Ширина границы кнопки</label>
            <input type="number"
                   value={buttonBorderWidth??0}
                   name={'buttonBorderWidth'}
                   id={'buttonBorderWidth'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default ButtonBorderWidth;
