import React from 'react';
import styles from '../Preview.module.sass'
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {changePageAction} from "../../../../store/actions/paginatedProductsAction";
import Loader from "../../../UI/Loader/Loader";
import ProdsPagination from "../../../SiteComponents/ProductList/ProdsPagination";
import ProdImage from "../../../UI/ProdImage/ProdImage";
import {getCurrency} from "../../../../hooks/getCurrency";
import SiteButton from "../../../UI/SiteButton/SiteButton";


interface IPreviewProdListProps {
    prodCardBg: string;
    cardBorder: boolean;
    cardBorderColor: string;
    cardBorderWidth: number;
}

const PreviewProdList: React.FC<IPreviewProdListProps> = ({
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
        <div className={styles.layout}>
            <div className={styles.prodList}>
                {prodsPaginated.map(prod => (
                    <div key={prod.id} className={styles.prodList__prodItem}
                         style={{
                             background: prodCardBg,
                             border: cardBorder ? cardBorderWidth + 'px solid ' + cardBorderColor : 'none'
                         }}>
                        <ProdImage images={prod.images} imageWrapperClassname={styles.prodList__imageWrapper}/>
                        <div className={styles.prodList__items}>
                            <div className={styles.prodList__name}>{prod.name}</div>
                            <div className={styles.prodList__price}>
                                <b>Цена:</b> {prod.price} {getCurrency(prod.currency)} {prod.priceAttrs && `/ ${prod.priceAttrs}`}
                            </div>
                            <SiteButton product={prod}
                                        type={'link'}
                                        btnText={'Подробнее'}
                                        btnClassName={styles.prodList__moreBtn}
                            />
                            <SiteButton product={prod}
                                        type={'button'}
                                        btnText={'Оплатить'}
                                        clickHandler={()=>{}}
                                        btnClassName={styles.prodList__payButton}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <ProdsPagination getToPage={getToPage} onChangePage={onChangePage} pages={pages} currentPage={currentPage}/>
        </div>
    ) : (<div>{isLoading && (<Loader/>)}</div>)
};

export default PreviewProdList;
