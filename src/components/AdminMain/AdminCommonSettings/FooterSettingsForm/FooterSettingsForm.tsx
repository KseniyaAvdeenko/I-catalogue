import React from 'react';
import styles from "../../AdminMain.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {updateFooterSettings} from "../../../../store/actions/footerSettingsAction";
import FooterTopBorderColor from "./FooterTopBorderColor";
import FooterCopyrightsContent from "./FooterCopyrightsContent";
import FooterContentLayout from "./FooterContentLayout";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";
import Loader from "../../../UI/Loader/Loader";

const FooterSettingsForm = () => {
    const {footerSettings, isLoading} = useAppSelector(state => state.footerSettingsReducer);
    const dispatch = useAppDispatch();
    //methods
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (footerSettings && localStorage.access) {
            if (e.target.type === 'checkbox') {
                dispatch(updateFooterSettings(decodeToken(localStorage.access), footerSettings.id, {[e.target.name]: e.target.checked}))
            } else if (e.target.type === 'number') {
                dispatch(updateFooterSettings(decodeToken(localStorage.access), footerSettings.id, {[e.target.name]: parseInt(e.target.value)}))
            } else {
                dispatch(updateFooterSettings(decodeToken(localStorage.access), footerSettings.id, {[e.target.name]: e.target.value}))
            }
        }
    }
    return (
        <section id={'footerSettingsSection'}
                 className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h3 className={styles.AdminMain__subheading}>Настройка “подвала” сайта</h3>
            {footerSettings
                ? <div className={styles.AdminMain__formContainer}>
                    <div className={styles.form__items}>
                        <AdminInputContainer
                            type={'color'} name={'background'} inputId={'footerBg'}
                            value={footerSettings.background} checked={false}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Цвет фона'}
                            onChangeHandler={onChangeHandler}/>
                        <AdminInputContainer
                            type={'checkbox'} name={'footerBorderTop'} inputId={'footerBorderTop'}
                            value={''} checked={footerSettings.footerBorderTop}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Верхняя граница “подвала” сайта'}
                            onChangeHandler={onChangeHandler}/>
                        <FooterTopBorderColor onChangeHandler={onChangeHandler}
                                              borderTopColor={footerSettings?.borderTopColor}
                                              footerTopBorder={footerSettings?.footerBorderTop ?? false}/>
                        <hr className={styles.hr}/>
                        <AdminInputContainer
                            type={'color'} name={'fontColor'} inputId={'fontColor'}
                            value={footerSettings.fontColor} checked={false}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Цвет текста “подвала” сайта'}
                            onChangeHandler={onChangeHandler}/>
                        <hr className={styles.hr}/>
                        <AdminInputContainer
                            type={'number'} name={'navLinksFontSize'} inputId={'navLinksFontSize'}
                            value={footerSettings.navLinksFontSize} checked={false}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Размер шрифта навигационных ссылок'}
                            onChangeHandler={onChangeHandler}/>
                        <AdminInputContainer
                            type={'number'} name={'contactsFontSize'} inputId={'contactsFontSize'}
                            value={footerSettings.contactsFontSize} checked={false}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Размер шрифта контактов'}
                            onChangeHandler={onChangeHandler}/>
                    </div>
                    <div className={styles.form__items}>
                        <AdminInputContainer
                            type={'color'} name={'navLinksFontColorHover'}
                            inputId={'navLinksFontColorHover'}
                            value={footerSettings.navLinksFontColorHover} checked={false}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Цвет шрифта навигационных ссылок при наведении курсором'}
                            onChangeHandler={onChangeHandler}/>
                        <hr className={styles.hr}/>
                        <FooterCopyrightsContent
                            copyrightsContent={footerSettings?.copyrightsContent}
                            onChangeHandler={onChangeHandler}/>
                    </div>
                    <div className={styles.form__items}>
                        <FooterContentLayout footerLayout={footerSettings?.contentLayout}
                                             onChangeHandler={onChangeHandler}/>
                    </div>
                </div>
                : <div className={styles.AdminMain__formContainerUnLoaded}>{isLoading && <Loader/>}</div>
            }
        </section>
    );
};

export default FooterSettingsForm;
