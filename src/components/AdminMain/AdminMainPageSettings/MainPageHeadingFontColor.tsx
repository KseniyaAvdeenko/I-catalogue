import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../UI/Inputs/AdminInput";

interface IMainPageHeadingFontColorProps extends IAdminComponentsProps{
    headingFontColor: string|undefined
}

const MainPageHeadingFontColor: React.FC<IMainPageHeadingFontColorProps> = ({headingFontColor,isLoading, onChangeHandler}) => {
    return (
         <div className={styles.form__inputContainer}>
            <label htmlFor="headingFontColor">Цвет заголовка</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={'color'}
                name={'headingFontColor'}
                id={'headingFontColor'}
                value={headingFontColor ?? '#000'}
                checked={false}
                onChangeHandler={onChangeHandler}
                required={false}
                readonly={false}
                classname={''}
            />
        </div>
    );
};

export default MainPageHeadingFontColor;
