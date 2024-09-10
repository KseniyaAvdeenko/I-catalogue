import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../UI/Inputs/AdminInput";

interface IPageHeadingContentProps extends IAdminComponentsProps{
    headingContent: string | undefined
    pageName: string|undefined
}

const PageHeadingContent:React.FC<IPageHeadingContentProps> = ({pageName, headingContent, isLoading, onChangeHandler}) => {
    return (
        <div className={styles.form__items} style={{marginBottom: '2rem'}}>
            <label htmlFor="headingContent" className={styles.form__inputContainer_label}>Заголовок страницы "{pageName??''}"</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={'text'}
                name={"headingContent"}
                id={"headingContent"}
                value={headingContent ??''}
                checked={false}
                onChangeHandler={onChangeHandler}
                required={true}
                readonly={false}
                classname={''}
                />
        </div>
    );
};

export default PageHeadingContent;
