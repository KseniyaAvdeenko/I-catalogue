import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../../UI/Inputs/AdminInput";

interface IPageHeadingFontSizeProps extends IAdminComponentsProps{
    headingFontSize: number
}

const PageHeadingFontSize:React.FC<IPageHeadingFontSizeProps> = ({headingFontSize, isLoading, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="headingFontSize">Размер шрифта заголовка</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={'number'}
                name={'headingFontSize'}
                id={'headingFontSize'}
                value={headingFontSize}
                checked={false}
                onChangeHandler={onChangeHandler}
                required={false}
                readonly={false}
                classname={''}
            />
        </div>
    );
};

export default PageHeadingFontSize;
