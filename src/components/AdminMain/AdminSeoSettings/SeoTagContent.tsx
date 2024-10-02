import React from 'react';
import styles from "../AdminNavbar.module.sass";
import Label from "../AdminNavbar/Label";

interface ISeoTagContentProps {
    onChangeHandler: Function;
    label: string;
    id: string;
    name: string;
    value: string
}

const SeoTagContent: React.FC<ISeoTagContentProps> = ({ name, onChangeHandler, value, label, id}) => {
    return (
        <div className={styles.savedItems__item}>
            <Label
                htmlFor={id}
                label={label}
                classname={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}/>
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={e=>onChangeHandler(e)}>
            </textarea>
        </div>
    );
};

export default SeoTagContent;
