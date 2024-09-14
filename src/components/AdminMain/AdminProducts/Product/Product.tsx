import React, {useState} from 'react';
import styles from "../../AdminNavbar.module.sass";
import {IProd} from "../../../../interface/IProduct";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import SelectProd from "./SelectProd";
import {IOptions} from "../../../../interface/IAdminPageComponets";
import {loadProduct} from "../../../../store/actions/productAction";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";
import ProdCurrency from "../Products/ProdCurrency";
import UploadImages from "../Products/UploadImages";
import EditProdForm from "./EditProdForm";

const Product = () => {
    const {products, isLoading} = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()
    //states
    const [selectedProd, setSelectedProd] = useState<any | null>(products && products[0])
    const [prodsOptionsVisibility, setProdsOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-4.5rem'
    })

    const onSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (products) {
            setSelectedProd(products.find(el => el.id === parseInt(e.target.value)))
        }
        setProdsOptionsVisibility({...prodsOptionsVisibility, open: false, display: 'none', bottom: '-4.5rem'})
    }
    console.log(selectedProd)

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {

    }

    return (
        <section id={'editingProduct'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <div className={[styles.selectProd].join()}>
                <h3>Редактирование товара/услуги</h3>
                <SelectProd products={products}
                            prodsOptionsVisibility={prodsOptionsVisibility}
                            setProdsOptionsVisibility={setProdsOptionsVisibility}
                            onChangeHandler={onSelectHandler} isLoading={isLoading}
                            selectedProd={selectedProd}
                />
            </div>

            <div className={styles.AdminNavbar__formContainer}>
                {selectedProd && (<EditProdForm selectedProd={selectedProd} onChangeHandler={onChangeHandler}/>)}
            </div>
        </section>
    );
};

export default Product;
