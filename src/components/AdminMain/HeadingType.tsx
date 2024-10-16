import React from 'react';
import {IAdminComponentsProps, IOptions} from "../../interface/IAdminPageComponets";
import styles from "./AdminMain.module.sass";
import {headingTypes} from "./Options";

interface IMainPageHeadingTypeProps extends IAdminComponentsProps {
    blockHeadingType: string;
    headingTypeOptionsVisibility: IOptions;
    changeHeadingTypeOptionsContainerVisibility: React.MouseEventHandler<HTMLDivElement>
}

const HeadingType: React.FC<IMainPageHeadingTypeProps> = ({
                                                              headingTypeOptionsVisibility,
                                                              blockHeadingType,
                                                              onChangeHandler,
                                                              changeHeadingTypeOptionsContainerVisibility
                                                          }) => {

    return (
        <div className={styles.form__inputContainer_select}>
            <div className={styles.form__inputContainer_label}>Тип заголовка</div>
            <div className={styles.form__selectContainer}
                 onClick={changeHeadingTypeOptionsContainerVisibility}>Заголовок {blockHeadingType}</div>
            <div className={styles.form__optionsContainer}
                 style={{display: headingTypeOptionsVisibility.display, top: headingTypeOptionsVisibility.top}}>
                {headingTypes.map(type => (
                    <label key={type.id} htmlFor={type.id}
                           className={type.id === blockHeadingType
                               ? [styles.form__option, styles.selectedOption].join(' ')
                               : [styles.form__option].join(' ')}
                    >{type.heading}
                        <input type="radio"
                               value={type.id}
                               name="blockHeadingType"
                               id={type.id}
                               onChange={e => onChangeHandler(e)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default HeadingType;
