import React from 'react';
import styles from "../AdminNavbar.module.sass";
import {inputTypes} from "../Options";
import {IModalLabels} from "../../../interface/IModalForm";

interface IInputTypeSelectProps {
    input: IModalLabels;
    onChangeHandler: Function;
    savedLabelsTypes: string[]
}

const InputTypeSelect: React.FC<IInputTypeSelectProps> = ({
                                                              savedLabelsTypes,
                                                              onChangeHandler,
                                                              input,
                                                          }) => {
    return (
        <div className={styles.savedItems__item}>
            <div className={styles.savedItems__item_labelMargin}>Тип поля ввода</div>
            <div className={styles.savedItems}>
                {!savedLabelsTypes.includes('number')
                    ? inputTypes.map(type => (
                        <label key={type.type} htmlFor={type.type + '*' + input.id}
                               className={type.type === input.inputType
                                   ? [styles.savedItems_inputRadioLabel, styles.savedItems__item_labelMargin, styles.savedItems_inputRadioLabelSelected].join(' ')
                                   : [styles.savedItems_inputRadioLabel, styles.savedItems__item_labelMargin].join(' ')}>{type.name}
                            <input type="radio"
                                   value={type.type}
                                   name="inputType"
                                   checked={type.type === input.inputType}
                                   id={type.type + '*' + input.id}
                                   className={styles.savedItems_inputRadio}
                                   onChange={e => onChangeHandler(e)}
                            />
                        </label>))
                    : inputTypes.filter(el => el.type !== 'number').map(type => (
                        <label key={type.type} htmlFor={type.type + '*' + input.id}
                               className={type.type === input.inputType
                                   ? [styles.savedItems_inputRadioLabel, styles.savedItems__item_labelMargin, styles.savedItems_inputRadioLabelSelected].join(' ')
                                   : [styles.savedItems_inputRadioLabel, styles.savedItems__item_labelMargin].join(' ')}>{type.name}
                            <input type="radio"
                                   value={type.type}
                                   name="inputType"
                                   checked={type.type === input.inputType}
                                   id={type.type + '*' + input.id}
                                   className={styles.savedItems_inputRadio}
                                   onChange={e => onChangeHandler(e)}
                            />
                        </label>))
                }
            </div>
        </div>
    );
};

export default InputTypeSelect;
