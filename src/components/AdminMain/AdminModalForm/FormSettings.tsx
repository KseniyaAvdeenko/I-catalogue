import React, {useState} from 'react';
import styles from "../AdminMain.module.sass";
import AdminInputContainer from "../../UI/InputContainers/AdminInputContainer";
import HeadingType from "../HeadingType";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {IOptions} from "../../../interface/IAdminPageComponets";
import modalFormSettings from "./ModalFormSettings";
import {updateModalFormSettings} from "../../../store/actions/modalFormAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";

const FormSettings = () => {
    const {modalForm, error, isLoading} = useAppSelector(state => state.modalFormReducer)
    const dispatch = useAppDispatch()
    //--states
    const [headingTypeOptionsVisibility, setHeadingTypeOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-20.2rem'
    })

    //--methods
    const changeHeadingTypeOptionsContainerVisibility = () => {
        headingTypeOptionsVisibility.open
            ? setHeadingTypeOptionsVisibility({
                ...headingTypeOptionsVisibility,
                open: false,
                display: 'none',
                bottom: '-20.2rem'
            })
            : setHeadingTypeOptionsVisibility({
                ...headingTypeOptionsVisibility,
                open: true,
                display: 'flex',
                bottom: '-20.2rem'
            })
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        if (modalForm) {
            const form = {headingSettings: modalForm.headingSettings}
            dispatch(updateModalFormSettings(decodeToken(localStorage.access), modalForm.id,
                Object.assign({[e.target.name]: e.target.value}, form)))
        }
    }

    function onChangeHeadingHandler(e: React.ChangeEvent<HTMLInputElement>) {
        if (modalForm) {
            e.target.name === 'headingContent'
                ? dispatch(updateModalFormSettings
                    (decodeToken(localStorage.access), modalForm.id,
                        {headingSettings: {id: modalForm.headingSettings.id, [e.target.name]: e.target.value}})
                )
                : dispatch(updateModalFormSettings(
                    decodeToken(localStorage.access), modalForm.id,
                    {
                        headingSettings: {
                            id: modalForm.headingSettings.id,
                            headingContent: modalForm.headingSettings.headingContent,
                            [e.target.name]: e.target.value
                        }
                    }
                ))
        }
        if (e.target.name === 'blockHeadingType') setHeadingTypeOptionsVisibility({
            ...headingTypeOptionsVisibility,
            open: false,
            display: 'none',
            bottom: '-20.2rem'
        })
    }

    return (
        <section id={'modalFormSettingsSection'}
                 className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h2 className={styles.AdminMain__heading}>Настройка модального окна</h2>
            {modalForm
                ? <div className={styles.AdminMain__formContainer}>
                    <div className={styles.form__items} style={{justifyContent: 'center'}}>
                        <AdminInputContainer
                            type={'color'} name={'background'} inputId={'background'}
                            value={modalForm.background} checked={false} required={false}
                            readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Фон модального окна'}
                            isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                    </div>
                    <div className={styles.form__items}>
                        <AdminInputContainer
                            type={'text'} name={"headingContent"} inputId={"headingContent"}
                            value={modalForm.headingSettings.headingContent} checked={false}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                            labelClassName={styles.form__inputContainer_label} label={'Заголовок модального окна'}
                            isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                        <HeadingType blockHeadingType={modalForm.headingSettings.blockHeadingType}
                                     headingTypeOptionsVisibility={headingTypeOptionsVisibility}
                                     isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}
                                     changeHeadingTypeOptionsContainerVisibility={changeHeadingTypeOptionsContainerVisibility}
                        />
                    </div>
                    <div className={styles.form__items}>
                        <AdminInputContainer
                            type={'color'} name={'headingFontColor'} inputId={'headingFontColor'}
                            value={modalForm.headingSettings.headingFontColor}
                            checked={false} required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Цвет заголовка'}
                            isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                        <AdminInputContainer
                            type={'number'} name={'headingFontSize'} inputId={'headingFontSize'}
                            value={modalForm.headingSettings.headingFontSize} checked={false}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Размер шрифта заголовка'}
                            isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                        <AdminInputContainer
                            type={'number'} name={'headingFontWeight'} inputId={'headingFontWeight'}
                            value={modalForm.headingSettings.headingFontWeight} checked={false}
                            required={false} readonly={false} inputClassname={''} max={900}
                            inputContainerClassname={styles.form__inputContainer} min={400}
                            labelClassName={''} label={'Жирность текста заголовка'} step={100}
                            isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                    </div>
                </div>
                : <div className={styles.AdminMain__formContainer}></div>
            }
        </section>
    );
};

export default FormSettings;
