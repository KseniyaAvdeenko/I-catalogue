import React, {useState} from 'react';
import styles from './Sidebar.module.sass';
import SidebarPagesItems from "./SidebarPagesItems";
import SidebarCommonSettingsItems from "./SidebarCommonSettingsItems";
import {ISidebarItemsVisibility} from "../../interface/IAdminPageComponets";
import SidebarNavbarItems from "./SidebarNavbarItems";
import SidebarMainPageItems from "./SidebarMainPageItems";

interface ISidebarProps {
    scrollToBlock: Function
}


const Sidebar: React.FC<ISidebarProps> = ({scrollToBlock}) => {
    //states
    const [commonSettingsItems, setCommonSettingsItems] = useState<ISidebarItemsVisibility>({
        display: 'none', rotate: 180, open: false
    })
    const [navbarItems, setNavbarItems] = useState<ISidebarItemsVisibility>({
        display: 'none', rotate: 180, open: false
    })

    //methods
    const getItemsVisibility = (block: string) => {
        if (block === 'commonSettings') {
            setNavbarItems({...navbarItems, open: false, rotate: 180, display: 'none'})
            commonSettingsItems.open
                ? setCommonSettingsItems({...commonSettingsItems, open: false, rotate: 180, display: 'none'})
                : setCommonSettingsItems({...commonSettingsItems, open: true, rotate: 0, display: 'flex'})
        } else if (block === 'navbar') {
            setCommonSettingsItems({...commonSettingsItems, open: false, rotate: 180, display: 'none'})
            navbarItems.open
                ? setNavbarItems({...navbarItems, open: false, rotate: 180, display: 'none'})
                : setNavbarItems({...navbarItems, open: true, rotate: 0, display: 'flex'})
        } else {
            setNavbarItems({...navbarItems, open: false, rotate: 180, display: 'none'})
            setCommonSettingsItems({...commonSettingsItems, open: false, rotate: 180, display: 'none'})
        }
    }


    return (
        <aside className={styles.Sidebar__container}>
            <SidebarCommonSettingsItems
                getItemsVisibility={getItemsVisibility}
                commonSettingsItems={commonSettingsItems}
                scrollToBlock={scrollToBlock}/>
            <SidebarNavbarItems
                getItemsVisibility={getItemsVisibility}
                navbarItems={navbarItems}
                scrollToBlock={scrollToBlock}/>
            <SidebarMainPageItems getItemsVisibility={getItemsVisibility}/>
            <SidebarPagesItems getItemsVisibility={getItemsVisibility}/>
        </aside>
    );
};

export default Sidebar;
