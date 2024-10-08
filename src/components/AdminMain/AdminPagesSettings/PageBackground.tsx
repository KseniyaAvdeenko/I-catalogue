import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../UI/Inputs/AdminInput";

interface IPageBackgroundProps extends IAdminComponentsProps{
    pageName: string|undefined
    background: string|undefined
}

const PageBackground:React.FC<IPageBackgroundProps> = ({background, pageName,  onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="background">Фон страницы "{pageName??''}"</label>
            <AdminInput type={"color"}
                        value={background ?? '#fff'}
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

export default PageBackground;
