import React, {useEffect, useState} from 'react';
import styles from './Site.module.sass'
import {useAppSelector} from "../../hooks/redux";
import {IHeading} from "../../interface/IPagesSettings";
import Heading from "../../components/UI/Heading/Heading";
import ProductList from "../../components/SiteComponents/ProductList/ProductList";
import {IProdReadOnly} from "../../interface/IProduct";

const Main = () => {
    const {mainPageSettings} = useAppSelector(state => state.mainPageSettingsReducer)

    const [mainPageStyles, setMainPageStyles] = useState<{ background: string; prodCardBg: string; cardQuantityInRow: number; }>({
        background: '',
        cardQuantityInRow: 4,
        prodCardBg: ''
    })
    const [mainPageHeading, setMainPageHeading] = useState<IHeading>({
        blockHeadingType: 'h1',
        headingContent: '',
        headingFontColor: '',
        headingFontSize: 48,
        headingFontWeight: 900,
        id: 0
    })
    useEffect(() => {
        if (mainPageSettings) {
            setMainPageStyles({
                ...mainPageStyles,
                prodCardBg: mainPageSettings.prodCardBg,
                cardQuantityInRow: mainPageSettings.cardQuantityInRow,
                background: mainPageSettings.background
            })
            setMainPageHeading(mainPageSettings.headingSettings)
            document.title = mainPageSettings.title
        }

    }, [mainPageSettings]);

    function payClickHandle(prod: IProdReadOnly) {
        console.log(prod)
    }

    return (
        <main className={[styles.page__container].join(' ')} style={{background: mainPageStyles.background}}>
            <Heading pageHeading={mainPageHeading} headingContent={mainPageHeading.headingContent}/>
            <ProductList
                cardQuantityInRow={mainPageStyles.cardQuantityInRow}
                prodCardBg={mainPageStyles.prodCardBg}
                payClickHandle={payClickHandle}
            />
        </main>
    );
};

export default Main;
