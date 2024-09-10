import React from 'react';
import styles from "./Sidebar.module.sass";
import {Link} from "react-router-dom";
import ArrowDown from "../../assets/img/arrowDown.svg";
import {ISidebarItemsVisibility} from "../../interface/IAdminPageComponets";

interface ISidebarNavbarItemsProps {
    getItemsVisibility: Function;
    navbarItems: ISidebarItemsVisibility;
    scrollToBlock: Function;
}

const SidebarNavbarItems: React.FC<ISidebarNavbarItemsProps> = ({scrollToBlock, getItemsVisibility,navbarItems}) => {
    return (
        <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__itemsContainer} onClick={() => getItemsVisibility('navbar')}>
                <Link to={'navbar/'} className={styles.Sidebar__heading}>Контент “шапки” и “подвала” сайта</Link>
                <img src={ArrowDown} style={{transform: `rotate(${navbarItems.rotate}deg)`}}
                     alt="arrowDown"/>
            </div>
            <div className={styles.Sidebar__itemContainer} style={{display: navbarItems.display}}>
                <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}
                     onClick={() => scrollToBlock('contactsSection')}>Контакты
                </div>
                <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}
                     onClick={() => scrollToBlock('navLinksSection')}>Навигационные ссылки
                </div>
            </div>
        </div>
    );
};

export default SidebarNavbarItems;
