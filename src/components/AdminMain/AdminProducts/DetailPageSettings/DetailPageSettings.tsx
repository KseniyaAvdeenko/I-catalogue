import React, {useState} from 'react';
import styles from "../../AdminMain.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import DetailPageContentLayout from "./DetailPageContentLayout";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";
import {IOptions} from "../../../../interface/IAdminPageComponets";
import DetailPageHeadingType from "./DetailPageHeadingType";
import {updateProdPageSettings} from "../../../../store/actions/prodPageSettingsAction";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";

const DetailPageSettings = () => {

        const {prodPageSettings, error, isLoading} = useAppSelector(state => state.prodPageSettingsReducer)
        const dispatch = useAppDispatch();

        //states
        const [headingTypeOptionsVisibility, setHeadingTypeOptionsVisibility] = useState<IOptions>({
            open: false, display: 'none', bottom: '-56.2rem'
        })

        //methods
        function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
            if (prodPageSettings && localStorage.access) {
                const detailedPageSettings = {
                    headingSettings: {
                        id: prodPageSettings.headingSettings.id,
                        headingContent: prodPageSettings.headingSettings.headingContent
                    }
                }
                if (e.target.name === 'background' || "contentLayout") {
                    dispatch(updateProdPageSettings(
                        decodeToken(localStorage.access),
                        prodPageSettings.id,
                        Object.assign({[e.target.name]: e.target.value}, detailedPageSettings)
                    ))
                } else {
                    if (e.target.name === 'headingContent') {
                        detailedPageSettings.headingSettings.headingContent = e.target.value
                        dispatch(updateProdPageSettings(
                            decodeToken(localStorage.access), prodPageSettings.id, detailedPageSettings))
                    } else {
                        dispatch(updateProdPageSettings(
                            decodeToken(localStorage.access),
                            prodPageSettings.id,
                            {
                                headingSettings: {
                                    id: prodPageSettings.headingSettings.id,
                                    headingContent: prodPageSettings.headingSettings.headingContent,
                                    [e.target.name]: e.target.value
                                }
                            }
                        ))
                    }
                    console.log('heading')
                }
            }

            if (e.target.name === 'blockHeadingType') {
                setHeadingTypeOptionsVisibility({
                    ...headingTypeOptionsVisibility,
                    open: false,
                    display: 'none',
                    bottom: '-25.2rem'
                })
            }
        }

        return (
            <section id={'prodDetailPageSection'}
                     className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
                <h2 className={styles.AdminMain__heading}>Настройка и контент товаров\услуг</h2>
                <h3 className={styles.AdminMain__subheading}>Детальная страница товара\услуги</h3>
                {prodPageSettings
                    ? <div className={styles.AdminMain__formContainer} style={{gridTemplateColumns: '1fr 2fr'}}>
                        <div className={styles.form__items}>
                            <AdminInputContainer type={'color'} name={'background'} inputId={'background'}
                                                 value={prodPageSettings.background} checked={false} required={false}
                                                 readonly={false} inputClassname={''}
                                                 inputContainerClassname={styles.form__inputContainer}
                                                 labelClassName={''} label={'Фон страницы товара/услуги'}
                                                 isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                            <DetailPageContentLayout contentLayout={prodPageSettings.contentLayout}
                                                     isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                        </div>
                        <div className={styles.form__items}>
                            <AdminInputContainer type={'text'} name={'headingContent'}
                                                 inputId={'headingContent'} required={true}
                                                 value={prodPageSettings.headingSettings.headingContent}
                                                 checked={false} readonly={false} inputClassname={''}
                                                 inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                                                 labelClassName={styles.form__inputContainer_label}
                                                 label={'Заголовок страницы'}
                                                 isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                            <AdminInputContainer type={'color'} name={'headingFontColor'} inputId={'headingFontColor'}
                                                 value={prodPageSettings.headingSettings.headingFontColor}
                                                 checked={false} required={false} readonly={false}
                                                 inputClassname={''}
                                                 inputContainerClassname={styles.form__inputContainer}
                                                 labelClassName={''} label={'Цвет  заголовка'}
                                                 isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                            <AdminInputContainer type={'number'} name={'headingFontSize'}
                                                 inputId={'headingFontSize'} required={true}
                                                 value={prodPageSettings.headingSettings.headingFontSize}
                                                 checked={false} readonly={false} inputClassname={''}
                                                 inputContainerClassname={styles.form__inputContainer}
                                                 labelClassName={''} label={'Размер шрифта заголовка'}
                                                 isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                            <AdminInputContainer type={'number'} name={'headingFontWeight'} min={400} step={100}
                                                 inputId={'headingFontWeight'} required={true} max={900}
                                                 value={prodPageSettings.headingSettings.headingFontWeight}
                                                 checked={false} readonly={false} inputClassname={''}
                                                 inputContainerClassname={styles.form__inputContainer}
                                                 labelClassName={''} label={'Жирность текста заголовка'}
                                                 isLoading={isLoading} onChangeHandler={onChangeHandler}/>

                            <DetailPageHeadingType
                                blockHeadingType={prodPageSettings.headingSettings.blockHeadingType}
                                headingTypeOptionsVisibility={headingTypeOptionsVisibility}
                                setHeadingTypeOptionsVisibility={setHeadingTypeOptionsVisibility}
                                isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                        </div>
                    </div>
                    : <div className={styles.AdminMain__formContainer}></div>}

            </section>
        )
    }
;

export default DetailPageSettings;
