import React from 'react';
import styles from '../../AdminNavbar.module.sass'
import Label from "../Label";
import Input from "../Input";

interface ISocialLinkHrefProps{
    id: string;
    label: string;
    type: string;
    name: string;
    onChangeHandler: Function;
    required: boolean;
    value: string;
}
const SocialLinkHref: React.FC<ISocialLinkHrefProps> = ({value, required,onChangeHandler, id,name, label, type}) => {
    return (
        <div className={styles.savedItems__item}>
            <Label htmlFor={id} label={label} classname={styles.savedItems__item_labelMargin}/>
            <Input
                type={type}
                name={name}
                id={id}
                onChangeHandler={onChangeHandler}
                value={value}
                required={required}
                checked={false}
                classname={''}
            />
        </div>
    );
};

export default SocialLinkHref;
