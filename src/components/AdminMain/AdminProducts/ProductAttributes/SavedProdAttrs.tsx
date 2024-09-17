import React from 'react';
import {IProdAttrs} from "../../../../interface/IProduct";
import styles from "../../AdminNavbar.module.sass";
import DeleteIcon from "../../../../assets/img/deleteIcon.svg";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";
import SaveIcon from "../../../../assets/img/saveIcon.svg";

interface ISavedProdAttrsProps {
    attrs: IProdAttrs[] | [];
    isLoading: boolean;
    deleteProdAttribute: Function;
    onChangeHandler: Function;
}

const SavedProdAttrs: React.FC<ISavedProdAttrsProps> = ({onChangeHandler, deleteProdAttribute, attrs, isLoading}) => {
    return (
        <div className={styles.savedItems} style={{borderBottom: attrs.length ?'.1rem solid #926B6A': 'none'}}>
            {isLoading && 'Loading...'}
            {attrs && attrs.map(attr => (
                <div key={attr.id} className={styles.savedItems__items}>
                    <AdminInputContainer
                        type={'text'} name={'attribute'} inputId={'attribute*' + attr.id}
                        value={attr.attribute} checked={false} required={false} readonly={false}
                        inputClassname={''} label={'Характеристика'}
                        inputContainerClassname={styles.savedItems__item}
                        labelClassName={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}
                        isLoading={false} onChangeHandler={onChangeHandler}/>
                    <img src={DeleteIcon} alt="delete icon" onClick={() => deleteProdAttribute(attr.id)}/>
                </div>
            ))}
        </div>
    );
};

export default SavedProdAttrs;
