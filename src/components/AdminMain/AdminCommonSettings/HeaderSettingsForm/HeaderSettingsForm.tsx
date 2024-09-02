import React, {useState} from 'react';
import styles from "../AdminMain.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import HeaderBackground from "./HeaderBackground";
import HeaderBorderBottom from "./HeaderBorderBottom";
import {updateHeaderSettings} from "../../../../store/actions/headerSettingsAction";
import HeaderBottomBorderColor from "./HeaderBottomBorderColor";
import HeaderFontColor from "./HeaderFontColor";
import HeaderNavLinksFontSize from "./HeaderNavLinksFontSize";
import HeaderContactsFontColor from "./HeaderContactsFontColor";
import HeaderNavLinksColorHover from "./HeaderNavLinksColorHover";
import HeaderNavLinksFontColorHoverStyle from "./HeaderNavLinksFontColorHoverStyle";
import HeaderLayout from "./HeaderLayout";
import {IOptions} from "../../../../interface/IAdminPageComponets";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";

const HeaderSettingsForm = () => {
    const {headerSettings, error, isLoading, restored} = useAppSelector(state => state.headerSettingsReducer);
    const dispatch = useAppDispatch();
    //--states
    const [hoverStyleOptionsVisibility, setHoverStyleOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-17rem'
    })
    //methods
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (headerSettings && localStorage.access) {
            e.target.type === 'checkbox'
                ? dispatch(updateHeaderSettings(decodeToken(localStorage.access), headerSettings.id, {[e.target.name]: e.target.checked}))
                : dispatch(updateHeaderSettings(decodeToken(localStorage.access), headerSettings.id, {[e.target.name]: e.target.value}))

        }
        if (e.target.name === 'navLinksFontColorHoverStyle') {
            setHoverStyleOptionsVisibility({
                ...hoverStyleOptionsVisibility,
                open: false,
                display: 'none',
                bottom: '-17rem'
            })
        }
    }
    return (
        <section id={'headerSettingsSection'} className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h3 className={styles.AdminMain__subheading}>Настройка “шапки” сайта</h3>
            <div className={styles.AdminMain__formContainer}>
                <div className={styles.form__items}>
                    <HeaderBackground
                        isLoading={isLoading}
                        onChangeHandler={onChangeHandler}
                        headerBg={headerSettings?.background}
                    />
                    <HeaderBorderBottom
                        isLoading={isLoading}
                        onChangeHandler={onChangeHandler}
                        headerBorderBottom={
                            headerSettings?.headerBottomBorder
                                ? headerSettings.headerBottomBorder
                                : false
                        }
                    />
                    <HeaderBottomBorderColor
                        isLoading={isLoading}
                        onChangeHandler={onChangeHandler}
                        headerBottomBorderColor={headerSettings?.headerBottomBorderColor}
                        headerBorderBottom={headerSettings?.headerBottomBorder ?? false}
                    />
                    <hr className={styles.hr}/>
                    <HeaderFontColor fontColor={headerSettings?.fontColor} onChangeHandler={onChangeHandler}
                                     isLoading={isLoading}/>
                    <hr className={styles.hr}/>
                    <HeaderNavLinksFontSize
                        isLoading={isLoading}
                        navLinksFontSize={headerSettings?.navLinksFontSize}
                        onChangeHandler={onChangeHandler}
                    />
                    <HeaderContactsFontColor
                        isLoading={isLoading}
                        onChangeHandler={onChangeHandler}
                        contactsFontSize={headerSettings?.contactsFontSize}
                    />
                </div>
                <div className={styles.form__items}>
                    <HeaderNavLinksColorHover
                        isLoading={isLoading}
                        onChangeHandler={onChangeHandler}
                        navLinksFontColorHover={headerSettings?.navLinksFontColorHover}
                    />
                    <HeaderNavLinksFontColorHoverStyle
                        isLoading={isLoading}
                        onChangeHandler={onChangeHandler}
                        hoverStyleOptionsVisibility={hoverStyleOptionsVisibility}
                        setHoverStyleOptionsVisibility={setHoverStyleOptionsVisibility}
                        navLinksFontColorHoverStyle={headerSettings?.navLinksFontColorHoverStyle}
                    />
                </div>
                <div className={styles.form__items}>
                    <HeaderLayout
                        isLoading={isLoading}
                        onChangeHandler={onChangeHandler}
                        headerLayout={headerSettings?.headerLayout}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeaderSettingsForm;
