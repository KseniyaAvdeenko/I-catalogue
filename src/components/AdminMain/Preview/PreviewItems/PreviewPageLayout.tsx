import React from 'react';
import styles from '../Preview.module.sass'
import Header from "../../../SiteComponents/Header/Header";
import Footer from "../../../SiteComponents/Footer/Footer";
import DefaultFavicon from '../../../../assets/img/defaultFavicon.svg';

interface IPageLayoutProps {
    children: React.ReactNode;
    logo: string | null;
    favicon: string | null;
    pageName: string;
}

const PreviewPageLayout: React.FC<IPageLayoutProps> = ({
                                                    children,
                                                    logo,
                                                    pageName,
                                                    favicon
                                                }) => {
    return (
        <div className={styles.layout} style={{height: '100%', overflowY: 'auto'}}>
            <div className={styles.layout}>
                <div className={styles.layout__inline}>
                    {favicon ? <img src={favicon} width={20} height={20} alt="favicon"/> : <img src={DefaultFavicon} alt="favicon"/>}
                    <div>{pageName}</div>
                </div>
            </div>
            <div className={styles.layout__container} style={{border: '.1rem solid #333'}}>
                <Header logo={logo ? logo : ''}/>
                {children}
                <Footer logo={logo ? logo : ''}/>
            </div>
        </div>
    );
};

export default PreviewPageLayout;
