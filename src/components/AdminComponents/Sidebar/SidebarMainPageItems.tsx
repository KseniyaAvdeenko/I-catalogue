import React from 'react';
import styles from "./Sidebar.module.sass";
import {NavLink} from "react-router-dom";

interface ISidebarMainPageItemsProps {
    getItemsVisibility: Function;
}

const SidebarMainPageItems: React.FC<ISidebarMainPageItemsProps> = ({getItemsVisibility}) => {
    return (
        <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__itemsContainer} onClick={() => getItemsVisibility('none')}>
                <NavLink to={'main_page_settings/'} className={({isActive}) =>
                    [isActive
                        ? [styles.Sidebar__heading, styles.linkActive].join(' ')
                        : styles.Sidebar__heading].join(' ')}>
                    Настройка главной страницы
                </NavLink>
            </div>
        </div>
    );
};

export default SidebarMainPageItems;
