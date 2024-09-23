import React, {useEffect, useState} from 'react';
import styles from './Site.module.sass'
import {useAppSelector} from "../../hooks/redux";
import {IHeading} from "../../interface/IPagesSettings";
import getHeading from "../../components/UI/Heading/Heading";
import Heading from "../../components/UI/Heading/Heading";

const Main = () => {
    const {mainPageSettings} = useAppSelector(state => state.mainPageSettingsReducer)
    const {productsReadOnly} = useAppSelector(state => state.productReducer)

    console.log(mainPageSettings)
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
        }

    }, [mainPageSettings]);

    return (
        <main className={[styles.page__container].join(' ')} style={{background: mainPageStyles.background}}>
            <Heading pageHeading={mainPageHeading}/>
        </main>
    );
};

export default Main;
