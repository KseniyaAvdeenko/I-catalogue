import React, {useState} from 'react';
import styles from '../AdminMain.module.sass'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {IOptions} from "../../../interface/IAdminPageComponets";
import {updateMainPageSettings} from "../../../store/actions/mainPageSettingsAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";
import AdminInputContainer from "../../UI/InputContainers/AdminInputContainer";
import HeadingType from "../HeadingType";
import Loader from "../../UI/Loader/Loader";


const MainPageSettings = () => {
    const {error, isLoading, mainPageSettings} = useAppSelector(state => state.mainPageSettingsReducer);
    const dispatch = useAppDispatch()
    //--states
    const [headingTypeOptionsVisibility, setHeadingTypeOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-20.2rem'
    })
    //--methods
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (mainPageSettings && localStorage.access) {
            e.target.type === 'number'
                ? dispatch(updateMainPageSettings(
                    decodeToken(localStorage.access),
                    mainPageSettings.id,
                    {[e.target.name]: parseInt(e.target.value)}
                ))
                : dispatch(updateMainPageSettings(
                    decodeToken(localStorage.access),
                    mainPageSettings.id,
                    {[e.target.name]: e.target.value}
                ))
        }
    }
    const onChangeHeadingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (mainPageSettings && localStorage.access) {
            if (e.target.type === 'number') {
                dispatch(updateMainPageSettings(
                    decodeToken(localStorage.access),
                    mainPageSettings.id,
                    {
                        headingSettings: {
                            id: mainPageSettings.headingSettings.id,
                            headingContent: mainPageSettings.headingSettings.headingContent,
                            [e.target.name]: parseInt(e.target.value)
                        }
                    }
                ))
            } else if (e.target.type === 'text') {
                dispatch(updateMainPageSettings(
                    decodeToken(localStorage.access),
                    mainPageSettings.id,
                    {headingSettings: {[e.target.name]: e.target.value, id: mainPageSettings.headingSettings.id,}}
                ))
            } else {
                dispatch(updateMainPageSettings(
                    decodeToken(localStorage.access),
                    mainPageSettings.id,
                    {
                        headingSettings: {
                            headingContent: mainPageSettings.headingSettings.headingContent,
                            [e.target.name]: e.target.value,
                            id: mainPageSettings.headingSettings.id,
                        }
                    }
                ))
            }
        }
        if (e.target.name === 'blockHeadingType') setHeadingTypeOptionsVisibility({
            ...headingTypeOptionsVisibility,
            open: false,
            display: 'none',
            bottom: '-20.2rem'
        })
    }

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
    return (
        <main className={styles.AdminMain}>
            <section className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
                <h2 className={styles.AdminMain__heading}>Настройка главной страницы</h2>
                {mainPageSettings
                    ? <div className={styles.AdminMain__formContainer}>
                        <div className={styles.form__items}>
                            <AdminInputContainer
                                type={'color'} name={'background'} inputId={'background'}
                                value={mainPageSettings.background} checked={false} required={false}
                                readonly={false} inputClassname={''}
                                inputContainerClassname={styles.form__inputContainer}
                                labelClassName={''} label={'Фон главной страницы'}
                                onChangeHandler={onChangeHandler}/>
                            <AdminInputContainer
                                type={'color'} name={'prodCardBg'} inputId={'prodCardBg'}
                                value={mainPageSettings.prodCardBg ? mainPageSettings.prodCardBg : '#eeeeee'}
                                checked={false} required={false} readonly={false} inputClassname={''}
                                inputContainerClassname={styles.form__inputContainer}
                                labelClassName={''} label={'Фон карточки товара/услуги'}
                                onChangeHandler={onChangeHandler}/>
                        </div>
                        <div className={styles.form__items}>
                            <AdminInputContainer
                                type={'text'} name={"headingContent"} inputId={"headingContent"}
                                value={mainPageSettings.headingSettings.headingContent} checked={false}
                                required={false} readonly={false} inputClassname={''}
                                inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                                labelClassName={styles.form__inputContainer_label} label={'Заголовок главной страницы'}
                                onChangeHandler={onChangeHeadingHandler}/>
                            <HeadingType blockHeadingType={mainPageSettings.headingSettings.blockHeadingType}
                                         headingTypeOptionsVisibility={headingTypeOptionsVisibility}
                                         onChangeHandler={onChangeHeadingHandler}
                                         changeHeadingTypeOptionsContainerVisibility={changeHeadingTypeOptionsContainerVisibility}/>
                        </div>
                        <div className={styles.form__items}>
                            <AdminInputContainer
                                type={'color'} name={'headingFontColor'} inputId={'headingFontColor'}
                                value={mainPageSettings.headingSettings.headingFontColor}
                                checked={false} required={false} readonly={false} inputClassname={''}
                                inputContainerClassname={styles.form__inputContainer}
                                labelClassName={''} label={'Цвет заголовка'}
                                onChangeHandler={onChangeHeadingHandler}/>
                            <AdminInputContainer
                                type={'number'} name={'headingFontSize'} inputId={'headingFontSize'}
                                value={mainPageSettings.headingSettings.headingFontSize} checked={false}
                                required={false} readonly={false} inputClassname={''}
                                inputContainerClassname={styles.form__inputContainer}
                                labelClassName={''} label={'Размер шрифта заголовка'}
                                onChangeHandler={onChangeHeadingHandler}/>
                            <AdminInputContainer
                                type={'number'} name={'headingFontWeight'} inputId={'headingFontWeight'}
                                value={mainPageSettings.headingSettings.headingFontWeight} checked={false}
                                required={false} readonly={false} inputClassname={''} max={900}
                                inputContainerClassname={styles.form__inputContainer} min={400}
                                labelClassName={''} label={'Жирность текста заголовка'} step={100}
                                onChangeHandler={onChangeHeadingHandler}/>
                        </div>
                    </div>
                    : <div className={styles.AdminMain__formContainerUnLoaded}>{isLoading && (<Loader/>)}</div>
                }
            </section>
        </main>
    );
};

export default MainPageSettings;
