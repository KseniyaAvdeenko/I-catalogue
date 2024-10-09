import React from 'react';
import styles from "./Sidebar.module.sass";
import {NavLink} from "react-router-dom";
import ArrowDown from "../../../assets/img/arrowDown.svg";
import {ISidebarItemsVisibility} from "../../../interface/IAdminPageComponets";
import {navbarPaths} from "./AdminSidebarPaths";


interface ISidebarNavbarItemsProps {
    getItemsVisibility: Function;
    navbarItems: ISidebarItemsVisibility;
    scrollToBlock: Function;
}

const SidebarNavbarItems: React.FC<ISidebarNavbarItemsProps> = ({scrollToBlock, getItemsVisibility, navbarItems}) => {
    return (
        <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__itemsContainer} onClick={() => getItemsVisibility('navbar')}>
                <NavLink to={'navbar/'} className={({isActive}) =>
                    [isActive
                        ? [styles.Sidebar__heading, styles.linkActive].join(' ')
                        : styles.Sidebar__heading].join(' ')}>Контент “шапки” и “подвала” сайта</NavLink>
                <img src={ArrowDown} style={{transform: `rotate(${navbarItems.rotate}deg)`}}
                     alt="arrowDown"/>
            </div>
            <div className={styles.Sidebar__itemContainer} style={{display: navbarItems.display}}>
                {navbarPaths.map(path=>(
                    <div key={path.section} className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}
                         onClick={() => scrollToBlock(path.section)}>{path.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SidebarNavbarItems;
