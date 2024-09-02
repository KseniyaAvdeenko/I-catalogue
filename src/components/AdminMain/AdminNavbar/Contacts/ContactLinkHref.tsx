import React from 'react';
import styles from '../AdminNavbar.module.sass'
import Label from "../Label";
import Input from "../Input";

interface IContactLinkHrefProps{
    id: string;
    label: string;
    type: string;
    name: string;
    onChangeHandler: Function;
    required: boolean;
    value: string;
    isLink: boolean;
}
const ContactLinkHref: React.FC<IContactLinkHrefProps> = ({isLink,value, required,onChangeHandler, id,name, label, type}) => {
    return (
        <div className={styles.savedItems__item} style={{display: isLink?'flex':'none'}}>
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

export default ContactLinkHref;
