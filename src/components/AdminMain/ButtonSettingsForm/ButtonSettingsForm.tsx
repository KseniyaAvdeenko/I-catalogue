import React from 'react';
import styles from "../AdminMain.module.sass";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {updateHeaderSettings} from "../../../store/actions/headerSettingsAction";
import ButtonBorderRadius from "./ButtonBorderRadius";
import ButtonBackground from "./ButtonBackground";
import ButtonBorders from "./ButtonBorders";
import ButtonBorderColor from "./ButtonBorderColor";
import ButtonBorderWidth from "./ButtonBorderWidth";
import ButtonTextColor from "./ButtonTextColor";
import ButtonTextFontSize from "./ButtonTextFontSize";
import {updateButtonSettings} from "../../../store/actions/buttonSettingsAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";

const ButtonSettingsForm = () => {
    const {buttonSettings, error, isLoading, restored} = useAppSelector(state => state.buttonSettingsReducer);
    const dispatch = useAppDispatch();
    //methods
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (buttonSettings && localStorage.access) {
            e.target.type === 'checkbox'
                ? dispatch(updateButtonSettings(decodeToken(localStorage.access), buttonSettings.id, {[e.target.name]: e.target.checked}))
                : dispatch(updateButtonSettings(decodeToken(localStorage.access), buttonSettings.id, {[e.target.name]: e.target.value}))
        }
    }
    return (
        <section id={'buttonSettingsSection'}
                 className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h3 className={styles.AdminMain__subheading}>Настройка кнопок</h3>
            <div className={styles.AdminMain__formContainer}>
                <div className={styles.form__items}>
                    <ButtonBorderRadius isLoading={isLoading} onChangeHandler={onChangeHandler}
                                        buttonBorderRadius={buttonSettings?.buttonBorderRadius}/>
                    <ButtonBackground isLoading={isLoading} onChangeHandler={onChangeHandler}
                                      buttonBackground={buttonSettings?.buttonBackground}/>
                </div>
                <div className={styles.form__items}>
                    <ButtonBorders isLoading={isLoading} onChangeHandler={onChangeHandler}
                                   buttonBorders={buttonSettings?.buttonBorders ? buttonSettings.buttonBorders:false}/>
                    <ButtonBorderColor isLoading={isLoading} onChangeHandler={onChangeHandler}
                                       buttonBorderColor={buttonSettings?.buttonBorderColor}
                                       buttonBorders={buttonSettings?.buttonBorders ? buttonSettings.buttonBorders:false}/>
                    <ButtonBorderWidth isLoading={isLoading} onChangeHandler={onChangeHandler}
                                       buttonBorderWidth={buttonSettings?.buttonBorderWidth}
                                       buttonBorders={buttonSettings?.buttonBorders ? buttonSettings.buttonBorders:false}/>
                </div>
                <div className={styles.form__items}>
                    <ButtonTextColor isLoading={isLoading} onChangeHandler={onChangeHandler}
                                     buttonTextColor={buttonSettings?.buttonTextColor}/>
                    <ButtonTextFontSize isLoading={isLoading} onChangeHandler={onChangeHandler}
                                        buttonTextFontSize={buttonSettings?.buttonTextFontSize}/>
                </div>
            </div>
        </section>
    );
};

export default ButtonSettingsForm;
