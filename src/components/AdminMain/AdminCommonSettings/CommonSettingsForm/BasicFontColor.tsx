import React from 'react';
import styles from "../../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import AdminInput from "../../../../UI/Inputs/AdminInput";

interface IBasicFontColorProps extends IAdminComponentsProps{
    basicFontColor: string|undefined;
}

const BasicFontColor: React.FC<IBasicFontColorProps> = ({isLoading, basicFontColor, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="basicFontColor">Основной цвет шрифта</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={"color"}
                name={'basicFontColor'}
                id={'basicFontColor'}
                value={basicFontColor?? '#000'}
                checked={false}
                onChangeHandler={onChangeHandler}
                required={false}
                readonly={false}
                classname={''}
            />
        </div>
    );
};

export default BasicFontColor;
