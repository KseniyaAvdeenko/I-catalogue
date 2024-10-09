import React from 'react';
import styles from "./Sidebar.module.sass";
import {NavLink} from "react-router-dom";
import {ISidebarContent} from "./AdminSidebarPaths";
import Loader from "../../UI/Loader/Loader";

interface ISidebarWithoutSubsectionsProps {
    getItemsVisibility: Function;
    sidebarItem: ISidebarContent;
    pagesCondition: boolean;
    isLoading: boolean
}

const SidebarWithoutSubsections: React.FC<ISidebarWithoutSubsectionsProps> = ({
                                                                                  sidebarItem,
                                                                                  getItemsVisibility,
                                                                                  pagesCondition,
                                                                                  isLoading
                                                                              }) => {
    return pagesCondition ? (
            <div className={styles.Sidebar__items}>
                {isLoading && (<Loader/>)}
                <NavLink to={sidebarItem.link} className={({isActive}) =>
                    [isActive
                        ? [styles.Sidebar__heading, styles.Sidebar__item_margin, styles.linkActive].join(' ')
                        : styles.Sidebar__item, styles.Sidebar__item_margin].join(" ")}> {sidebarItem.content}
                </NavLink>

            </div>)
        : (
            <div className={styles.Sidebar__items}>
                <div className={styles.Sidebar__itemsContainer}
                     onClick={() => getItemsVisibility(sidebarItem.getItemsVisibilitySection)}>
                    <NavLink to={sidebarItem.link} className={({isActive}) =>
                        [isActive
                            ? [styles.Sidebar__heading, styles.linkActive].join(' ')
                            : styles.Sidebar__heading].join(' ')}>
                        {sidebarItem.content}
                    </NavLink>
                </div>
            </div>
        )
};

export default SidebarWithoutSubsections;
