import React from 'react';
import styles from "./Sidebar.module.sass";
import {NavLink} from "react-router-dom";
import ArrowDown from "../../../assets/img/arrowDown.svg";
import {useAppSelector} from "../../../hooks/redux";
import {ISidebarItemsVisibility} from "../../../interface/IAdminPageComponets";


interface ISidebarProdSettingsProps {
    getItemsVisibility: Function;
    prodSettingsItems: ISidebarItemsVisibility;
    scrollToBlock: Function
}

const SidebarProdSettings: React.FC<ISidebarProdSettingsProps> = ({
                                                                      getItemsVisibility,
                                                                      prodSettingsItems,
                                                                      scrollToBlock
                                                                  }) => {
    const {prodAttrs} = useAppSelector(state => state.prodAttrsReducer)

    return (
        <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__itemsContainer} onClick={() => getItemsVisibility('prodSettings')}>
                <NavLink to={'products_settings/'} className={({isActive}) =>
                    [isActive
                        ? [styles.Sidebar__heading, styles.linkActive].join(' ')
                        : styles.Sidebar__heading].join(' ')}>Настройка и контент товаров\услуг</NavLink>
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
                     style={{display: prodAttrs && prodAttrs.length ? 'block' : 'none'}}
                     onClick={() => scrollToBlock('addingProdsSection')}>Добавление товара\услуги
                </div>
            </div>
        </div>
    );
};

export default SidebarProdSettings;
