import React from 'react';
import styles from "./Preview.module.sass";
import PreviewPageLayout from "./PreviewItems/PreviewPageLayout";
import {useAppSelector} from "../../../hooks/redux";
import PreviewMainPage from "./PreviewItems/PreviewMainPage";
import PreviewPage from "./PreviewItems/PreviewPage";
import PreviewDetailPage from "./PreviewItems/PreviewDetailPage";

interface IPreviewShowPagesProps {
    showPage: string;
    showProdPage: string;
    showingContainersDisplay: string;
    logo: string | null;
    favicon: string | null;
}

const PreviewShowPages: React.FC<IPreviewShowPagesProps> = ({
                                                                showProdPage,
                                                                showPage,
                                                                showingContainersDisplay,
                                                                logo,
                                                                favicon
                                                            }) => {
    const {pages} = useAppSelector(state => state.pageSettingsReducer);
    const {productsReadOnly} = useAppSelector(state => state.productReducer);

    const getPage = (page: string, logo: string | null, favicon: string | null, showProdPage: string) => {
        if (page === 'mainPage') {
            return (
                <PreviewPageLayout pageName={'Главная'} favicon={favicon} logo={logo}>
                    <PreviewMainPage/>
                </PreviewPageLayout>)
        } else if (page === 'detailProdPage') {
            if (showProdPage) {
                if (productsReadOnly) {
                    const selectedProd = structuredClone(productsReadOnly.find(el => el.id === parseInt(showProdPage)))
                    return (
                        <PreviewPageLayout pageName={selectedProd.name} favicon={favicon} logo={logo}><PreviewDetailPage
                            prod={selectedProd}/>
                        </PreviewPageLayout>)
                } else {
                    return (<div>Нет товаров/услуг</div>)
                }
            } else {
                return (<div>Выберите товар/услугу</div>)
            }
        } else {
            if (pages) {
                const selectedPage = structuredClone(pages.find(el => el.slug === page))
                return (
                    <PreviewPageLayout pageName={selectedPage.navLink} favicon={favicon} logo={logo}>
                        <PreviewPage page={selectedPage}/>
                    </PreviewPageLayout>)
            }
        }
    }

    return (
        <div className={styles.showingItems} style={{display: showingContainersDisplay}}>
            {getPage(showPage, logo, favicon, showProdPage)}
        </div>
    );
};

export default PreviewShowPages;
