import React from 'react';
import {IAdminComponentsProps, IOptions} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import {headingTypes} from "../Options";

interface IPageHeadingTypeProps extends IAdminComponentsProps {
    blockHeadingType: string | undefined;
    headingTypeOptionsVisibility: IOptions;
    setHeadingTypeOptionsVisibility: Function;
}

const PageHeadingType: React.FC<IPageHeadingTypeProps> = ({
                                                              blockHeadingType,
                                                              setHeadingTypeOptionsVisibility,
                                                              headingTypeOptionsVisibility,
                                                              isLoading,
                                                              onChangeHandler
                                                          }) => {
    const changeHeadingTypeOptionsContainerVisibility = () => {
        headingTypeOptionsVisibility.open
            ? setHeadingTypeOptionsVisibility({
                ...headingTypeOptionsVisibility,
                open: false,
                display: 'none',
                bottom: '-25.2rem'
            })
            : setHeadingTypeOptionsVisibility({
                ...headingTypeOptionsVisibility,
                open: true,
                display: 'flex',
                bottom: '-25.2rem'
            })
    }
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
                               onChange={e => onChangeHandler(e)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default PageHeadingType;
