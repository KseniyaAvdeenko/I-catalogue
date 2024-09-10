import React from 'react';
import {ISidebarItemsVisibility} from "../../interface/IAdminPageComponets";
import styles from "./Sidebar.module.sass";
import {Link} from "react-router-dom";
import ArrowDown from "../../assets/img/arrowDown.svg";
interface ISidebarProdSettingsProps{
    getItemsVisibility: Function;
    prodSettingsItems: ISidebarItemsVisibility;
    scrollToBlock: Function
}
const SidebarProdSettings: React.FC<ISidebarProdSettingsProps> = ({getItemsVisibility, prodSettingsItems, scrollToBlock}) => {
    return (
        <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__itemsContainer} onClick={() => getItemsVisibility('prodSettings')}>
                <Link to={'products_settings/'} className={styles.Sidebar__heading}>Настройка и контент товаров\услуг</Link>
                <img src={ArrowDown} style={{transform: `rotate(${prodSettingsItems.rotate}deg)`}}
                     alt="arrowDown"/>
            </div>
            <div className={styles.Sidebar__itemContainer} style={{display: prodSettingsItems.display}}>
                <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}
                     onClick={() => scrollToBlock('prodDetailPageSection')}>Детальная страница товара\услуги
                </div>
                <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}
                     onClick={() => scrollToBlock('addingProdAttrsSection')}>Добавление характеристик товара\услуги
                </div>
                <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}
                     onClick={() => scrollToBlock('addingProdsSection')}>Добавление товара\услуги
                </div>
            </div>
        </div>
    );
};

export default SidebarProdSettings;
