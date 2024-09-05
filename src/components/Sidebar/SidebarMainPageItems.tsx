import React from 'react';
import styles from "./Sidebar.module.sass";
import {Link} from "react-router-dom";

interface ISidebarMainPageItemsProps {
    getItemsVisibility: Function;
}

const SidebarMainPageItems: React.FC<ISidebarMainPageItemsProps> = ({getItemsVisibility}) => {
    return (
        <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__itemsContainer} onClick={() => getItemsVisibility('none')}>
                <Link to={'main_page_settings/'} className={styles.Sidebar__heading}>
                    Настройка главной страницы
                </Link>
            </div>
        </div>
    );
};

export default SidebarMainPageItems;
