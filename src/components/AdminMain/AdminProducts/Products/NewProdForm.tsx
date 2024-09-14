import React, {useState} from 'react';
import styles from "../../AdminMain.module.sass";
import {IOtherValue, IProd, IProdAttrs, IProdBase} from "../../../../interface/IProduct";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";
import ProdCurrency from "./ProdCurrency";
import {IFile, IOptions} from "../../../../interface/IAdminPageComponets";
import UploadImages from "./UploadImages";

interface INewProdFormProps {
    prodAttrs: IProdAttrs[] | [];
    newProd: IProdBase
    onChangeHandler: Function;
    currencyOptionsVisibility: IOptions
    setCurrencyOptionsVisibility: Function;
    newProdAttrs: IOtherValue;
    onChangeProdAttrsHandler: Function;
    files: IFile[];
    onImageChangeHandler: Function;
    makeImgMainHandler: Function;
    saveNewProd: React.MouseEventHandler<HTMLButtonElement>
    saveImages: React.MouseEventHandler<HTMLButtonElement>
    product: IProd|null
}

const NewProdForm: React.FC<INewProdFormProps> = ({
                                                      newProdAttrs,
                                                      currencyOptionsVisibility,
                                                      setCurrencyOptionsVisibility,
                                                      prodAttrs,
                                                      newProd,
                                                      onChangeHandler,
                                                      onChangeProdAttrsHandler,
                                                      files,
                                                      onImageChangeHandler,
                                                      makeImgMainHandler,
                                                      saveNewProd,
                                                      saveImages,
                                                      product
                                                  }) => {


    return (
        <div className={styles.prodForm__items}>
            <div className={styles.prodForm__item}>
                <AdminInputContainer
                    type={'text'} name={'name'} inputId={'prodName'}
                    value={newProd.name} checked={false} required={true} readonly={false}
                    inputClassname={''} label={'Название товара/услуги'}
                    inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                    labelClassName={styles.form__items_labelMargin}
                    isLoading={false} onChangeHandler={onChangeHandler}/>
                <AdminInputContainer
                    type={'number'} name={'price'} inputId={'price'}
                    value={newProd.price} checked={false} required={true} readonly={false}
                    inputClassname={''} label={'Цена'} min={0}
                    inputContainerClassname={styles.form__inputContainer}
                    labelClassName={''}
                    isLoading={false} onChangeHandler={onChangeHandler}/>
                <ProdCurrency
                    newProdCurrency={newProd.currency}
                    onChangeHandler={onChangeHandler}
                    currencyOptionsVisibility={currencyOptionsVisibility}
                    setCurrencyOptionsVisibility={setCurrencyOptionsVisibility}
                />
                <AdminInputContainer
                    type={'text'} name={'priceAttrs'} inputId={'priceAttrs'}
                    value={newProd.priceAttrs} checked={false} required={false} readonly={false}
                    inputClassname={''} label={'Примечание к цене'}
                    inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                    labelClassName={styles.form__items_labelMargin}
                    isLoading={false} onChangeHandler={onChangeHandler}/>

                {prodAttrs && prodAttrs.map(attr => (
                    <AdminInputContainer key={attr.id}
                                         type={'text'} name={attr.attribute} inputId={attr.attribute}
                                         value={newProdAttrs[attr.attribute]} checked={false} required={false}
                                         readonly={false}
                                         inputClassname={''} label={attr.attribute}
                                         inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                                         labelClassName={styles.form__items_labelMargin}
                                         isLoading={false} onChangeHandler={onChangeProdAttrsHandler}/>
                ))}
                <button disabled={!newProd.name && !newProd.price} className={styles.AdminMain__button} onClick={saveNewProd}>Сохранить</button>
            </div>
            <div className={styles.prodForm__item}
                 style={{display: product ? 'flex' : 'none', alignItems: 'center'}}>
                <UploadImages files={files} makeImgMainHandler={makeImgMainHandler}
                              onImageChangeHandler={onImageChangeHandler}/>
                <button disabled={!product && !files.length} className={styles.AdminMain__button} onClick={saveImages}>Создать товар</button>
            </div>
        </div>
    );
};

export default NewProdForm;
