import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../UI/Inputs/AdminInput";

interface IProdCardBackgroundProps extends IAdminComponentsProps{
    prodCardBg: string|undefined
}

const ProdCardBackground: React.FC<IProdCardBackgroundProps> = ({isLoading, prodCardBg, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="prodCardBg">Фон карточки товара\услуги</label>
            {isLoading && 'Loading...'}
            <AdminInput type={"color"}
                        value={prodCardBg ?? '#eeeeee'}
                        name={'prodCardBg'}
                        id={'prodCardBg'}
                        classname={''}
                        checked={false}
                        required={false}
                        readonly={false}
                        onChangeHandler={onChangeHandler}
            />
        </div>
    );
};

export default ProdCardBackground;
