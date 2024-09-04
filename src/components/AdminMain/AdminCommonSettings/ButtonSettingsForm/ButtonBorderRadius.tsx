import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";
import AdminInput from "../../../../UI/Inputs/AdminInput";

interface IButtonBorderRadiusProps extends IAdminComponentsProps{
    buttonBorderRadius: number|undefined
}

const ButtonBorderRadius: React.FC<IButtonBorderRadiusProps> = ({isLoading, buttonBorderRadius, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="buttonBorderRadius">Скругление углов кнопки</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={"number"}
                name={'buttonBorderRadius'}
                id={'buttonBorderRadius'}
                value={buttonBorderRadius ?? 0}
                checked={false}
                onChangeHandler={onChangeHandler}
                required={false}
                readonly={false}
                classname={''}
            />
        </div>
    );
};

export default ButtonBorderRadius;
