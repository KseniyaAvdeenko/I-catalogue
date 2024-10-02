import React from 'react';
import {SeoTagType} from "../../../interface/ISeoSettings";
import styles from "../AdminNavbar.module.sass";
import Label from "../AdminNavbar/Label";
import Input from "../AdminNavbar/Input";
interface ISeoTagPropertyProps {
    onChangeHandler: Function;
    label: string;
    id: string;
    type: string;
    name: string;
    required: boolean;
    value: string
}

const SeoTagProperty: React.FC<ISeoTagPropertyProps> = ({type, name, onChangeHandler, value, required, label, id}) => {
    return (
        <div className={styles.savedItems__item} style={{marginBottom: '1rem'}}>
            <Label
                htmlFor={id}
                label={label}
                classname={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}/>
            <Input
                checked={false}
                classname={''}
                type={type}
                name={name}
                id={id}
                onChangeHandler={onChangeHandler}
                required={required}
                value={value}
            />
        </div>
    );
};

export default SeoTagProperty;
