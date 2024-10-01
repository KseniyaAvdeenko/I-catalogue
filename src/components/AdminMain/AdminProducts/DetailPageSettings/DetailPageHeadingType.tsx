import React from 'react';
import {IAdminComponentsProps, IOptions} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";
import {headingTypes} from "../../Options";

interface IDetailPageHeadingTypeProps extends IAdminComponentsProps {
    blockHeadingType: string | undefined;
    headingTypeOptionsVisibility: IOptions;
    changeHeadingTypeOptionsContainerVisibility: React.MouseEventHandler;
}

const DetailPageHeadingType: React.FC<IDetailPageHeadingTypeProps> = ({
                                                                          isLoading,
                                                                          changeHeadingTypeOptionsContainerVisibility,
                                                                          blockHeadingType,
                                                                          headingTypeOptionsVisibility,
                                                                          onChangeHandler
                                                                      }) => {

    return (
        <div className={styles.form__inputContainer_select}>
            <div className={styles.form__inputContainer_label}>Тип заголовка</div>
            <div className={styles.form__selectContainer}
                 onClick={changeHeadingTypeOptionsContainerVisibility}>
                {isLoading && 'Loading...'} Заголовок {blockHeadingType}</div>
            <div className={styles.form__optionsContainer}
                 style={{display: headingTypeOptionsVisibility.display, bottom: headingTypeOptionsVisibility.bottom}}>
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
                               checked={type.id === blockHeadingType}
                               onChange={e => onChangeHandler(e)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default DetailPageHeadingType;
