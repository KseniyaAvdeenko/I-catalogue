import React from 'react';
import styles from "../../AdminNavbar.module.sass";
import Label from "../Label";
import Input from "../Input";

interface ISlugInputProps {
    label: string;
    id: string;
    type: string;
    name: string;
    onChangeHandler: Function;
    required: boolean;
    value: string | undefined;
}

const SlugInput: React.FC<ISlugInputProps> = ({label, name, onChangeHandler, required, value, type, id}) => {
    return (
        <div className={styles.savedItems__item}>
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
                value={value ?? ''}
            />
        </div>
    );
};

export default SlugInput;
