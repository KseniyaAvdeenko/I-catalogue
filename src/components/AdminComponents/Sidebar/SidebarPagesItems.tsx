import React from 'react';
import styles from "./Sidebar.module.sass";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";
import Loader from "../../UI/Loader/Loader";


interface ISidebarPagesItemsProps {
    getItemsVisibility: Function;
}

const SidebarPagesItems: React.FC<ISidebarPagesItemsProps> = ({getItemsVisibility}) => {
    const {isLoading, error, pages} = useAppSelector(state => state.pageSettingsReducer)

    return (
        <div className={styles.Sidebar__items}>
            {isLoading && (<Loader/>)}
            {pages && pages.map(page => (
                <NavLink key={page.id} to={'pages_settings/' + page.slug} className={({isActive}) =>
                    [isActive
                        ? [styles.Sidebar__heading, styles.Sidebar__item_margin, styles.linkActive].join(' ')
                        : styles.Sidebar__item, styles.Sidebar__item_margin].join(" ")}>
                    Настройка и контент страницы "{page.navLink}"
                </NavLink>
            ))}
        </div>
    );
};

export default SidebarPagesItems;
