import React from 'react';
import {IProdAttrs} from "../../../../interface/IProduct";
import styles from "../../AdminNavbar.module.sass";
import DeleteIcon from "../../../../assets/img/deleteIcon.svg";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";


interface ISavedProdAttrsProps {
    attrs: IProdAttrs[] | [];
    deleteProdAttribute: Function;
    onChangeHandler: Function;
}

const SavedProdAttrs: React.FC<ISavedProdAttrsProps> = ({onChangeHandler, deleteProdAttribute, attrs}) => {
    return (
        <div className={styles.savedItems} style={{borderBottom: attrs.length ?'.1rem solid #926B6A': 'none'}}>
            {attrs && attrs.map(attr => (
                <div key={attr.id} className={styles.savedItems__items}>
                    <AdminInputContainer
                        type={'text'} name={'attribute'} inputId={'attribute*' + attr.id}
                        value={attr.attribute} checked={false} required={false} readonly={false}
                        inputClassname={''} label={'Характеристика'}
                        inputContainerClassname={styles.savedItems__item}
                        labelClassName={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}
                        onChangeHandler={onChangeHandler}/>
                    <img src={DeleteIcon} alt="delete icon" onClick={() => deleteProdAttribute(attr.id)}/>
                </div>
            ))}
        </div>
    );
};

export default SavedProdAttrs;
