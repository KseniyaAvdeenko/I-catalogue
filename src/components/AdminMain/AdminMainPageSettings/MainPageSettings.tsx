import React, {useState} from 'react';
import styles from '../AdminMain.module.sass'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import MainPageBackground from "./MainPageBackground";
import ProdCardBackground from "./ProdCardBackground";
import CardQuantityInRow from "./CardQuantityInRow";
import MainPageHeadingFontWeight from "./MainPageHeadingFontWeight";
import MainPageHeadingFontSize from "./MainPageHeadingFontSize";
import MainPageHeadingFontColor from "./MainPageHeadingFontColor";
import MainPageHeadingContent from "./MainPageHeadingContent";
import {IOptions} from "../../../interface/IAdminPageComponets";
import MainPageHeadingType from "./MainPageHeadingType";
import {updateMainPageSettings} from "../../../store/actions/mainPageSettingsAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";
import mainPageHeadingType from "./MainPageHeadingType";


const MainPageSettings = () => {
    const {error, isLoading, mainPageSettings} = useAppSelector(state => state.mainPageSettingsReducer);
    const dispatch = useAppDispatch()
    //--states
    const [headingTypeOptionsVisibility, setHeadingTypeOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-56.2rem'
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
                            headingContent: mainPageSettings.headingSettings.headingContent,
                            [e.target.name]: parseInt(e.target.value)
                        }
                    }
                ))
            } else if (e.target.type === 'text') {
                dispatch(updateMainPageSettings(
                    decodeToken(localStorage.access),
                    mainPageSettings.id,
                    {headingSettings: {[e.target.name]: e.target.value}}
                ))
            } else {
                dispatch(updateMainPageSettings(
                    decodeToken(localStorage.access),
                    mainPageSettings.id,
                    {
                        headingSettings: {
                            headingContent: mainPageSettings.headingSettings.headingContent,
                            [e.target.name]: e.target.value
                        }
                    }
                ))
            }
        }
        if (e.target.name === 'blockHeadingType') setHeadingTypeOptionsVisibility({
            ...headingTypeOptionsVisibility,
            open: false,
            display: 'none',
            bottom: '-25.2rem'
        })
    }
    return (
        <main className={styles.AdminMain}>
            <section className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
                <h2 className={styles.AdminMain__heading}>Настройка главной страницы</h2>
                <div className={styles.AdminMain__formContainer}>
                    <div className={styles.form__items}>
                        <MainPageBackground mainPageBg={mainPageSettings?.background}
                                            isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                        <ProdCardBackground prodCardBg={mainPageSettings?.prodCardBg}
                                            isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                        <CardQuantityInRow cardQuantityInRow={mainPageSettings?.cardQuantityInRow}
                                           isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                    </div>
                    <div className={styles.form__items}>
                        <MainPageHeadingContent headingContent={mainPageSettings?.headingSettings?.headingContent}
                                                isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                        <MainPageHeadingType blockHeadingType={mainPageSettings?.headingSettings?.blockHeadingType}
                                             headingTypeOptionsVisibility={headingTypeOptionsVisibility}
                                             setHeadingTypeOptionsVisibility={setHeadingTypeOptionsVisibility}
                                             isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                    </div>
                    <div className={styles.form__items}>
                        <MainPageHeadingFontColor headingFontColor={mainPageSettings?.headingSettings?.headingFontColor}
                                                  isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}/>
                        <MainPageHeadingFontSize isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}
                                                 headingFontSize={mainPageSettings?.headingSettings?.headingFontSize}/>
                        <MainPageHeadingFontWeight isLoading={isLoading} onChangeHandler={onChangeHeadingHandler}
                                                   headingFontWeight={mainPageSettings?.headingSettings?.headingFontWeight}/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainPageSettings;
