import React from 'react';
import {IModalLabels} from "../../../interface/IModalForm";
import styles from "../AdminNavbar.module.sass";
import AdminInputContainer from "../../UI/InputContainers/AdminInputContainer";
import SaveIcon from "../../../assets/img/saveIcon.svg";
import DeleteIcon from "../../../assets/img/deleteIcon.svg";
import InputTypeSelect from "./InputTypeSelect";

interface INewInputFormProps {
    fields: IModalLabels[];
    onChangeHandler: Function;
    deleteField: Function;
    saveNewInput: Function;
    savedLabelsTypes: string[]
}

const NewInputForm: React.FC<INewInputFormProps> = ({
                                                        savedLabelsTypes,
                                                        fields,
                                                        saveNewInput,
                                                        deleteField,
                                                        onChangeHandler
                                                    }) => {


    return (
        <div className={styles.savedItems}>
            {fields && fields.map(field => (
                <div key={field.id} className={styles.savedItems__items}>
                    <AdminInputContainer
                        type={'text'} name={'inputLabel'} inputId={'inputLabel*' + field.id}
                        value={field.inputLabel} checked={false}
                        required={true} readonly={false} inputClassname={''}
                        inputContainerClassname={styles.savedItems__item}
                        labelClassName={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}
                        label={'Название поля'}
                        onChangeHandler={onChangeHandler}/>
                    <InputTypeSelect
                        savedLabelsTypes={savedLabelsTypes}
                        input={field}
                        onChangeHandler={onChangeHandler}/>
                    <AdminInputContainer
                        type={'text'} name={'inputIdName'} inputId={'inputIdName*' + field.id}
                        value={field.inputIdName} checked={false}
                        required={true} readonly={false} inputClassname={''}
                        inputContainerClassname={styles.savedItems__item}
                        labelClassName={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}
                        label={'ID и название поля ввода'}
                        onChangeHandler={onChangeHandler} pattern={'[A-Za-z]'}/>
                    <div style={{display: 'flex'}}>
                        <img src={SaveIcon} alt="save icon" onClick={() => saveNewInput(field.id)} style={{marginRight: '1rem'}}/>
                        <img src={DeleteIcon} alt="delete icon" onClick={() => deleteField(field.id)}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewInputForm;
