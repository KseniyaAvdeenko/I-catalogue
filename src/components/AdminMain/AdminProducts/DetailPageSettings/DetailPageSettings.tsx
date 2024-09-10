import React from 'react';
import styles from "../../AdminMain.module.sass";
import DetailPageColor from "./DetailPageColor";
import {useAppSelector} from "../../../../hooks/redux";
import ContentLayout from "./ContentLayout";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";

const DetailPageSettings = () => {

    const {prodPageSettings, error, isLoading} = useAppSelector(state => state.prodPageSettingsReducer)

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.name, e.target.value)
    }

    return (
        <section id={'prodDetailPageSection'}
                 className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h2 className={styles.AdminMain__heading}>Настройка и контент товаров\услуг</h2>
            <h3 className={styles.AdminMain__subheading}>Детальная страница товара\услуги</h3>
            <div className={styles.AdminMain__formContainer}>
                {prodPageSettings && (
                    <div className={styles.form__items}>
                        <AdminInputContainer type={'color'} name={'background'} inputId={'background'}
                                             value={prodPageSettings.background} checked={false} required={false}
                                             readonly={false} inputClassname={''}
                                             inputContainerClassname={styles.form__inputContainer}
                                             labelClassName={''} label={'Фон страницы товара/услуги'}
                                             isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                        {/*<DetailPageColor background={prodPageSettings?.background}*/}
                        {/*                 isLoading={isLoading} onChangeHandler={onChangeHandler}/>*/}
                        <ContentLayout contentLayout={prodPageSettings.contentLayout}
                                       isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                    </div>
                )}
                {prodPageSettings && (
                    <div className={styles.form__items}>

                    </div>
                )}
                <div className={styles.form__items}></div>
            </div>
        </section>
    );
};

export default DetailPageSettings;
