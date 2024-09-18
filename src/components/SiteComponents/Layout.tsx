import React, {useEffect, useState} from 'react';
import styles from './Layout.module.sass'
import {useAppSelector} from "../../hooks/redux";
import Header from "./Header";
import Footer from "./Footer";

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({children}) => {
    const {commonSettings} = useAppSelector(state => state.commonSettingsReducer)
    const [basicStyles, setBasicStyles] = useState({color: 'black', fontSize: 16, fontFamily: 'Rubik'})

    function setFavicon(url: string) {
        let link = document.createElement('link');
        link.rel = 'icon';
        link.href = url;
        document.head.appendChild(link);
    }

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

    return (
        <div className={styles.layout} style={basicStyles}>
            <Header logo={commonSettings?.logo}/>
            {children}
            <Footer logo={commonSettings?.logo}/>
        </div>
    );
};

export default Layout;
