import React from 'react';
import styles from "../../AdminMain.module.sass";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";
import {IProd} from "../../../../interface/IProduct";


interface IEditProdFormProps{
    selectedProd: IProd;
    onChangeHandler: Function
}

const EditProdForm: React.FC<IEditProdFormProps> = ({selectedProd, onChangeHandler}) => {
    return (
         <div className={styles.prodForm__items}>
                    <div className={styles.prodForm__item}>
                        <AdminInputContainer
                            type={'text'} name={'name'} inputId={'prodName'}
                            value={selectedProd.name} checked={false} required={true} readonly={false}
                            inputClassname={''} label={'Название товара/услуги'}
                            inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                            labelClassName={styles.form__items_labelMargin}
                            isLoading={false} onChangeHandler={onChangeHandler}/>
                        {/*<AdminInputContainer*/}
                        {/*    type={'number'} name={'price'} inputId={'price'}*/}
                        {/*    value={newProd.price} checked={false} required={true} readonly={false}*/}
                        {/*    inputClassname={''} label={'Цена'} min={0}*/}
                        {/*    inputContainerClassname={styles.form__inputContainer}*/}
                        {/*    labelClassName={''}*/}
                        {/*    isLoading={false} onChangeHandler={onChangeHandler}/>*/}
                        {/*<ProdCurrency*/}
                        {/*    newProdCurrency={newProd.currency}*/}
                        {/*    onChangeHandler={onChangeHandler}*/}
                        {/*    currencyOptionsVisibility={currencyOptionsVisibility}*/}
                        {/*    setCurrencyOptionsVisibility={setCurrencyOptionsVisibility}*/}
                        {/*/>*/}
                        {/*<AdminInputContainer*/}
                        {/*    type={'text'} name={'priceAttrs'} inputId={'priceAttrs'}*/}
                        {/*    value={newProd.priceAttrs} checked={false} required={false} readonly={false}*/}
                        {/*    inputClassname={''} label={'Примечание к цене'}*/}
                        {/*    inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}*/}
                        {/*    labelClassName={styles.form__items_labelMargin}*/}
                        {/*    isLoading={false} onChangeHandler={onChangeHandler}/>*/}


                            {/*<AdminInputContainer key={attr.id}*/}
                            {/*                     type={'text'} name={attr.attribute} inputId={attr.attribute}*/}
                            {/*                     value={newProdAttrs[attr.attribute]} checked={false} required={false}*/}
                            {/*                     readonly={false}*/}
                            {/*                     inputClassname={''} label={attr.attribute}*/}
                            {/*                     inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}*/}
                            {/*                     labelClassName={styles.form__items_labelMargin}*/}
                            {/*                     isLoading={false} onChangeHandler={onChangeProdAttrsHandler}/>*/}

                        {/*<button disabled={!newProd.name && !newProd.price} className={styles.AdminMain__button}*/}
                        {/*        onClick={saveNewProd}>Сохранить*/}
                        {/*</button>*/}
                        {/*<button disabled={!product && !files.length} className={styles.AdminMain__button}*/}
                        {/*        onClick={saveImages}>Удалить*/}
                        {/*</button>*/}
                    </div>
                </div>
    );
};

export default EditProdForm;
