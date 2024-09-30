import React, {useEffect, useState} from 'react';
import styles from './Site.module.sass'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {IHeading} from "../../interface/IPagesSettings";
import Heading from "../../components/UI/Heading/Heading";
import ProductList from "../../components/SiteComponents/ProductList/ProductList";
import {IProdReadOnly} from "../../interface/IProduct";
import ModalPopUp from "../../components/SiteComponents/ModalPopup/ModalPopUp";
import {checkPayment} from "../../store/actions/orderAction";
import {decodeToken} from "../../hooks/encodeDecodeTokens";

const Main = () => {
    const {mainPageSettings} = useAppSelector(state => state.mainPageSettingsReducer)
    const dispatch = useAppDispatch()
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

    const [modalVisibility, setModalVisibility] = useState<boolean>(false)
    const [modalData, setModalData] = useState<IProdReadOnly | null>(null)

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

    useEffect(() => {
        if (localStorage.paymentId && localStorage.orderId && localStorage.youkassaPaymentId)
            dispatch(checkPayment(decodeToken(localStorage.youkassaPaymentId), +localStorage.orderId, +localStorage.paymentId))
    }, [localStorage.paymentId, localStorage.orderId, localStorage.youkassaPaymentId])

    function payClickHandle(prod: IProdReadOnly) {
        setModalVisibility(true);
        setModalData(prod)
    }

    return (
        <main className={[styles.page__container].join(' ')}
              style={{background: mainPageStyles.background, position: 'relative'}}>
            <Heading pageHeading={mainPageHeading} headingContent={mainPageHeading.headingContent}/>
            <ProductList
                cardQuantityInRow={mainPageStyles.cardQuantityInRow}
                prodCardBg={mainPageStyles.prodCardBg}
                payClickHandle={payClickHandle}
            />
            <ModalPopUp
                isModalOpen={modalVisibility}
                onClose={()=> setModalVisibility(false)}
                data={modalData}
            />
        </main>
    );
};

export default Main;
