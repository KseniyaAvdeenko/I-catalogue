import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../../UI/Inputs/AdminInput";

interface IMainPageHeadingFontSizeProps extends IAdminComponentsProps {
    headingFontSize: number | undefined
}

const MainPageHeadingFontSize: React.FC<IMainPageHeadingFontSizeProps> = ({
                                                                              headingFontSize,
                                                                              isLoading,
                                                                              onChangeHandler
                                                                          }) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="headingFontSize">Размер шрифта заголовка</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={'number'}
                name={'headingFontSize'}
                id={'headingFontSize'}
                value={headingFontSize ?? 50}
                checked={false}
                onChangeHandler={onChangeHandler}
                required={false}
                readonly={false}
                classname={''}
            />
        </div>
    );
};

export default MainPageHeadingFontSize;
