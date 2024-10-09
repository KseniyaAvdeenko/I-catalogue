import React from 'react';
import styles from "./Sidebar.module.sass";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";

interface ISidebarEditProdItemsProps{
    getItemsVisibility: Function;
}
const SidebarEditProdItems: React.FC<ISidebarEditProdItemsProps> = ({getItemsVisibility}) => {

    const {productsReadOnly} = useAppSelector(state => state.productReducer)

    return (
        <div className={styles.Sidebar__items} style={{display: productsReadOnly && productsReadOnly.length ?'flex':'none'}}>
            <div className={styles.Sidebar__itemsContainer} onClick={() => getItemsVisibility('none')}>
                <NavLink to={'editing_products/'} className={({isActive}) =>
                    [isActive
                        ? [styles.Sidebar__heading, styles.linkActive].join(' ')
                        : styles.Sidebar__heading].join(' ')}>
                    Редактирование товаров/услуг
                </NavLink>
            </div>
        </div>
    );
};

export default SidebarEditProdItems;
