import React, {useEffect, useRef} from 'react';
import styles from '../../../pages/Site/Site.module.sass';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import ProdImage from "../../UI/ProdImage/ProdImage";
import SiteButton from "../../UI/SiteButton/SiteButton";
import {getCurrency} from "../../../hooks/getCurrency";
import ProdsPagination from "./ProdsPagination";
import {changePageAction} from "../../../store/actions/paginatedProductsAction";
import ProductItem from "./ProductItem";
import Loader from "../../UI/Loader/Loader";


interface IProductListProps {
    prodCardBg: string;
    payClickHandle: Function
}

const ProductList: React.FC<IProductListProps> = ({payClickHandle, prodCardBg}) => {
    const {
        prodsPaginated,
        error,
        isLoading,
        pageSize,
        pages,
        currentPage,
    } = useAppSelector(state => state.paginatedProductReducer)
    const dispatch = useAppDispatch();

    function onChangePage(btnName: 'prev' | 'next') {
        btnName === 'prev'
            ? dispatch(changePageAction(currentPage - 1, pageSize))
            : dispatch(changePageAction(currentPage + 1, pageSize))
    }

    function getToPage(page: number) {
        dispatch(changePageAction(page, pageSize))
    }

    return (
        <div className={styles.page__content}>
            {prodsPaginated
                ? <div className={styles.prodList}>
                    {prodsPaginated.map(prod => (
                        <ProductItem
                            key={prod.id}
                            prod={prod}
                            prodCardBg={prodCardBg}
                            payClickHandle={payClickHandle}
                        />
                    ))}
                </div>
                : <div style={{margin: '0 auto'}}>{isLoading && (<Loader/>)}</div>
            }
            <ProdsPagination getToPage={getToPage} onChangePage={onChangePage} pages={pages} currentPage={currentPage}/>
        </div>
    );
};

export default ProductList;
