import React from 'react';
import Header from "../../SiteComponents/Header/Header";
import Footer from "../../SiteComponents/Footer/Footer";
import styles from './Preview.module.sass';
import PreviewButtonElement from "./PreviewItems/PreviewButtonElement";
import PreviewModalFormElement from "./PreviewItems/PreviewModalFormElement";

interface IPreviewShowItemsProps {
    showItem: string
    showingContainersDisplay: string;
    logo: string | null
}

const PreviewShowItems: React.FC<IPreviewShowItemsProps> = ({logo, showItem, showingContainersDisplay}) => {

    const getItem = (item: string, logo: string | null) => {
        if (item === 'header') return (<Header logo={logo ? logo : ''}/>);
        if (item === 'footer') return (<Footer logo={logo ? logo : ''}/>);
        if (item === 'button') return (<PreviewButtonElement btnText={'Кнопка'}/>)
        if (item === 'modalForm') return (<PreviewModalFormElement/>)
    }

    return (
        <div className={styles.showingItems} style={{display: showingContainersDisplay}}>
            {getItem(showItem, logo)}
        </div>
    );
};

export default PreviewShowItems;
