import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../UI/Inputs/AdminInput";

interface IMainPageBackgroundProps extends IAdminComponentsProps {
    mainPageBg: string | undefined
}

const MainPageBackground: React.FC<IMainPageBackgroundProps> = ({mainPageBg, isLoading, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="background">Фон главной страницы</label>
            {isLoading && 'Loading...'}
            <AdminInput type={"color"}
                        value={mainPageBg ?? '#fff'}
                        name={'background'}
                        id={'background'}
                        classname={''}
                        checked={false}
                        required={false}
                        readonly={false}
                        onChangeHandler={onChangeHandler}
            />
        </div>
    );
};

export default MainPageBackground;
