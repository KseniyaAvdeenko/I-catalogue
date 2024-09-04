import React from 'react';
import styles from '../AdminMain.module.sass'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import MainPageBackground from "./MainPageBackground";
import ProdCardBackground from "./ProdCardBackground";
import CardQuantityInRow from "./CardQuantityInRow";
import MainPageHeadingFontWeight from "./MainPageHeadingFontWeight";


const MainPageSettings = () => {
    const {error, isLoading, mainPageSettings} = useAppSelector(state => state.mainPageSettingsReducer);
    const dispatch = useAppDispatch()

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.type, {[e.target.name]: e.target.value})
    }
    // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{}
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

                    </div>
                    <div className={styles.form__items}>
                        <MainPageHeadingFontWeight isLoading={isLoading} onChangeHandler={onChangeHandler}
                                                   headingFontWeight={mainPageSettings?.headingSettings?.headingFontWeight}/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainPageSettings;
