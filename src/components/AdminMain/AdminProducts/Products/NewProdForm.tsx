import React from 'react';
import styles from "../../AdminMain.module.sass";
import {IOtherValue, IProd, IProdAttrs, IProdBase} from "../../../../interface/IProduct";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";
import ProdCurrency from "../ProdCurrency";
import {IFile, IOptions} from "../../../../interface/IAdminPageComponets";
import UploadImages from "./UploadImages";

interface INewProdFormProps {
    prodAttrs: IProdAttrs[]|null
    newProd: IProdBase
    onChangeHandler: Function;
    currencyOptionsVisibility: IOptions
    newProdAttrs: IOtherValue;
    onChangeProdAttrsHandler: Function;
    files: IFile[];
    onImageChangeHandler: Function;
    makeImgMainHandler: Function;
    saveNewProd: React.MouseEventHandler<HTMLButtonElement>
    saveImages: React.MouseEventHandler<HTMLButtonElement>
    product: IProd | null;
    changeCurrencyOptionsContainerVisibility: React.MouseEventHandler<HTMLDivElement>;
    deleteProdImageFile: Function
}

const NewProdForm: React.FC<INewProdFormProps> = ({
                                                      prodAttrs,
                                                      deleteProdImageFile,
                                                      newProdAttrs,
                                                      currencyOptionsVisibility,
                                                      newProd,
                                                      onChangeHandler,
                                                      onChangeProdAttrsHandler,
                                                      files,
                                                      onImageChangeHandler,
                                                      makeImgMainHandler,
                                                      saveNewProd,
                                                      saveImages,
                                                      product,
                                                      changeCurrencyOptionsContainerVisibility
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
                    onChangeHandler={onChangeHandler}/>
                <AdminInputContainer
                    type={'number'} name={'price'} inputId={'price'}
                    value={newProd.price} checked={false} required={true} readonly={false}
                    inputClassname={''} label={'Цена'} min={0}
                    inputContainerClassname={styles.form__inputContainer}
                    labelClassName={''}
                    onChangeHandler={onChangeHandler}/>
                <ProdCurrency
                    prodCurrency={newProd.currency}
                    onChangeHandler={onChangeHandler}
                    changeCurrencyOptionsContainerVisibility={changeCurrencyOptionsContainerVisibility}
                    currencyOptionsVisibility={currencyOptionsVisibility}
                />
                <AdminInputContainer
                    type={'text'} name={'priceAttrs'} inputId={'priceAttrs'}
                    value={newProd.priceAttrs} checked={false} required={false} readonly={false}
                    inputClassname={''} label={'Примечание к цене'}
                    inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                    labelClassName={styles.form__items_labelMargin}
                    onChangeHandler={onChangeHandler}/>

                {prodAttrs && prodAttrs.map(attr => (
                    <AdminInputContainer key={attr.id}
                                         type={'text'} name={attr.attribute} inputId={attr.attribute}
                                         value={newProdAttrs[attr.attribute]} checked={false} required={true}
                                         readonly={false}
                                         inputClassname={''} label={attr.attribute}
                                         inputContainerClassname={[styles.form__items, styles.form__items_margin].join(' ')}
                                         labelClassName={styles.form__items_labelMargin}
                                         onChangeHandler={onChangeProdAttrsHandler}/>
                ))}
                <button disabled={!newProd.name && !newProd.price} className={styles.AdminMain__button}
                        onClick={saveNewProd}>Создать товар
                </button>
            </div>
            <div className={styles.prodForm__item}
                 style={{display: product ? 'flex' : 'none', alignItems: 'center'}}>
                <UploadImages files={files} makeImgMainHandler={makeImgMainHandler}
                              onImageChangeHandler={onImageChangeHandler}
                              deleteProdImageFile={deleteProdImageFile}/>
                <button disabled={!product && !files.length} className={styles.AdminMain__button}
                        onClick={saveImages}>Сохранить картинки к товару
                </button>
            </div>
        </div>
    );
};

export default NewProdForm;
