import React from 'react';
import {useAppSelector} from "../../../../hooks/redux";
import styles from '../Preview.module.sass'
import Heading from "../../../UI/Heading/Heading";
import PreviewProdList from "./PreviewProdList";

const PreviewMainPage = () => {

    const {mainPageSettings} = useAppSelector(state => state.mainPageSettingsReducer)

    return mainPageSettings ? (
        <div className={styles.layout__mainPage} style={{background:mainPageSettings.background}}>
            <Heading pageHeading={mainPageSettings.headingSettings} headingContent={mainPageSettings.headingSettings.headingContent}/>
            <PreviewProdList
                prodCardBg={mainPageSettings.prodCardBg}
                cardBorderWidth={mainPageSettings.cardBorderWidth}
                cardBorderColor={mainPageSettings.cardBorderColor}
                cardBorder={mainPageSettings.cardBorder}
            />
        </div>
    ):(<div className={styles.layout__mainPage}></div>)
};

export default PreviewMainPage;
