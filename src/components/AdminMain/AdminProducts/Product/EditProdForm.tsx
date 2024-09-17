import React from 'react';
import styles from "../../AdminMain.module.sass";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";
import {IOtherValue, IProdReadOnly} from "../../../../interface/IProduct";
import {IOptions} from "../../../../interface/IAdminPageComponets";
import {useAppSelector} from "../../../../hooks/redux";
import ProdCurrency from "../ProdCurrency";
import ProdImages from "./ProdImages";


interface IEditProdFormProps {
    selectedProd: IProdReadOnly;
    onChangeProdHandler: React.ChangeEventHandler<HTMLDivElement>;
    currencyOptionsVisibility: IOptions;
    selectedProdsAttrs: IOtherValue;
    onProdAttrsChangeHandler: Function;
    deleteProd: Function;
    changeCurrencyOptionsContainerVisibility: React.MouseEventHandler<HTMLDivElement>
}

const EditProdForm: React.FC<IEditProdFormProps> = ({
                                                        selectedProdsAttrs,
                                                        onProdAttrsChangeHandler,
                                                        currencyOptionsVisibility,
                                                        selectedProd,
                                                        onChangeProdHandler,
                                                        deleteProd,
                                                        changeCurrencyOptionsContainerVisibility
                                                    }) => {
    const {prodAttrs} = useAppSelector(state => state.prodAttrsReducer)
    return (
        <div className={styles.prodForm__items}>
            <div className={styles.prodForm__item}>
                <AdminInputContainer
                    type={'text'} name={'name'} inputId={'prodName'}
                    value={selectedProd.name} checked={false} required={true} readonly={false}
                    inputClassname={''} label={'Название товара/услуги'}
                    inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                    labelClassName={styles.form__items_labelMargin}
                    isLoading={false} onChangeHandler={onChangeProdHandler}/>
                <AdminInputContainer
                    type={'number'} name={'price'} inputId={'price'}
                    value={selectedProd.price} checked={false} required={true} readonly={false}
                    inputClassname={''} label={'Цена'} min={0}
                    inputContainerClassname={styles.form__inputContainer}
                    labelClassName={''}
                    isLoading={false} onChangeHandler={onChangeProdHandler}/>
                <ProdCurrency
                    prodCurrency={selectedProd.currency}
                    onChangeHandler={onChangeProdHandler}
                    currencyOptionsVisibility={currencyOptionsVisibility}
                    changeCurrencyOptionsContainerVisibility={changeCurrencyOptionsContainerVisibility}
                />
                <AdminInputContainer
                    type={'text'} name={'priceAttrs'} inputId={'priceAttrs'}
                    value={selectedProd.priceAttrs} checked={false} required={false} readonly={false}
                    inputClassname={''} label={'Примечание к цене'}
                    inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                    labelClassName={styles.form__items_labelMargin}
                    isLoading={false} onChangeHandler={onChangeProdHandler}/>

                {prodAttrs && prodAttrs.map(attr => (
                    <AdminInputContainer key={attr.id}
                                         type={'text'} name={attr.attribute} inputId={attr.attribute}
                                         value={selectedProdsAttrs[attr.attribute]} checked={false} required={false}
                                         readonly={false} inputClassname={''} label={attr.attribute}
                                         inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                                         labelClassName={styles.form__items_labelMargin} isLoading={false}
                                         onChangeHandler={onProdAttrsChangeHandler}/>
                ))}
                <div className={styles.AdminMain__button}
                     onClick={() => deleteProd(selectedProd.id)}>Удалить
                </div>
            </div>
            <div className={styles.prodForm__item}>
                <ProdImages selectedProd={selectedProd}/>
            </div>
        </div>
    );
};

export default EditProdForm;
