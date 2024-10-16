import React from 'react';
import styles from "../../AdminMain.module.sass";
import {navLinksHoverStyles} from "../../Options";
import {IAdminComponentsProps, INavLinksHoverStyle, IOptions} from "../../../../interface/IAdminPageComponets";


interface INavLinksFontColorHoverStyleProps extends IAdminComponentsProps {
    navLinksFontColorHoverStyle: string;
    hoverStyleOptionsVisibility: IOptions
    setHoverStyleOptionsVisibility: Function;
}

const NavLinksFontColorHoverStyle: React.FC<INavLinksFontColorHoverStyleProps> = ({
                                                                                      navLinksFontColorHoverStyle,
                                                                                      onChangeHandler,
                                                                                      setHoverStyleOptionsVisibility,
                                                                                      hoverStyleOptionsVisibility
                                                                                  }) => {

    const changeNavHoverStyleVisibility = () => {
        hoverStyleOptionsVisibility.open
            ? setHoverStyleOptionsVisibility({
                ...hoverStyleOptionsVisibility,
                open: false,
                display: 'none',
            })
            : setHoverStyleOptionsVisibility({
                ...hoverStyleOptionsVisibility,
                open: true,
                display: 'flex',
            })
    }
    const getNavLinksStyle = (hoverStyle: string | undefined): string => {
        if (hoverStyle) {
            const navLinkHoverStyle: INavLinksHoverStyle = navLinksHoverStyles.filter(el => el.id === hoverStyle)[0];
            return navLinkHoverStyle.style
        } else {
            return ''
        }
    }

    return (
        <div className={styles.form__inputContainer_select}>
            <div className={styles.form__inputContainer_label}>
                Стиль навигационных ссылок при наведении курсором
            </div>
            <div className={styles.form__selectContainer}
                 onClick={changeNavHoverStyleVisibility}>
                {getNavLinksStyle(navLinksFontColorHoverStyle)}
            </div>
            <div className={styles.form__optionsContainer}
                 style={{display: hoverStyleOptionsVisibility.display, top: hoverStyleOptionsVisibility.top}}>
                {navLinksHoverStyles.map(style => (
                    <label
                        key={style.id}
                        htmlFor={style.id}
                        className={style.id === navLinksFontColorHoverStyle
                            ? [styles.form__option, styles.selectedOption].join(' ')
                            : [styles.form__option,].join(' ')
                        }>{style.style}
                        <input type="radio"
                               value={style.id}
                               name="navLinksFontColorHoverStyle"
                               id={style.id}
                               checked={style.id === navLinksFontColorHoverStyle}
                               onChange={e => onChangeHandler(e)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default NavLinksFontColorHoverStyle;
