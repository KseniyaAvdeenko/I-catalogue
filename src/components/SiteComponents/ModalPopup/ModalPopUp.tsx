import React, {useEffect, useState} from 'react';
import {IProdReadOnly} from "../../../interface/IProduct";
import styles from './Modal.module.sass'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import Heading from "../../UI/Heading/Heading";
import ProdImage from "../../UI/ProdImage/ProdImage";
import {getCurrency} from "../../../hooks/getCurrency";
import SiteButton from "../../UI/SiteButton/SiteButton";
import {checkPayment, createOrder} from "../../../store/actions/orderAction";
import {INewOrderBase} from "../../../interface/IOrder";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";

interface IModalPopUpProps {
    isModalOpen: boolean;
    onClose: () => void;
    data: IProdReadOnly | null
}

const ModalPopUp: React.FC<IModalPopUpProps> = ({
                                                    isModalOpen,
                                                    data,
                                                    onClose
                                                }) => {
    const {modalForm} = useAppSelector(state => state.modalFormReducer);
    const [modalClass, setModalClass] = useState<string>(styles.modal)
    const [formData, setFormData] = useState<{ [key: string]: string | number; }>({})
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const dispatch = useAppDispatch()


    useEffect(() => {
        isModalOpen
            ? setModalClass([styles.modal, styles.modal__open].join(' '))
            : setModalClass([styles.modal].join(' '))

        getFormInputs()
        if (data) setTotalPrice(data.price)
    }, [isModalOpen])

    const getFormInputs = () => {
        if (modalForm) modalForm.labels.map(el => setFormData(formData => ({
            ...formData,
            [el.inputIdName]: el.inputType === 'number' ? 1 : ''
        })))
    }
    //console.log(totalPrice)
    // console.log(modalForm, data, formData)

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
        <div className={modalClass} onClick={onClose}>
            {modalForm && (
                <div className={styles.modal__formContainer}
                     onClick={e => e.stopPropagation()}
                     style={{background: modalForm.background}}
                >
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
                    <form onSubmit={e => formOrder(e)} className={styles.modal__form}>
                        <div className={styles.modal__inputItems}>
                            {formData && modalForm.labels.map(el => (
                                <div key={el.id} className={styles.modal__inputItem}>
                                    <label htmlFor={el.inputIdName}>{el.inputLabel}</label>
                                    <input type={el.inputType}
                                           name={el.inputIdName}
                                           id={el.inputIdName}
                                           required={true}
                                           min={1}
                                           value={formData[el.inputIdName]}
                                           onChange={e => changeHandler(e)}
                                    />
                                </div>
                            ))}
                        </div>
                        {data && (<div className={styles.modal__totalPrice}>Итоговая
                            стоимость: {totalPrice} {getCurrency(data.currency)}</div>)}
                        {data && (<SiteButton product={data} type={'button'} btnType={'submit'} btnText={'Оплатить'}
                                              btnClassName={styles.modal__button}/>)}
                    </form>
                </div>
            )}

        </div>
    );
};

export default ModalPopUp;
