import React from 'react';
import styles from "./Sidebar.module.sass";
import {Link} from "react-router-dom";
import ArrowDown from "../../assets/img/arrowDown.png";

const SidebarItemPages = () => {
    return (
        <div className={styles.Sidebar__items}>
            {/*<div className={styles.Sidebar__itemsContainer}>*/}
            {/*    <Link to={'pages_settings/'} className={styles.Sidebar__heading}>Настройка и контент страниц</Link>*/}
            {/*</div>*/}
            {/*<div className={styles.Sidebar__itemsContainer}>*/}
            {/*    <Link to={'pages_settings/'} className={styles.Sidebar__heading}>Настройка и контент страниц</Link>*/}
            {/*</div>*/}
            {/*<div className={styles.Sidebar__itemContainer} >*/}
            {/*    <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}*/}
            {/*         >Главная страница*/}
            {/*    </div>*/}
            {/*    <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}>*/}
            {/*        Настройка и контент созданных страниц*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default SidebarItemPages;
