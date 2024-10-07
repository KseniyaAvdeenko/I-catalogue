import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";
import Loader from "../../../UI/Loader/Loader";

interface ICopyrightsContentProps extends IAdminComponentsProps {
    copyrightsContent: string | undefined
}

const FooterCopyrightsContent: React.FC<ICopyrightsContentProps> = ({
                                                                        copyrightsContent,
                                                                        onChangeHandler
                                                                    }) => {
    return (
        <div className={styles.form__inputContainer_select}>
            <label htmlFor={'copyrightsContent'} className={styles.form__inputContainer_label}>
                Copyrights контент
            </label>
            <textarea id={'copyrightsContent'} onChange={e => onChangeHandler(e)} name={'copyrightsContent'}
                      value={copyrightsContent??''} className={styles.textarea} rows={7}>
            </textarea>
        </div>
    );
};

export default FooterCopyrightsContent;
