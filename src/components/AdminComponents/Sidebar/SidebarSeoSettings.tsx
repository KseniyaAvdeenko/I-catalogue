import React from 'react';
import styles from "./Sidebar.module.sass";
import {NavLink} from "react-router-dom";
interface ISidebarSeoSettingsProps {
    getItemsVisibility: Function;
}

const SidebarSeoSettings: React.FC<ISidebarSeoSettingsProps> = ({getItemsVisibility}) => {
    return (
       <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__itemsContainer} onClick={() => getItemsVisibility('none')}>
                <NavLink to={'seo_settings/'} className={({isActive}) =>
                    [isActive
                        ? [styles.Sidebar__heading, styles.linkActive].join(' ')
                        : styles.Sidebar__heading].join(' ')}>
                    Настройки SEO сайта
                </NavLink>
            </div>
        </div>
    );
};

export default SidebarSeoSettings;
