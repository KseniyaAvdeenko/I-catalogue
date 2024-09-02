import React from 'react';
import styles from '../AdminNavbar.module.sass'
import Label from "../Label";
import Input from "../Input";


interface IContactIsLinkInputProps {
    id: string;
    label: string;
    classname: string;
    type: string;
    name: string;
    onChangeHandler: Function;
    required: boolean;
    checked: boolean
}


const ContactIsLinkInput: React.FC<IContactIsLinkInputProps> = ({
                                                                    type,
                                                                    name,
                                                                    id,
                                                                    label,
                                                                    classname,
                                                                    required,
                                                                    onChangeHandler, checked
                                                                }) => {
    return (
        <div className={styles.savedItems__items} style={{flexBasis: '16.5%'}}>
            <Label htmlFor={id} label={label} classname={classname}/>
            <Input
                type={type}
                name={name}
                id={id}
                onChangeHandler={onChangeHandler}
                required={required}
                checked={checked}
                value={''}
                classname={''}
            />
        </div>
    );
};

export default ContactIsLinkInput;
