import React from 'react';
import styles from "../AdminNavbar.module.sass";
import Label from "../AdminNavbar/Label";

interface ISeoTagCodeProps {
    onChangeHandler: Function;
    label: string;
    id: string;
    name: string;
    value: string
}

const SeoTagCode: React.FC<ISeoTagCodeProps> = ({ name, onChangeHandler, value, label, id}) => {
    return (
        <div className={styles.savedItems__item} style={{flexBasis: '30%'}}>
            <Label
                htmlFor={id}
                label={label}
                classname={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}/>
            <textarea
                onChange={e=>onChangeHandler(e)}
                id={id}
                name={name}
                value={value}>
            </textarea>
        </div>
    );
};

export default SeoTagCode;
