import React, {useState, useEffect} from 'react';
import styles from "../../AdminNavbar.module.sass";
import {IOtherValue, IProdReadOnly} from "../../../../interface/IProduct";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import SelectProd from "./SelectProd";
import {IOptions} from "../../../../interface/IAdminPageComponets";
import {deleteProduct, loadProductRead, updateProduct} from "../../../../store/actions/productAction";
import EditProdForm from "./EditProdForm";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import Loader from "../../../UI/Loader/Loader";

const Product = () => {
    const {productsReadOnly, isLoading, productReadOnly} = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()
    //states
    const [selectedProd, setSelectedProd] = useState<IProdReadOnly | null>(null)
    const [selectedProdsAttrs, setSelectedProdAttrs] = useState<IOtherValue | {} | undefined>(selectedProd?.otherValues)

    const [prodsOptionsVisibility, setProdsOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-8.8rem'
    })
    const [currencyOptionsVisibility, setCurrencyOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-12.9rem'
    })
    //methods
    useEffect(() => {
        if (productsReadOnly) setSelectedProd(productsReadOnly[0])
        if (productReadOnly) setSelectedProd(productReadOnly)
    }, [productsReadOnly, productReadOnly])

    const onSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch(loadProductRead(parseInt(e.target.value)))
        setProdsOptionsVisibility({...prodsOptionsVisibility, open: false, display: 'none', bottom: '-8.8rem'})
    }

    function onChangeProdHandler(e: React.ChangeEvent<HTMLInputElement>) {
        if (selectedProd) {
            e.target.type === 'number'
                ? dispatch(updateProduct(
                    decodeToken(localStorage.access),
                    selectedProd.id,
                    {[e.target.name]: parseFloat(e.target.value)}))
                : dispatch(updateProduct(
                    decodeToken(localStorage.access),
                    selectedProd.id,
                    {[e.target.name]: e.target.value}))
        }
        if (e.target.name === 'currency') setCurrencyOptionsVisibility({
            ...currencyOptionsVisibility,
            open: false,
            display: 'none',
            bottom: '-12.9rem'
        })
    }

    function onProdAttrsChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setSelectedProdAttrs({...selectedProdsAttrs, [e.target.name]: e.target.value})
        if (selectedProd) {
            const prod = {name: selectedProd.name, price: selectedProd.price, otherValues: selectedProdsAttrs}
            dispatch(updateProduct(decodeToken(localStorage.access), selectedProd.id, prod))
        }
    }

    const deleteProd = (id: number) => {
        dispatch(deleteProduct(decodeToken(localStorage.access), id))
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
    return (
        <main className={styles.AdminNavbar}>
            <section id={'editingProduct'}
                     className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
                <div className={[styles.selectProd].join()}>
                    <h2>Редактирование товара/услуги</h2>
                    {productsReadOnly
                        ? <SelectProd products={productsReadOnly}
                                      prodsOptionsVisibility={prodsOptionsVisibility}
                                      setProdsOptionsVisibility={setProdsOptionsVisibility}
                                      onChangeHandler={onSelectHandler}
                                      selectedProd={selectedProd}
                        /> :
                        <div className={styles.form__inputContainer_select} style={{flexBasis: '30%'}}>{isLoading && (<Loader/>)}</div>
                    }
                </div>

                <div className={styles.AdminNavbar__formContainer}>
                    {selectedProd && (
                        <EditProdForm
                            selectedProd={selectedProd}
                            onChangeProdHandler={onChangeProdHandler}
                            onProdAttrsChangeHandler={onProdAttrsChangeHandler}
                            selectedProdsAttrs={selectedProdsAttrs ? selectedProdsAttrs : {}}
                            currencyOptionsVisibility={currencyOptionsVisibility}
                            deleteProd={deleteProd}
                            changeCurrencyOptionsContainerVisibility={changeCurrencyOptionsContainerVisibility}
                        />
                    )}
                </div>
            </section>
        </main>
    );
}

export default Product;
