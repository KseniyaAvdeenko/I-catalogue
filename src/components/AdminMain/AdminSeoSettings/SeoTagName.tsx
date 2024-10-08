import React from 'react';
import styles from "../AdminNavbar.module.sass";
import Label from "../AdminNavbar/Label";
import {dataListValues} from "../Options";

interface ISeoTagNameProps {
    onChangeHandler: Function;
    label: string;
    id: string;
    type: string;
    name: string;
    required: boolean;
    value: string;
    listId: string
}

const SeoTagName: React.FC<ISeoTagNameProps> = ({listId, name, type, id, value, required, onChangeHandler, label}) => {
    return (
        <div className={styles.savedItems__item} style={{marginBottom: '1rem'}}>
            <Label
                htmlFor={id}
                label={label}
                classname={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}/>
            <input
                type={type}
                onChange={e => onChangeHandler(e)}
                name={name}
                id={id}
                value={value ?? ''}
                required={required}
                list={listId}
            />
            <datalist id={listId}>
                {dataListValues.map(value=>(
                    <option key={value}>{value}</option>
                ))}
            </datalist>
        </div>
    );
};

export default SeoTagName;
