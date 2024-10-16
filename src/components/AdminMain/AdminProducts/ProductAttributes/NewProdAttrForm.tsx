import React from 'react';
import {IProdAttrs} from "../../../../interface/IProduct";
import styles from "../../AdminNavbar.module.sass";
import SaveIcon from "../../../../assets/img/saveIcon.svg";
import DeleteIcon from "../../../../assets/img/deleteIcon.svg";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";

interface INewProdAttrFormProps {
    fields: IProdAttrs[];
    onChangeHandler: Function
    deleteField: Function
    saveNewAttr: Function
}

const NewProdAttrForm: React.FC<INewProdAttrFormProps> = ({fields, saveNewAttr, deleteField, onChangeHandler}) => {
    return (
        <div className={styles.formItems}>
            {fields.map(field => (
                <div key={field.id} className={styles.savedItems__items}>
                    <AdminInputContainer
                        type={'text'} name={'attribute'} inputId={'attribute*' + field.id}
                        value={field.attribute} checked={false} required={false} readonly={false}
                        inputClassname={''} label={'Характеристика'}
                        inputContainerClassname={styles.savedItems__item}
                        labelClassName={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}
                        onChangeHandler={onChangeHandler}/>
                    <div style={{display: 'flex'}}>
                        <img src={SaveIcon} alt="save icon" onClick={() => saveNewAttr(field.id)} style={{marginRight: '1rem'}}/>
                        <img src={DeleteIcon} alt="delete icon" onClick={() => deleteField(field.id)}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewProdAttrForm;
