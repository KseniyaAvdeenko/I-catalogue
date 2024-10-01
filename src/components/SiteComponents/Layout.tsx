import React, {useEffect, useState} from 'react';
import styles from './Layout.module.sass'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {checkPayment} from "../../store/actions/orderAction";
import {decodeToken} from "../../hooks/encodeDecodeTokens";
import {setFavicon} from "../../hooks/setFavicon";

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({children}) => {
    const {commonSettings} = useAppSelector(state => state.commonSettingsReducer)
    const [basicStyles, setBasicStyles] = useState({color: 'black', fontSize: 16, fontFamily: 'Rubik'})
    const dispatch = useAppDispatch()



    useEffect(() => {
        if (commonSettings) {
            setBasicStyles({
                ...basicStyles,
                color: commonSettings.basicFontColor,
                fontSize: commonSettings.basicFontSize,
                fontFamily: commonSettings.basicFontFamily
            })
            setFavicon(commonSettings.favicon)
        }
    }, [commonSettings]);

    useEffect(() => {
        if (localStorage.paymentId && localStorage.orderId && localStorage.youkassaPaymentId)
            dispatch(checkPayment(decodeToken(localStorage.youkassaPaymentId), +localStorage.orderId, +localStorage.paymentId))
    }, [localStorage.paymentId, localStorage.orderId, localStorage.youkassaPaymentId])

    return (
        <div className={styles.layout} style={basicStyles}>
            <Header logo={commonSettings?.logo}/>
            {children}
            <Footer logo={commonSettings?.logo}/>
        </div>
    );
};

export default Layout;
