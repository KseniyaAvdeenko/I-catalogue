import React, {useEffect, useState} from 'react';
import styles from './Preview.module.sass'
import PreviewSelectShowingItems from "./PreviewSelectShowingItems";
import {useAppSelector} from "../../../hooks/redux";
import {IOptions} from "../../../interface/IAdminPageComponets";
import PreviewShowItems from "./PreviewShowItems";
import PreviewShowPages from "./PreviewShowPages";

interface IPreviewProps {
    isOpen: boolean;
}

const Preview: React.FC<IPreviewProps> = ({isOpen}) => {

    const {commonSettings} = useAppSelector(state => state.commonSettingsReducer)

    const [showItem, setShowItem] = useState<string>('header');
    const [showPage, setShowPage] = useState<string>('mainPage');
    const [showProdPage, setShowProdPage] = useState<string>('');

    const [showingContainers, setShowingContainers] = useState<{ itemsDisplay: string, pagesDisplay: string }>({
        itemsDisplay: 'flex',
        pagesDisplay: 'none',
    })

    const [showDetailPageSelect, setShowDetailPageSelect] = useState<'none' |'flex'>('none')

    const [showingItemsOptionsVisibility, setShowingItemsOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', top: '8rem'
    })
    const [showingPagesOptionsVisibility, setShowingPagesOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', top: '8rem'
    })
    const [showingDetailPagesOptionsVisibility, setShowingDetailPagesOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', top: '8rem'
    })

    const changeShowingItemsVisibility = () => showingItemsOptionsVisibility.open
        ? setShowingItemsOptionsVisibility({...showingItemsOptionsVisibility, display: 'none', open: false})
        : setShowingItemsOptionsVisibility({...showingItemsOptionsVisibility, display: 'flex', open: true})

    const changeShowingPagesVisibility = () => showingPagesOptionsVisibility.open
        ? setShowingPagesOptionsVisibility({...showingPagesOptionsVisibility, display: 'none', open: false})
        : setShowingPagesOptionsVisibility({...showingPagesOptionsVisibility, display: 'flex', open: true})

    const changeShowingDetailPagesVisibility = () => showingDetailPagesOptionsVisibility.open
        ? setShowingDetailPagesOptionsVisibility({...showingDetailPagesOptionsVisibility, display: 'none', open: false})
        : setShowingDetailPagesOptionsVisibility({...showingDetailPagesOptionsVisibility, display: 'flex', open: true})

    const onChangeShowItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowItem(e.target.value)
        setShowingItemsOptionsVisibility({...showingItemsOptionsVisibility, display: 'none', open: false})
        setShowingContainers({...showingContainers, itemsDisplay: 'flex', pagesDisplay: 'none'})
    }
    const onChangeShowPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowPage(e.target.value)
        e.target.value === 'detailProdPage'
            ? setShowDetailPageSelect('flex')
            : setShowDetailPageSelect('none')
        setShowingPagesOptionsVisibility({...showingPagesOptionsVisibility, display: 'none', open: false})
        setShowingContainers({...showingContainers, itemsDisplay: 'none', pagesDisplay: 'flex'})
    }
    const onChangeShowDetailPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowProdPage(e.target.value)
        setShowingDetailPagesOptionsVisibility({...showingDetailPagesOptionsVisibility, display: 'none', open: false})
    }


    return (
        <div className={isOpen ? [styles.previewWindow, styles.previewWindow_open].join(' ') : styles.previewWindow}>
            <PreviewSelectShowingItems
                showingDetailPagesOptionsVisibility={showingDetailPagesOptionsVisibility}
                showProdPage={showProdPage}
                onChangeShowDetailPage={onChangeShowDetailPage}
                changeShowingDetailPagesVisibility={changeShowingDetailPagesVisibility}
                showDetailPageSelect={showDetailPageSelect}
                showItem={showItem} showPage={showPage}
                onChangeShowingItems={onChangeShowItem}
                onChangeShowingPages={onChangeShowPage}
                changeShowingItemsVisibility={changeShowingItemsVisibility}
                changeShowingPagesVisibility={changeShowingPagesVisibility}
                showingItemsOptionsVisibility={showingItemsOptionsVisibility}
                showingPagesOptionsVisibility={showingPagesOptionsVisibility}
            />
            {commonSettings && (
                <div className={styles.previewWindow__showingContainer} style={{
                    color: commonSettings.basicFontColor,
                    fontFamily: commonSettings.basicFontFamily,
                    fontSize: commonSettings.basicFontSize
                }}>
                    <PreviewShowItems logo={commonSettings.logo} showItem={showItem}
                                      showingContainersDisplay={showingContainers.itemsDisplay}/>
                    <PreviewShowPages
                        showPage={showPage}
                        showProdPage={showProdPage}
                        showingContainersDisplay={showingContainers.pagesDisplay}
                        logo={commonSettings.logo} favicon={commonSettings.favicon}
                    />
                </div>
            )}
        </div>
    );
};

export default Preview;


