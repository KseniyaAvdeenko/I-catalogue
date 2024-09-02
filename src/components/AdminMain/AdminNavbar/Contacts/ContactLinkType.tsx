import React from 'react';
import styles from '../AdminNavbar.module.sass'
import {linkTypes} from "../../Options";
import Input from "../Input";

interface IContactLinkTypeProps {
    label: string;
    onChangeHandler: Function;
    contactLinkType: string;
    contactId: number;
}

const ContactLinkType: React.FC<IContactLinkTypeProps> = ({contactLinkType, contactId, label, onChangeHandler}) => {
    return (
        <div className={styles.savedItems__item}>
            <div className={styles.savedItems__item_labelMargin}>{label}</div>
            <div className={styles.formItems__selectContainer}>
                {linkTypes.map(linkType => (
                    <label key={linkType.id} htmlFor={linkType.id + "*" + contactId}
                           className={linkType.value === contactLinkType
                               ? [styles.savedItems_inputRadioLabel, styles.savedItems_inputRadioLabelSelected].join(' ')
                               : [styles.savedItems_inputRadioLabel].join(' ')
                           }>{linkType.label}
                        <Input type={linkType.type}
                               name={linkType.name}
                               id={linkType.id + "*" + contactId}
                               onChangeHandler={onChangeHandler}
                               required={false}
                               value={linkType.value}
                               checked={linkType.value === contactLinkType}
                               classname={styles.savedItems_inputRadio}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default ContactLinkType;
