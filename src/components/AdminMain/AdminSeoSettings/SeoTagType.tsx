import React from 'react';
import styles from "../AdminNavbar.module.sass";
import {seoTagTypes} from "../Options";
import Input from "../AdminNavbar/Input";

interface ISeoTagTypeInputsProps {
    label: string;
    onChangeHandler: Function;
    seoTagType: string;
    seoTagId: number;
}

const SeoTagType: React.FC<ISeoTagTypeInputsProps> = ({label, seoTagType, seoTagId, onChangeHandler}) => {
    return (
        <div className={styles.savedItems__item} style={{flexBasis: '10%'}}>
            <div className={styles.savedItems__item_labelMargin}>{label}</div>
            <div className={styles.formItems__selectContainer_column}>
                {seoTagTypes.map(type=>(
                    <label key={type.id} htmlFor={type.id + "*" + seoTagId}
                           className={type.id === seoTagType
                               ? [styles.savedItems_inputRadioLabel, styles.savedItems_inputRadioLabelSelected].join(' ')
                               : [styles.savedItems_inputRadioLabel].join(' ')
                           }>{type.name}
                        <Input type={'radio'}
                               name={'tag'}
                               id={type.id + "*" + seoTagId}
                               onChangeHandler={onChangeHandler}
                               required={false}
                               value={type.id}
                               checked={type.id === seoTagType}
                               classname={styles.savedItems_inputRadio}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default SeoTagType;
