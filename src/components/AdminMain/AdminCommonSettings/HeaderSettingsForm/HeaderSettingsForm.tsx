import React, {useState} from 'react';
import styles from "../../AdminMain.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {updateHeaderSettings} from "../../../../store/actions/headerSettingsAction";
import HeaderBottomBorderColor from "./HeaderBottomBorderColor";
import HeaderNavLinksFontColorHoverStyle from "./HeaderNavLinksFontColorHoverStyle";
import HeaderLayout from "./HeaderLayout";
import {IOptions} from "../../../../interface/IAdminPageComponets";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";

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
            if (e.target.type === 'checkbox') {
                dispatch(updateHeaderSettings(decodeToken(localStorage.access), headerSettings.id, {[e.target.name]: e.target.checked}))
            } else if (e.target.type === 'number') {
                dispatch(updateHeaderSettings(decodeToken(localStorage.access), headerSettings.id, {[e.target.name]: parseInt(e.target.value)}))
            } else {
                dispatch(updateHeaderSettings(decodeToken(localStorage.access), headerSettings.id, {[e.target.name]: e.target.value}))
            }
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
        <section id={'headerSettingsSection'}
                 className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h3 className={styles.AdminMain__subheading}>Настройка “шапки” сайта</h3>
            {headerSettings
                ? <div className={styles.AdminMain__formContainer}>
                    <div className={styles.form__items}>
                        <AdminInputContainer type={'color'} name={'background'} inputClassname={''}
                                             inputId={"headerBg"} value={headerSettings.background}
                                             checked={false} required={false} readonly={false}
                                             inputContainerClassname={styles.form__inputContainer}
                                             labelClassName={''} label={'Цвет фона'} isLoading={isLoading}
                                             onChangeHandler={onChangeHandler}/>
                        <AdminInputContainer type={"checkbox"} name={'headerBottomBorder'}
                                             inputId={'headerBottomBorder'} value={''}
                                             checked={headerSettings.headerBottomBorder}
                                             required={false} readonly={false}
                                             inputClassname={''} inputContainerClassname={styles.form__inputContainer}
                                             labelClassName={''} label={'Нижняя граница “шапки” сайта'}
                                             isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                        <HeaderBottomBorderColor isLoading={isLoading}
                                                 onChangeHandler={onChangeHandler}
                                                 headerBottomBorderColor={headerSettings?.headerBottomBorderColor}
                                                 headerBorderBottom={headerSettings?.headerBottomBorder ?? false}
                        />
                        <hr className={styles.hr}/>
                        <AdminInputContainer type={"color"} name={'fontColor'}
                                             inputId={"headerFontColor"} value={headerSettings.fontColor}
                                             checked={false} required={false} readonly={false}
                                             inputClassname={''} labelClassName={''} isLoading={isLoading}
                                             inputContainerClassname={styles.form__inputContainer}
                                             label={'Цвет текста “шапки” сайта'} onChangeHandler={onChangeHandler}/>
                        <hr className={styles.hr}/>
                        <AdminInputContainer type={"number"} name={'navLinksFontSize'} inputId={"navLinksFontSize"}
                                             value={headerSettings.navLinksFontSize} checked={false}
                                             required={false} readonly={false} inputClassname={''}
                                             inputContainerClassname={styles.form__inputContainer}
                                             labelClassName={''} label={'Размер шрифта навигационных ссылок'}
                                             isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                       <AdminInputContainer type={"number"} name={'contactsFontSize'} inputId={"contactsFontSize"}
                                             value={headerSettings.contactsFontSize} checked={false}
                                             required={false} readonly={false} inputClassname={''}
                                             inputContainerClassname={styles.form__inputContainer}
                                             labelClassName={''} label={'Размер шрифта контактов'}
                                             isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                    </div>
                    <div className={styles.form__items}>
                        <AdminInputContainer type={"color"} name={'navLinksFontColorHover'} inputId={'navLinksFontColorHover'}
                                             value={headerSettings.navLinksFontColorHover} checked={false}
                                             required={false} readonly={false} inputClassname={''}
                                             inputContainerClassname={styles.form__inputContainer}
                                             labelClassName={''} label={'Цвет шрифта навигационных ссылок при наведении курсором'}
                                             isLoading={isLoading} onChangeHandler={onChangeHandler}/>
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
                : <div className={styles.AdminMain__formContainer}></div>
            }
        </section>
    );
};

export default HeaderSettingsForm;
