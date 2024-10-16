import React from 'react';
import styles from '../../../pages/Site/Site.module.sass';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import ProdsPagination from "./ProdsPagination";
import {changePageAction} from "../../../store/actions/paginatedProductsAction";
import ProductItem from "./ProductItem";
import Loader from "../../UI/Loader/Loader";


interface IProductListProps {
    prodCardBg: string;
    cardBorder: boolean;
    cardBorderColor: string;
    cardBorderWidth: number;
    payClickHandle: Function
}

const ProductList: React.FC<IProductListProps> = ({
                                                      payClickHandle,
                                                      prodCardBg,
                                                      cardBorder,
                                                      cardBorderWidth,
                                                      cardBorderColor
                                                  }) => {
    const {
        prodsPaginated,
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

    return prodsPaginated ? (
        <div className={styles.page__content}>
            <div className={styles.prodList}>
                {prodsPaginated.map(prod => (
                    <ProductItem
                        key={prod.id}
                        prod={prod}
                        prodCardBg={prodCardBg}
                        payClickHandle={payClickHandle}
                        cardBorder={cardBorder}
                        cardBorderColor={cardBorderColor}
                        cardBorderWidth={cardBorderWidth}
                    />
                ))}
            </div>
            <ProdsPagination getToPage={getToPage} onChangePage={onChangePage} pages={pages} currentPage={currentPage}/>
        </div>
    ) : (<div style={{margin: '0 auto'}}>{isLoading && (<Loader/>)}</div>);
};

export default ProductList;
