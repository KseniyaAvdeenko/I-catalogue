import React, {useState} from 'react';
import styles from "../../AdminMain.module.sass";
import {appFonts} from "../../Options";
import {IAdminComponentsProps, IOptions} from "../../../../interface/IAdminPageComponets";


interface IBasicFontFamilyProps extends IAdminComponentsProps{
    basicFontFamily: string | undefined;
    fontOptionsVisibility: IOptions;
    setFontOptionsVisibility: Function
}

const BasicFontFamily: React.FC<IBasicFontFamilyProps> = ({
                                                              fontOptionsVisibility,
                                                              isLoading, basicFontFamily,
                                                              onChangeHandler,
                                                              setFontOptionsVisibility
                                                          }) => {

    const changeFontOptionsContainerVisibility = () => {
        fontOptionsVisibility.open
            ? setFontOptionsVisibility({...fontOptionsVisibility, open: false, display: 'none', bottom: '-56.2rem'})
            : setFontOptionsVisibility({...fontOptionsVisibility, open: true, display: 'flex', bottom: '-56.2rem'})
    }
    return (
        <div className={styles.form__inputContainer_select}>
            <div className={styles.form__inputContainer_label}>Основной шрифт</div>
            <div className={styles.form__selectContainer}
                 onClick={changeFontOptionsContainerVisibility}>{isLoading && 'Loading...'}{basicFontFamily}</div>
            <div className={styles.form__optionsContainer}
                 style={{display: fontOptionsVisibility.display, bottom: fontOptionsVisibility.bottom}}>
                {appFonts.map(font => (
                        <label key={font.id} htmlFor={font.id}
                                 className={font.font === basicFontFamily
                                     ?[styles.form__option, styles.selectedOption].join(' ')
                                     :[styles.form__option].join(' ')}
                                 style={{fontFamily: font.font}}>{font.font}
                            <input type="radio"
                                   value={font.font}
                                   name="basicFontFamily"
                                   id={font.id}
                                   onChange={e => onChangeHandler(e)}
                            />
                        </label>
                ))}
            </div>
        </div>
    );
};

export default BasicFontFamily;
