import React from 'react';
import {useAppSelector} from "../../../../hooks/redux";
import Loader from "../../../UI/Loader/Loader";
import styles from '../Preview.module.sass';
import Heading from "../../../UI/Heading/Heading";
import DefaultImg from "../../../../assets/img/defaultImg.svg";
import {getCurrency} from "../../../../hooks/getCurrency";
import modalStyles from '../../../SiteComponents/ModalPopup/Modal.module.sass';
import PreviewButtonElement from "./PreviewButtonElement";


const PreviewModalFormElement = () => {

    const {modalForm, isLoading} = useAppSelector(state => state.modalFormReducer);

    return modalForm ? (
        <div className={modalStyles.modal__formContainer} style={{background: modalForm.background}}>
            <Heading pageHeading={modalForm.headingSettings}
                     headingContent={modalForm.headingSettings.headingContent}
            />
            <div className={modalStyles.modal__prodContent}>
                <div className={modalStyles.modal__prodContent__imageWrapper}><img src={DefaultImg}
                                                                                   alt={'default image'}/></div>
                <div className={modalStyles.modal__prodContent__podItems}>
                    <h4 className={modalStyles.modal__prodContent__name}>Название товара</h4>
                    <p><b>Цена:</b> 1 {getCurrency('RUB')}</p>
                </div>
            </div>
            <div className={modalStyles.modal__form}>
                <div className={modalStyles.modal__inputItems}>
                    {modalForm.labels.map(el => (
                        <div className={modalStyles.modal__inputItem}>
                            <label htmlFor={el.inputIdName}>{el.inputLabel}</label>
                            <input type={el.inputType}
                                   name={el.inputIdName}
                                   id={el.inputIdName}
                                   min={1}
                            />
                        </div>
                    ))}
                </div>
                <div className={modalStyles.modal__totalPrice} style={{marginBottom: '3rem'}}>Итоговая стоимость: 1 {getCurrency('RUB')}</div>
                <PreviewButtonElement btnText={'Оплатить'}/>
            </div>
        </div>
    ) : (<>{isLoading && (<Loader/>)}</>)
};

export default PreviewModalFormElement;
