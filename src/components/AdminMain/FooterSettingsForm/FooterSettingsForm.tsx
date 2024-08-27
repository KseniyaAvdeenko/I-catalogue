import React, {useState} from 'react';
import styles from "../AdminMain.module.sass";
import FooterBackground from "./FooterBackground";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {updateFooterSettings} from "../../../store/actions/footerSettingsAction";
import FooterTopBorder from "./FooterTopBorder";
import FooterTopBorderColor from "./FooterTopBorderColor";
import FooterFontColor from "./FooterFontColor";
import FooterNavLinksFontSize from "./FooterNavLinksFontSize";
import FooterContactsFontSize from "./FooterContactsFontSize";
import FooterNavLinksFontColorHover from "./FooterNavLinksFontColorHover";
import FooterCopyrightsContent from "./FooterCopyrightsContent";
import FooterContentLayout from "./FooterContentLayout";

const FooterSettingsForm = () => {
    const {footerSettings, error, isLoading} = useAppSelector(state => state.footerSettingsReducer);
    const dispatch = useAppDispatch();
    //methods
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (footerSettings) {
            e.target.type === 'checkbox'
                ? dispatch(updateFooterSettings(footerSettings.id, {[e.target.name]: e.target.checked}))
                : dispatch(updateFooterSettings(footerSettings.id, {[e.target.name]: e.target.value}))
        }
    }
    console.log(footerSettings)
    return (
        <section id={'footerSettingsSection'} className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h3 className={styles.AdminMain__subheading}>Настройка “подвала” сайта</h3>
            <div className={styles.AdminMain__formContainer}>
                <div className={styles.form__items}>
                    <FooterBackground isLoading={isLoading} onChangeHandler={onChangeHandler}
                                      footerBg={footerSettings?.background}/>
                    <FooterTopBorder isLoading={isLoading} onChangeHandler={onChangeHandler}
                                     footerBorderTop={footerSettings?.footerBorderTop ?? false}/>
                    <FooterTopBorderColor isLoading={isLoading} onChangeHandler={onChangeHandler}
                                          borderTopColor={footerSettings?.borderTopColor}
                                          footerTopBorder={footerSettings?.footerBorderTop ?? false}/>
                    <hr className={styles.hr}/>
                    <FooterFontColor isLoading={isLoading} onChangeHandler={onChangeHandler}
                                     footerFontColor={footerSettings?.fontColor}/>
                    <hr className={styles.hr}/>
                    <FooterNavLinksFontSize navLinksFontSize={footerSettings?.navLinksFontSize}
                                            isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                    <FooterContactsFontSize footerContactsFontSize={footerSettings?.contactsFontSize}
                                            isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                </div>
                <div className={styles.form__items}>
                    <FooterNavLinksFontColorHover footerNavLinksFontColorHover={footerSettings?.navLinksFontColorHover}
                                                  isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                    <hr className={styles.hr}/>
                    <FooterCopyrightsContent copyrightsContent={footerSettings?.copyrightsContent}
                                             isLoading={isLoading} onChangeHandler={onChangeHandler}/>

                </div>
                <div className={styles.form__items}>
                    <FooterContentLayout footerLayout={footerSettings?.contentLayout} onChangeHandler={onChangeHandler}/>
                </div>
            </div>
        </section>
    );
};

export default FooterSettingsForm;
