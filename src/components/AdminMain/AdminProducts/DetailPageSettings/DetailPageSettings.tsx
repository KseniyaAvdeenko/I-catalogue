import React, {useState} from 'react';
import styles from "../../AdminMain.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import DetailPageContentLayout from "./DetailPageContentLayout";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";
import {IOptions} from "../../../../interface/IAdminPageComponets";
import DetailPageHeadingType from "./DetailPageHeadingType";
import {updateProdPageSettings} from "../../../../store/actions/prodPageSettingsAction";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import Loader from "../../../UI/Loader/Loader";

const DetailPageSettings = () => {

        const {prodPageSettings, error, isLoading} = useAppSelector(state => state.prodPageSettingsReducer)
        const dispatch = useAppDispatch();

        //states
        const [headingTypeOptionsVisibility, setHeadingTypeOptionsVisibility] = useState<IOptions>({
            open: false, display: 'none', bottom: '-20.2rem'
        })

        //methods

        function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
            if (prodPageSettings) dispatch(updateProdPageSettings(
                decodeToken(localStorage.access),
                prodPageSettings.id,
                {[e.target.name]: e.target.value}))
        }

        const onChangeHeadingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (prodPageSettings) dispatch(updateProdPageSettings(decodeToken(localStorage.access), prodPageSettings.id, {
                headingSettings: {
                    id: prodPageSettings.headingSettings.id, [e.target.name]: e.target.value
                }
            }))

            if (e.target.name === 'blockHeadingType') {
                setHeadingTypeOptionsVisibility({
                    ...headingTypeOptionsVisibility,
                    open: false,
                    display: 'none',
                    bottom: '-20.2rem'
                })
            }
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
                                                 onChangeHandler={onChangeHandler}/>
                            <DetailPageContentLayout contentLayout={prodPageSettings.contentLayout}
                                                     onChangeHandler={onChangeHandler}/>
                        </div>
                        <div className={styles.form__items}>
                            <AdminInputContainer type={'text'} name={'headingContent'}
                                                 inputId={'headingContent'} required={true}
                                                 value={prodPageSettings.headingSettings.headingContent}
                                                 checked={false} readonly={false} inputClassname={''}
                                                 inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                                                 labelClassName={styles.form__inputContainer_label}
                                                 label={'Заголовок страницы'}
                                                 onChangeHandler={onChangeHeadingHandler}/>
                            <AdminInputContainer type={'color'} name={'headingFontColor'} inputId={'headingFontColor'}
                                                 value={prodPageSettings.headingSettings.headingFontColor}
                                                 checked={false} required={false} readonly={false}
                                                 inputClassname={''}
                                                 inputContainerClassname={styles.form__inputContainer}
                                                 labelClassName={''} label={'Цвет  заголовка'}
                                                 onChangeHandler={onChangeHeadingHandler}/>
                            <AdminInputContainer type={'number'} name={'headingFontSize'}
                                                 inputId={'headingFontSize'} required={true}
                                                 value={prodPageSettings.headingSettings.headingFontSize}
                                                 checked={false} readonly={false} inputClassname={''}
                                                 inputContainerClassname={styles.form__inputContainer}
                                                 labelClassName={''} label={'Размер шрифта заголовка'}
                                                 onChangeHandler={onChangeHeadingHandler}/>
                            <AdminInputContainer type={'number'} name={'headingFontWeight'} min={400} step={100}
                                                 inputId={'headingFontWeight'} required={true} max={900}
                                                 value={prodPageSettings.headingSettings.headingFontWeight}
                                                 checked={false} readonly={false} inputClassname={''}
                                                 inputContainerClassname={styles.form__inputContainer}
                                                 labelClassName={''} label={'Жирность текста заголовка'}
                                                 onChangeHandler={onChangeHeadingHandler}/>

                            <DetailPageHeadingType
                                changeHeadingTypeOptionsContainerVisibility={changeHeadingTypeOptionsContainerVisibility}
                                blockHeadingType={prodPageSettings.headingSettings.blockHeadingType}
                                headingTypeOptionsVisibility={headingTypeOptionsVisibility}
                                onChangeHandler={onChangeHeadingHandler}/>
                        </div>
                    </div>
                    : <div className={styles.AdminMain__formContainer}>{isLoading && (<Loader/>)}</div>}

            </section>
        )
    }
;

export default DetailPageSettings;
