import React from 'react';
import styles from "../AdminMain.module.sass";
import {IOptions} from "../../../interface/IAdminPageComponets";


interface IPreviewSelectProps {
    optionsArray: Array<{ id: string; name: string }>;
    selectedOption: string;
    selectLabel: string;
    selectOptionVisibility: IOptions;
    changeSelectOptionsVisibility: React.MouseEventHandler<HTMLDivElement>;
    onChangeHandler: Function
    name: string;
    selectVisibility?: 'none' | 'flex'
}

const PreviewSelect: React.FC<IPreviewSelectProps> = ({
                                                          name,
                                                          selectVisibility,
                                                          onChangeHandler,
                                                          optionsArray,
                                                          selectLabel,
                                                          changeSelectOptionsVisibility,
                                                          selectedOption,
                                                          selectOptionVisibility
                                                      }) => {
    return (
        <div className={styles.form__inputContainer_select} style={{display: selectVisibility ? selectVisibility : 'flex'}}>
            <div className={styles.form__inputContainer_label}>{selectLabel}</div>
            <div className={styles.form__selectContainer}
                 onClick={changeSelectOptionsVisibility}>{optionsArray.map(option => (option.id === selectedOption ? option.name : ''))}</div>
            <div className={styles.form__optionsContainer}
                 style={{display: selectOptionVisibility.display, top: selectOptionVisibility.top}}>
                {optionsArray.map(option => (
                    <label key={option.id} htmlFor={option.id}
                           className={option.id === selectedOption
                               ? [styles.form__option, styles.selectedOption].join(' ')
                               : [styles.form__option].join(' ')}>{option.name}
                        <input type="radio"
                               value={option.id}
                               name={name}
                               id={option.id}
                               onChange={e => onChangeHandler(e)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default PreviewSelect;
