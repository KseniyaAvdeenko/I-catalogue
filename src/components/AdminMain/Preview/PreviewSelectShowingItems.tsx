import React, {useEffect, useState} from 'react';
import styles from "./Preview.module.sass";
import PreviewSelect from "./PreviewSelect";
import {showingItemsOptions} from "../Options";
import {IOptionItem, IOptions} from "../../../interface/IAdminPageComponets";
import {useAppSelector} from "../../../hooks/redux";

interface IPreviewSelectShowingItemsProps {
    showingDetailPagesOptionsVisibility: IOptions;
    showProdPage: string;
    changeShowingDetailPagesVisibility: React.MouseEventHandler<HTMLDivElement>;
    onChangeShowDetailPage: Function
    showDetailPageSelect: 'none' | 'flex'
    showItem: string;
    onChangeShowingItems: Function;
    showPage: string;
    onChangeShowingPages: Function;
    showingItemsOptionsVisibility: IOptions;
    changeShowingItemsVisibility: React.MouseEventHandler<HTMLDivElement>
    showingPagesOptionsVisibility: IOptions;
    changeShowingPagesVisibility: React.MouseEventHandler<HTMLDivElement>
}

const PreviewSelectShowingItems: React.FC<IPreviewSelectShowingItemsProps> = ({
                                                                                  showDetailPageSelect,
                                                                                  changeShowingDetailPagesVisibility,
                                                                                  onChangeShowDetailPage,
                                                                                  showingDetailPagesOptionsVisibility,
                                                                                  showProdPage,
                                                                                  showPage,
                                                                                  onChangeShowingPages,
                                                                                  onChangeShowingItems,
                                                                                  showItem,
                                                                                  showingPagesOptionsVisibility,
                                                                                  showingItemsOptionsVisibility,
                                                                                  changeShowingPagesVisibility,
                                                                                  changeShowingItemsVisibility
                                                                              }) => {

    const [showingPagesOptions, setShowingPagesOptions] = useState<IOptionItem[]>([{
        id: 'mainPage', name: 'Главная станица'
    }, {id: 'detailProdPage', name: 'Страница товара/услуги'}])

    const [showingDetailPagesOptions, setShowingDetailPagesOptions] = useState<IOptionItem[]>([])

    const {pages} = useAppSelector(state => state.pageSettingsReducer);

    const {productsReadOnly} = useAppSelector(state => state.productReducer)


    useEffect(() => {
        if (pages && pages.length) {
            pages.map(page => {
                setShowingPagesOptions(showingPagesOptions => [...showingPagesOptions, {
                    id: page.slug,
                    name: 'Страница ' + page.navLink
                }])
            })
        }
    }, [pages]);

    useEffect(() => {
        if (productsReadOnly && productsReadOnly.length) {
            productsReadOnly.map(prod => {
                setShowingDetailPagesOptions(showingDetailPagesOptions => [...showingDetailPagesOptions, {
                    id: String(prod.id),
                    name: prod.name
                }])
            })
        }
    }, [productsReadOnly]);

    return (
        <div className={styles.previewWindow__select}>
            <PreviewSelect
                name={'showItems'}
                optionsArray={showingItemsOptions}
                selectedOption={showItem}
                selectLabel={'Показать элемент'}
                selectOptionVisibility={showingItemsOptionsVisibility}
                changeSelectOptionsVisibility={changeShowingItemsVisibility}
                onChangeHandler={onChangeShowingItems}
            />
            <PreviewSelect
                name={'showPages'}
                optionsArray={showingPagesOptions}
                selectedOption={showPage}
                selectLabel={'Показать страницу'}
                selectOptionVisibility={showingPagesOptionsVisibility}
                changeSelectOptionsVisibility={changeShowingPagesVisibility}
                onChangeHandler={onChangeShowingPages}
            />
            <PreviewSelect
                name={'showProds'}
                optionsArray={showingDetailPagesOptions}
                selectedOption={showProdPage}
                selectLabel={'Показать страницу товара'}
                selectOptionVisibility={showingDetailPagesOptionsVisibility}
                changeSelectOptionsVisibility={changeShowingDetailPagesVisibility}
                onChangeHandler={onChangeShowDetailPage}
                selectVisibility={showDetailPageSelect}
            />
        </div>
    );
};

export default PreviewSelectShowingItems;
