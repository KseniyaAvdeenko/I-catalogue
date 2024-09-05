import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../../UI/Inputs/AdminInput";

interface IPageHeadingFontColorProps extends IAdminComponentsProps {
    headingFontColor: string
}

const PageHeadingFontColor: React.FC<IPageHeadingFontColorProps> = ({headingFontColor, isLoading, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="headingFontColor">Цвет заголовка</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={'color'}
                name={'headingFontColor'}
                id={'headingFontColor'}
                value={headingFontColor}
                checked={false}
                onChangeHandler={onChangeHandler}
                required={false}
                readonly={false}
                classname={''}
            />
        </div>
    );
};

export default PageHeadingFontColor;
