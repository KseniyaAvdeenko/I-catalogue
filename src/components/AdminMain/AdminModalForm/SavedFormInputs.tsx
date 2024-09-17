import React from 'react';
import {IModalLabels} from "../../../interface/IModalForm";
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminNavbar.module.sass";
import AdminInputContainer from "../../UI/InputContainers/AdminInputContainer";

interface ISavedFormInputsProps extends IAdminComponentsProps {
    formInputs: IModalLabels[] | [];
    deleteInput: Function;
}

const SavedFormInputs: React.FC<ISavedFormInputsProps> = ({formInputs, isLoading, onChangeHandler, deleteInput}) => {
    return (
        <div className={styles.savedItems} style={{borderBottom: formInputs.length ? '.1rem solid #926B6A' : 'none'}}>
            {formInputs.map(input => (
                <div key={input.id} className={styles.savedItems__items}>
                    <AdminInputContainer
                        type={'text'} name={'inputLabel'} inputId={'inputLabel'}
                        value={input.inputLabel} checked={false}
                        required={false} readonly={false} inputClassname={''}
                        inputContainerClassname={styles.savedItems__item}
                        labelClassName={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}
                        label={'Название поля'} isLoading={isLoading}
                        onChangeHandler={onChangeHandler}/>
                    <AdminInputContainer
                        type={'text'} name={'inputIdName'} inputId={'inputIdName'}
                        value={input.inputIdName} checked={false}
                        required={false} readonly={false} inputClassname={''}
                        inputContainerClassname={styles.savedItems__item}
                        labelClassName={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}
                        label={'ID и название поля ввода'} isLoading={isLoading}
                        onChangeHandler={onChangeHandler} pattern={'[A-Za-z]'}/>
                </div>
            ))}
        </div>
    );
};

export default SavedFormInputs;
