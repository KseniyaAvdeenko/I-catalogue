import React, {useEffect, useState} from 'react';
import styles from './Sidebar.module.sass';
import SidebarPagesItems from "./SidebarPagesItems";
import SidebarCommonSettingsItems from "./SidebarCommonSettingsItems";
import SidebarNavbarItems from "./SidebarNavbarItems";
import SidebarMainPageItems from "./SidebarMainPageItems";
import SidebarProdSettings from "./SidebarProdSettings";
import SidebarEditProdItems from "./SidebarEditProdItems";
import SidebarModalFormSettingsItems from "./SidebarModalFormSettingsItems";
import {IIntro, ISidebarItemsVisibility} from "../../../interface/IAdminPageComponets";
import SidebarSeoSettings from "./SidebarSeoSettings";

interface ISidebarProps {
    scrollToBlock: Function;
    intro: IIntro;
    setIntro: Function
}


const Sidebar: React.FC<ISidebarProps> = ({scrollToBlock, intro, setIntro}) => {
    //states
    const [commonSettingsItems, setCommonSettingsItems] = useState<ISidebarItemsVisibility>({
        display: 'none', rotate: 180, open: false
    })
    const [navbarItems, setNavbarItems] = useState<ISidebarItemsVisibility>({
        display: 'none', rotate: 180, open: false
    })
    const [prodSettingsItems, setProdSettingsItems] = useState<ISidebarItemsVisibility>({
        display: 'none', rotate: 180, open: false
    })
    const [modalFormSettingsItems, setModalSettingsItems] = useState<ISidebarItemsVisibility>({
        display: 'none', rotate: 180, open: false
    })

    //methods
    const getItemsVisibility = (block: string) => {
        if (block === 'commonSettings') {
            setNavbarItems({...navbarItems, open: false, rotate: 180, display: 'none'});
            setProdSettingsItems({...prodSettingsItems, open: false, rotate: 180, display: 'none'});
            setModalSettingsItems({...modalFormSettingsItems, open: false, rotate: 180, display: 'none'})
            commonSettingsItems.open
                ? setCommonSettingsItems({...commonSettingsItems, open: false, rotate: 180, display: 'none'})
                : setCommonSettingsItems({...commonSettingsItems, open: true, rotate: 0, display: 'flex'})
        } else if (block === 'navbar') {
            setCommonSettingsItems({...commonSettingsItems, open: false, rotate: 180, display: 'none'});
            setProdSettingsItems({...prodSettingsItems, open: false, rotate: 180, display: 'none'});
            setModalSettingsItems({...modalFormSettingsItems, open: false, rotate: 180, display: 'none'})
            navbarItems.open
                ? setNavbarItems({...navbarItems, open: false, rotate: 180, display: 'none'})
                : setNavbarItems({...navbarItems, open: true, rotate: 0, display: 'flex'})
        } else if (block === 'prodSettings') {
            setCommonSettingsItems({...commonSettingsItems, open: false, rotate: 180, display: 'none'});
            setNavbarItems({...navbarItems, open: false, rotate: 180, display: 'none'});
            setModalSettingsItems({...modalFormSettingsItems, open: false, rotate: 180, display: 'none'})
            prodSettingsItems.open
                ? setProdSettingsItems({...prodSettingsItems, open: false, rotate: 180, display: 'none'})
                : setProdSettingsItems({...prodSettingsItems, open: true, rotate: 0, display: 'flex'})
        } else if (block === 'modalFormSettings') {
            setCommonSettingsItems({...commonSettingsItems, open: false, rotate: 180, display: 'none'});
            setNavbarItems({...navbarItems, open: false, rotate: 180, display: 'none'});
            setProdSettingsItems({...prodSettingsItems, open: false, rotate: 180, display: 'none'});
            modalFormSettingsItems.open
                ? setModalSettingsItems({...modalFormSettingsItems, open: false, rotate: 180, display: 'none'})
                : setModalSettingsItems({...modalFormSettingsItems, open: true, rotate: 0, display: 'flex'})
        } else {
            setNavbarItems({...navbarItems, open: false, rotate: 180, display: 'none'});
            setCommonSettingsItems({...commonSettingsItems, open: false, rotate: 180, display: 'none'});
            setModalSettingsItems({...modalFormSettingsItems, open: false, rotate: 180, display: 'none'})
            setProdSettingsItems({...prodSettingsItems, open: false, rotate: 180, display: 'none'});
        }
    }

    useEffect(() => {
        window.location.pathname === '/admin_page/'
            ? setIntro({...intro, display: 'block', justifyContent: 'center'})
            : setIntro({...intro, display: 'none', justifyContent: 'start'})
        if (window.location.pathname === "/admin_page/common_settings/") getItemsVisibility('commonSettings')
        if (window.location.pathname === "/admin_page/navbar/") getItemsVisibility('navbar')
        if (window.location.pathname === "/admin_page/products_settings/") getItemsVisibility('prodSettings')
        if (window.location.pathname === "/admin_page/modal_form/") getItemsVisibility('modalFormSettings')
    }, [window.location.pathname])

    return (
        <aside className={styles.Sidebar}>
            <div className={styles.Sidebar__container}>
                <SidebarCommonSettingsItems
                    getItemsVisibility={getItemsVisibility}
                    commonSettingsItems={commonSettingsItems}
                    scrollToBlock={scrollToBlock}/>
                <SidebarSeoSettings getItemsVisibility={getItemsVisibility}/>
                <SidebarNavbarItems
                    getItemsVisibility={getItemsVisibility}
                    navbarItems={navbarItems}
                    scrollToBlock={scrollToBlock}/>
                <SidebarMainPageItems getItemsVisibility={getItemsVisibility}/>
                <SidebarPagesItems getItemsVisibility={getItemsVisibility}/>
                <SidebarProdSettings
                    getItemsVisibility={getItemsVisibility}
                    prodSettingsItems={prodSettingsItems}
                    scrollToBlock={scrollToBlock}/>
                <SidebarEditProdItems getItemsVisibility={getItemsVisibility}/>
                <SidebarModalFormSettingsItems
                    getItemsVisibility={getItemsVisibility}
                    modalFormSettingsItems={modalFormSettingsItems}
                    scrollToBlock={scrollToBlock}/>
            </div>
        </aside>
    );
};

export default Sidebar;
