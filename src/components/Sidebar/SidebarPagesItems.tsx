import React from 'react';
import styles from "./Sidebar.module.sass";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

interface ISidebarPagesItemsProps {
    getItemsVisibility: Function;
}

const SidebarPagesItems: React.FC<ISidebarPagesItemsProps> = ({getItemsVisibility}) => {
    const {isLoading, error, pages} = useAppSelector(state => state.pageSettingsReducer)

    return (
        <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__itemsContainer} onClick={() => getItemsVisibility('none')}>
                {pages && pages.map(page => (
                    <NavLink key={page.id} to={'pages_settings/' + page.slug} className={({isActive}) =>
                        [isActive ? styles.Sidebar__heading : styles.Sidebar__item,].join(" ")}>
                        Настройка и контент страницы "{page.link.navLink}"
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SidebarPagesItems;
