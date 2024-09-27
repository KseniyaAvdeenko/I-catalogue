import React, {useEffect, useState} from 'react';
import styles from "../../AdminNavbar.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import NewProdForm from "./NewProdForm";
import {IOtherValue, IProdAttrs, IProdBase} from "../../../../interface/IProduct";
import {IFile, IOptions} from "../../../../interface/IAdminPageComponets";
import {createProduct} from "../../../../store/actions/productAction";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import {createImage} from "../../../../store/actions/prodImagesAction";
import {productSlice} from "../../../../store/reducers/productSlice";


const AddProducts = () => {
    const {prodAttrs} = useAppSelector(state => state.prodAttrsReducer)
    const {product} = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()
    //states
    const [newProdAttrs, setNewProdsAttrs] = useState<IOtherValue>({})
    const [newProd, setNewProd] = useState<IProdBase>({
        name: '',
        currency: 'USD',
        price: 0,
        priceAttrs: '',
        otherValues: newProdAttrs
    })
    const [currencyOptionsVisibility, setCurrencyOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-12.9rem'
    })
    const [files, setFiles] = useState<IFile[]>([])


    useEffect(() => {
        if(prodAttrs) prodAttrs.map(attr=> setNewProdsAttrs(newProdAttrs=>({...newProdAttrs, [attr.attribute]: ''})))
    }, [])

    const saveNewProd = () => {
        const prod = structuredClone(newProd)
        dispatch(createProduct(decodeToken(localStorage.access), prod))
    }

    const onChangeNewProdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.type === 'number'
            ? setNewProd({...newProd, [e.target.name]: parseFloat(e.target.value)})
            : setNewProd({...newProd, [e.target.name]: e.target.value})
        if (e.target.name === 'currency') setCurrencyOptionsVisibility({
            ...currencyOptionsVisibility,
            open: false,
            display: 'none',
            bottom: '-12.9rem'
        })
    }

    const onChangeProdAttrsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewProdsAttrs({...newProdAttrs, [e.target.name]: e.target.value})
    }


    const onImageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && product) {
            const fileArray = Array.from(e.target.files)
            const array: IFile[] = []
            fileArray.map((file) => array.push({prod: product.id, mainImg: false, prodImg: file}))
            setFiles(array)
        }
    }

    const makeImgMainHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(files => files.map(file =>
            file.prodImg.name === e.target.id
                ? {...file, mainImg: e.target.checked}
                : {...file, mainImg: false}
        ))
    }
    const saveImages = () => {
        if (localStorage.access) {
            if (product && files.length) {

                setFiles(files => files.map(file => ({...file, prod: product.id})))
                files.forEach(file => {
                    if (file.prod === product.id) {
                        dispatch(createImage(decodeToken(localStorage.access), file))
                    }
                })
            }
            setNewProdsAttrs({})
            setNewProd({name: '', currency: 'USD', price: 0, priceAttrs: '', otherValues: newProdAttrs})
            setFiles([])
            dispatch(productSlice.actions.deleteProductSuccess())
        }
    }
    const changeCurrencyOptionsContainerVisibility = () => {
        currencyOptionsVisibility.open
            ? setCurrencyOptionsVisibility({
                ...currencyOptionsVisibility,
                open: false,
                display: 'none',
                bottom: '-12.9rem'
            })
            : setCurrencyOptionsVisibility({
                ...currencyOptionsVisibility,
                open: true,
                display: 'flex',
                bottom: '-12.9rem'
            })
    }
    const deleteProdImageFile = (name: string) => {
        setFiles(files.filter(el => el.prodImg.name !== name))
    }

    return (
        <section id={'addingProdsSection'} style={{display: prodAttrs && prodAttrs.length ? 'flex' : 'none'}}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h3 className={styles.AdminNavbar__subheading}>Добавление товара\услуги</h3>
            <div className={styles.AdminNavbar__formContainer}>
                <NewProdForm
                    prodAttrs={prodAttrs}
                    newProd={newProd} product={product}
                    newProdAttrs={newProdAttrs}
                    onChangeHandler={onChangeNewProdHandler}
                    currencyOptionsVisibility={currencyOptionsVisibility}
                    onChangeProdAttrsHandler={onChangeProdAttrsHandler}
                    files={files} onImageChangeHandler={onImageChangeHandler}
                    makeImgMainHandler={makeImgMainHandler}
                    saveNewProd={saveNewProd} saveImages={saveImages}
                    deleteProdImageFile={deleteProdImageFile}
                    changeCurrencyOptionsContainerVisibility={changeCurrencyOptionsContainerVisibility}
                />
            </div>
        </section>
    );
};

export default AddProducts;
