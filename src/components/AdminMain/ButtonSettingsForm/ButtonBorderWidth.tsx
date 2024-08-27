import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";

interface IButtonBorderWidthProps extends IAdminComponentsProps {
    buttonBorderWidth: number | undefined
    buttonBorders: boolean
}

const ButtonBorderWidth: React.FC<IButtonBorderWidthProps> = ({
                                                                  isLoading,
                                                                  buttonBorderWidth,
                                                                  onChangeHandler,
                                                                  buttonBorders
                                                              }) => {
    return (
        <div className={styles.form__inputContainer} style={{display: buttonBorders ? 'flex': 'none'}}>
            <label htmlFor="buttonBorderWidth">Ширина границы кнопки</label>
            {isLoading && 'Loading...'}
            <input type="number"
                   value={buttonBorderWidth}
                   name={'buttonBorderWidth'}
                   id={'buttonBorderWidth'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default ButtonBorderWidth;
