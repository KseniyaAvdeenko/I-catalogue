import React from 'react';
import styles from "./Sidebar.module.sass";
import {Link} from "react-router-dom";
import ArrowDown from "../../assets/img/arrowDown.svg";
import {ISidebarItemsVisibility} from "../../interface/IAdminPageComponets";

interface ISidebarCommonSettingsItemsProps {
    getItemsVisibility: Function;
    commonSettingsItems: ISidebarItemsVisibility;
    scrollToBlock: Function
}

const SidebarCommonSettingsItems: React.FC<ISidebarCommonSettingsItemsProps> = ({scrollToBlock, getItemsVisibility, commonSettingsItems}) => {
    return (
        <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__itemsContainer} onClick={() => getItemsVisibility('commonSettings')}>
                <Link to={'common_settings/'} className={styles.Sidebar__heading}>Общие настройки сайта</Link>
                <img src={ArrowDown} style={{transform: `rotate(${commonSettingsItems.rotate}deg)`}}
                     alt="arrowDown"/>
            </div>
            <div className={styles.Sidebar__itemContainer} style={{display: commonSettingsItems.display}}>
                <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}
                     onClick={() => scrollToBlock('commonSettingsSection')}>Общие настройки сайта
                </div>
                <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}
                     onClick={() => scrollToBlock('headerSettingsSection')}>Настройка ‘шапки’ сайта
                </div>
                <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}
                     onClick={() => scrollToBlock('footerSettingsSection')}>Настройка “подвала” сайта
                </div>
                <div className={[styles.Sidebar__item].join(' ')}
                     onClick={() => scrollToBlock('buttonSettingsSection')}>Настройка кнопок
                </div>
            </div>
        </div>
    );
};

export default SidebarCommonSettingsItems;
