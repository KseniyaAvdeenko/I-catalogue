import React from 'react';
import {IPageSetting} from "../../../../interface/IPagesSettings";
import Heading from "../../../UI/Heading/Heading";
import styles from '../Preview.module.sass'
import PreviewProdList from "./PreviewProdList";
import PageContent from "../../../SiteComponents/PageContent/PageContent";

interface IPreviewPageProps {
    page: IPageSetting
}

const PreviewPage: React.FC<IPreviewPageProps> = ({page}) => {
    return (
        <div className={styles.layout__mainPage} style={{background: page.background}}>
            <Heading pageHeading={page.headingSettings} headingContent={page.headingSettings.headingContent}/>
            {page.isBlockWithProds
                ? <>
                    <PreviewProdList
                        prodCardBg={page.prodBackground}
                        cardBorder={page.cardBorder}
                        cardBorderColor={page.cardBorderColor}
                        cardBorderWidth={page.cardBorderWidth}/>
                </>
                :<PageContent pageContent={page.content} containerClassName={styles.layout}/>
            }
        </div>
    );
};

export default PreviewPage;
