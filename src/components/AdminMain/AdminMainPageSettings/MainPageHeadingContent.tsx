import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../../UI/Inputs/AdminInput";

interface IMainPageHeadingContentProps extends IAdminComponentsProps {
    headingContent: string | undefined
}

const MainPageHeadingContent: React.FC<IMainPageHeadingContentProps> = ({
                                                                            isLoading,
                                                                            headingContent,
                                                                            onChangeHandler
                                                                        }) => {
    return (
        <div className={styles.form__items} style={{marginBottom: '2rem'}}>
            <label htmlFor="headingContent" className={styles.form__inputContainer_label}>Заголовок главной страницы</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={'text'}
                name={"headingContent"}
                id={"headingContent"}
                value={headingContent}
                checked={false}
                onChangeHandler={onChangeHandler}
                required={true}
                readonly={false}
                classname={''}
                />
        </div>
    );
};

export default MainPageHeadingContent;
