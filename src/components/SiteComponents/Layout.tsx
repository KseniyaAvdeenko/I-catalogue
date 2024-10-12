import React, {useEffect, useState} from 'react';
import styles from './Layout.module.sass'
import {useAppSelector} from "../../hooks/redux";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {setFavicon} from "../../hooks/setFavicon";
import {getSeoTags} from "../../hooks/getSeoTags";
import Notifications from "../UI/Notifications/Notifications";


interface ILayoutProps {
    children: React.ReactNode;
    errorNtfs: string[];
    successNtfs: string[];
    setErrorNtfs: Function;
    setSuccessNtfs: Function;
}

const Layout: React.FC<ILayoutProps> = ({children, setErrorNtfs, setSuccessNtfs, successNtfs, errorNtfs}) => {
    const {commonSettings} = useAppSelector(state => state.commonSettingsReducer)
    const {seoTags} = useAppSelector(state => state.seoSettingsReducer)
    const [basicStyles, setBasicStyles] = useState({color: 'black', fontSize: 16, fontFamily: 'Rubik'})

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
        if (commonSettings) {
            setBasicStyles({
                ...basicStyles,
                color: commonSettings.basicFontColor,
                fontSize: commonSettings.basicFontSize,
                fontFamily: commonSettings.basicFontFamily
            })
            setFavicon(commonSettings.favicon)
        }
        if (seoTags) getSeoTags(seoTags)

    }, [seoTags]);


    return (
        <div className={styles.layout} style={basicStyles}>
            <Header logo={commonSettings?.logo}/>
            <Notifications setErrorNtFs={setErrorNtfs}
                           setSuccessNtFs={setSuccessNtfs}
                           errorNotifications={errorNtfs}
                           successNotifications={successNtfs}
            />
            {children}
            <Footer logo={commonSettings?.logo}/>
        </div>
    );
};

export default Layout;
