import React, {useEffect, useState} from 'react';
import {IProdReadOnly} from "../../../interface/IProduct";
import styles from './Modal.module.sass'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import Heading from "../../UI/Heading/Heading";
import ProdImage from "../../UI/ProdImage/ProdImage";
import {getCurrency} from "../../../hooks/getCurrency";
import SiteButton from "../../UI/SiteButton/SiteButton";
import {createOrder} from "../../../store/actions/orderAction";
import {INewOrderBase} from "../../../interface/IOrder";
import ModalInputContainer from "./ModalInputContainer";
import Loader from "../../UI/Loader/Loader";
import CloseButton from '../../../assets/img/closeCross.svg';
import {useWindowScrollPosition} from "../../../hooks/useWindowScrollPosition";

interface IModalPopUpProps {
    isModalOpen: boolean;
    onClose: () => void;
    data: IProdReadOnly | null;
    formData: { [key: string]: string | number; };
    getFormInputs: Function;
    setFormData: Function
}

const ModalPopUp: React.FC<IModalPopUpProps> = ({
                                                    setFormData,
                                                    isModalOpen,
                                                    data,
                                                    onClose,
                                                    formData,
                                                    getFormInputs
                                                }) => {

    const {modalForm, isLoading} = useAppSelector(state => state.modalFormReducer);
    const [modalClass, setModalClass] = useState<string>(styles.modal)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const dispatch = useAppDispatch()
    const scrollPosition = useWindowScrollPosition()
    const [topModalPosition, setTopModalPosition] = useState<number>(0)

    useEffect(() => {
        isModalOpen
            ? setModalClass([styles.modal, styles.modal__open].join(' '))
            : setModalClass([styles.modal].join(' '))
    }, [isModalOpen])


    useEffect(() => {
        if (data) setTotalPrice(data.price)
    }, [data])

    useEffect(() => {
        setTopModalPosition(scrollPosition)
    }, [scrollPosition])


    const formOrder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (data) {
            const newOrder: INewOrderBase = {
                total_price: totalPrice,
                form_input_values: formData,
                prod: data.id,
                currency: data.currency
            }
            dispatch(createOrder(newOrder))
        }
        getFormInputs()
        onClose()
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
        })
        if (data && e.target.type === 'number') setTotalPrice(data.price * parseInt(e.target.value))
    }

    return (
        <div className={modalClass} onClick={onClose} style={{top: topModalPosition + 'px'}}>
            {modalForm
                ? <div className={styles.modal__formContainer}
                       onClick={e => e.stopPropagation()}
                       style={{background: modalForm.background}}>
                    <div className={styles.modal__formContainer__closeBtn}
                    onClick={onClose}><img src={CloseButton} alt="Закрыть"/></div>
                    <Heading pageHeading={modalForm.headingSettings}
                             headingContent={modalForm.headingSettings.headingContent}/>
                    {data && (<div className={styles.modal__prodContent}>
                        <ProdImage images={data.images}
                                   imageWrapperClassname={styles.modal__prodContent__imageWrapper}/>
                        <div className={styles.modal__prodContent__podItems}>
                            <h4 className={styles.modal__prodContent__name}>{data.name}</h4>
                            <p>
                                <b>Цена:</b> {data.price} {getCurrency(data.currency)} {data.priceAttrs && `/ ${data.priceAttrs}`}
                            </p>
                        </div>
                    </div>)}
                    {formData && (<form onSubmit={e => formOrder(e)} className={styles.modal__form}>
                        <div className={styles.modal__inputItems}>
                            {modalForm.labels.map(el => (
                                <ModalInputContainer key={el.id} label={el} formData={formData}
                                                     changeHandler={changeHandler}/>
                            ))}
                        </div>
                        {data && (<div className={styles.modal__totalPrice}>Итоговая
                            стоимость: {totalPrice} {getCurrency(data.currency)}</div>)}
                        {data && (<SiteButton product={data} type={'button'} btnType={'submit'} btnText={'Оплатить'}
                                              btnClassName={styles.modal__button}/>)}
                    </form>)}
                </div>
                : <div className={styles.modal__formContainer}>{isLoading && (<Loader/>)}</div>
            }
        </div>
    );
};

export default ModalPopUp;
