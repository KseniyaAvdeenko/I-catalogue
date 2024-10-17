import React, {useEffect, useState} from 'react';
import styles from "../../../pages/Site/Site.module.sass";
import {useAppSelector} from "../../../hooks/redux";
import {IButtonStyles} from "../../../interface/ICommonSettings";
import {getButtonStyles} from "../../../utils/getButtonStyles";

interface IProdsPaginationProps {
    pages: number[] | [];
    currentPage: number;
    onChangePage: Function;
    getToPage: Function
}

const ProdsPagination: React.FC<IProdsPaginationProps> = ({getToPage, onChangePage, pages, currentPage}) => {
    const {buttonSettings} = useAppSelector(state => state.buttonSettingsReducer)
    const btnStyles: IButtonStyles = getButtonStyles(buttonSettings)
    const pagesLastIndex = pages.length - 1

    function onHoverInNav(e: React.MouseEvent<HTMLDivElement>) {
        e.currentTarget.style.color = btnStyles.color;
        e.currentTarget.style.background = btnStyles.background
    }

    function onHoverOutNav(e: React.MouseEvent<HTMLDivElement>) {
        e.currentTarget.style.color = btnStyles.background;
        e.currentTarget.style.background = ''
    }

    return (
        <div className={styles.pagination}>
            {currentPage > 1 && (<div
                style={{border: '.1rem solid ' + btnStyles.background, color: btnStyles.background}}
                className={styles.pagination__nav} onClick={() => onChangePage('prev')}
                onMouseEnter={e => onHoverInNav(e)} onMouseLeave={e => onHoverOutNav(e)}
            >Предыдущая</div>)}
            {pages && pages.map(page => (
                <div style={{
                    border: '.1rem solid ' + btnStyles.background,
                    background: currentPage === page ? btnStyles.background : '',
                    color: currentPage === page ? btnStyles.color : btnStyles.background
                }}
                     key={page} className={styles.pagination__item} onClick={() => getToPage(page)}>
                    {page}
                </div>
            ))}
            {currentPage !== pages[pagesLastIndex] && (<div
                style={{border: '.1rem solid ' + btnStyles.background, color: btnStyles.background}}
                className={styles.pagination__nav} onClick={() => onChangePage('next')}
                onMouseEnter={e => onHoverInNav(e)} onMouseLeave={e => onHoverOutNav(e)}
            >Следующая</div>)}
        </div>
    );
};

export default ProdsPagination;
