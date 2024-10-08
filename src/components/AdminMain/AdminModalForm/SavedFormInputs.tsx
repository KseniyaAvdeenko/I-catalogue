import React from 'react';
import {IModalLabels} from "../../../interface/IModalForm";
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminNavbar.module.sass";
import AdminInputContainer from "../../UI/InputContainers/AdminInputContainer";
import InputTypeSelect from "./InputTypeSelect";
import DeleteIcon from "../../../assets/img/deleteIcon.svg";

interface ISavedFormInputsProps extends IAdminComponentsProps {
    formInputs: IModalLabels[] | [];
    deleteInput: Function;
    savedLabelsTypes: string[]
}

const SavedFormInputs: React.FC<ISavedFormInputsProps> = ({savedLabelsTypes,formInputs, onChangeHandler, deleteInput}) => {
    return (
        <div className={styles.savedItems} style={{borderBottom: formInputs.length ? '.1rem solid #926B6A' : 'none'}}>
            {formInputs.map(input => (
                <div key={input.id} className={styles.savedItems__items}>
                    <AdminInputContainer
                        type={'text'} name={'inputLabel'} inputId={'inputLabel*'+ input.id}
                        value={input.inputLabel} checked={false}
                        required={false} readonly={false} inputClassname={''}
                        inputContainerClassname={styles.savedItems__item}
                        labelClassName={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}
                        label={'Название поля'}
                        onChangeHandler={onChangeHandler}/>
                    <InputTypeSelect
                        input={input} savedLabelsTypes={savedLabelsTypes}
                        onChangeHandler={onChangeHandler}/>
                    <AdminInputContainer
                        type={'text'} name={'inputIdName'} inputId={'inputIdName*'+ input.id}
                        value={input.inputIdName} checked={false}
                        required={false} readonly={false} inputClassname={''}
                        inputContainerClassname={styles.savedItems__item}
                        labelClassName={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}
                        label={'ID и название поля ввода'}
                        onChangeHandler={onChangeHandler} pattern={'[A-Za-z]'}/>
                    <img src={DeleteIcon} alt="delete icon" onClick={() => deleteInput(input.id)}/>
                </div>
            ))}
        </div>
    );
};

export default SavedFormInputs;
