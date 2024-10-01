import React from 'react';
import styles from '../../../pages/Site/Site.module.sass';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import ProdImage from "../../UI/ProdImage/ProdImage";
import SiteButton from "../../UI/SiteButton/SiteButton";
import {getCurrency} from "../../../hooks/getCurrency";
import ProdsPagination from "./ProdsPagination";
import {changePageAction} from "../../../store/actions/paginatedProductsAction";


interface IProductListProps {
    prodCardBg: string;
    payClickHandle: Function
}

const ProductList: React.FC<IProductListProps> = ({payClickHandle, prodCardBg}) => {
    const {prodsPaginated, count, error, isLoading, pageSize, pages, currentPage, totalPages} = useAppSelector(state => state.paginatedProductReducer)
    const dispatch = useAppDispatch();
    // const [totalPages, setTotalPages] = useState<number>(count ?? 0)
    // const [pageSize, setPageSize] = useState<number>(12)
    // const [page, setPage] = useState<number>(1)
    // const dispatch = useAppDispatch()
    // const [pages, setPages] = useState< number[]>([])
    //
    // useEffect(() => {
    //     dispatch(loadProductsByPage(page, pageSize))
    //     if(count)setTotalPages(getPageCount(count, pageSize))
    //     if(totalPages)setPages(getPages(totalPages))
    // }, [page, pageSize]);
    //
    function onChangePage(btnName: 'prev'|'next') {
        btnName === 'prev'
            ? dispatch(changePageAction(currentPage - 1, pageSize))
            : dispatch(changePageAction(currentPage + 1, pageSize))
    }
    function getToPage(page: number) {
        dispatch(changePageAction(page, pageSize))
    }
    console.log(totalPages, pages)
    return (
        <div className={styles.page__content}>
            <div className={styles.prodList}>
                {isLoading && 'Loading...'}
                {prodsPaginated && prodsPaginated.map(prod => (
                    <div key={prod.id} className={styles.prodItem} style={{background: prodCardBg}}>
                        <ProdImage images={prod.images} imageWrapperClassname={styles.prodItem__imageWrapper}/>
                        <div className={styles.prodItem__items}>
                            <div className={styles.prodItem__name}>{prod.name}</div>
                            <div className={styles.prodItem__price}>
                                <b>Цена:</b> {prod.price} {getCurrency(prod.currency)} {prod.priceAttrs && `/ ${prod.priceAttrs}`}
                            </div>
                            <SiteButton product={prod}
                                        type={'link'}
                                        btnText={'Подробнее'}
                                        btnClassName={styles.prodItem__moreBtn}
                            />
                            <SiteButton product={prod}
                                        type={'button'}
                                        btnText={'Оплатить'}
                                        clickHandler={payClickHandle}
                                        btnClassName={styles.prodItem__payButton}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <ProdsPagination getToPage={getToPage} onChangePage={onChangePage} pages={pages} currentPage={currentPage}/>
        </div>
    );
};

export default ProductList;
