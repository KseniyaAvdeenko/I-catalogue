import React from 'react';
import styles from "../../AdminMain.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import ButtonBorderColor from "./ButtonBorderColor";
import ButtonBorderWidth from "./ButtonBorderWidth";
import {updateButtonSettings} from "../../../../store/actions/buttonSettingsAction";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";
import Loader from "../../../UI/Loader/Loader";

const ButtonSettingsForm = () => {
    const {buttonSettings, error, isLoading} = useAppSelector(state => state.buttonSettingsReducer);
    const dispatch = useAppDispatch();
    //methods
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (buttonSettings && localStorage.access) {
            if (e.target.type === 'checkbox') {
                dispatch(updateButtonSettings(decodeToken(localStorage.access), buttonSettings.id, {[e.target.name]: e.target.checked}))
            } else if (e.target.type === 'number') {
                dispatch(updateButtonSettings(decodeToken(localStorage.access), buttonSettings.id, {[e.target.name]: parseInt(e.target.value)}))
            } else {
                dispatch(updateButtonSettings(decodeToken(localStorage.access), buttonSettings.id, {[e.target.name]: e.target.value}))
            }
        }
    }
    return (
        <section id={'buttonSettingsSection'}
                 className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h3 className={styles.AdminMain__subheading}>Настройка кнопок</h3>
            {buttonSettings
                ? <div className={styles.AdminMain__formContainer}>
                    <div className={styles.form__items}>
                        <AdminInputContainer
                            type={'number'} name={'buttonBorderRadius'} inputId={'buttonBorderRadius'}
                            value={buttonSettings.buttonBorderRadius} checked={false}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Скругление углов кнопки'}
                            onChangeHandler={onChangeHandler}/>
                        <AdminInputContainer
                            type={'color'} name={'buttonBackground'} inputId={'buttonBackground'}
                            value={buttonSettings.buttonBackground} checked={false} required={false}
                            readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Цвет кнопки'}
                            onChangeHandler={onChangeHandler}/>
                    </div>
                    <div className={styles.form__items}>
                        <AdminInputContainer
                            type={'checkbox'} name={'buttonBorders'} inputId={'buttonBorders'}
                            value={''} checked={buttonSettings.buttonBorders}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Границы кнопки'}
                            onChangeHandler={onChangeHandler}/>
                        <ButtonBorderColor onChangeHandler={onChangeHandler}
                                           buttonBorderColor={buttonSettings?.buttonBorderColor}
                                           buttonBorders={buttonSettings?.buttonBorders ? buttonSettings.buttonBorders : false}/>
                        <ButtonBorderWidth onChangeHandler={onChangeHandler}
                                           buttonBorderWidth={buttonSettings?.buttonBorderWidth}
                                           buttonBorders={buttonSettings?.buttonBorders ? buttonSettings.buttonBorders : false}/>
                    </div>
                    <div className={styles.form__items}>
                        <AdminInputContainer
                            type={'color'} name={'buttonTextColor'} inputId={'buttonTextColor'}
                            value={buttonSettings.buttonTextColor} checked={false} required={false}
                            readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Цвет текста кнопки'}
                            onChangeHandler={onChangeHandler}/>
                        <AdminInputContainer
                            type={'number'} name={'buttonTextFontSize'} inputId={'buttonTextFontSize'}
                            value={buttonSettings.buttonTextFontSize} checked={false}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Размер шрифта кнопки'}
                            onChangeHandler={onChangeHandler}/>
                    </div>
                </div>
                : <div className={styles.AdminMain__formContainerUnLoaded}>{isLoading && <Loader/>}</div>
            }
        </section>
    );
};

export default ButtonSettingsForm;
