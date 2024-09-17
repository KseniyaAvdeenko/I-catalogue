import React from 'react';
import {ISidebarItemsVisibility} from "../../interface/IAdminPageComponets";
import styles from "./Sidebar.module.sass";
import {NavLink} from "react-router-dom";
import ArrowDown from "../../assets/img/arrowDown.svg";
import {useAppSelector} from "../../hooks/redux";

interface ISidebarModalFormSettingsItemsProps {
    getItemsVisibility: Function;
    modalFormSettingsItems: ISidebarItemsVisibility;
    scrollToBlock: Function;
}

const SidebarModalFormSettingsItems: React.FC<ISidebarModalFormSettingsItemsProps> = ({
                                                                                          getItemsVisibility,
                                                                                          modalFormSettingsItems,
                                                                                          scrollToBlock
                                                                                      }) => {
    const {modalForm} = useAppSelector(state => state.modalFormReducer)
    return (
        <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__itemsContainer} onClick={() => getItemsVisibility('modalFormSettings')}>
                <NavLink to={'modal_form/'}
                         className={({isActive}) =>
                             [isActive
                                 ? [styles.Sidebar__heading, styles.linkActive].join(' ')
                                 : styles.Sidebar__heading].join(' ')}>Настройки модального окна</NavLink>
                <img src={ArrowDown} style={{transform: `rotate(${modalFormSettingsItems.rotate}deg)`}}
                     alt="arrowDown"/>
            </div>
            <div className={styles.Sidebar__itemContainer} style={{display: modalFormSettingsItems.display}}>
                <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}
                     onClick={() => scrollToBlock('modalFormSettingsSection')}>Настройка модального окна
                </div>
                <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}
                     style={{display: modalForm ?'flex':'none'}}
                     onClick={() => scrollToBlock('addingFormInputsSection')}>Добавление и редактирование полей ввода модального окна
                </div>
            </div>
        </div>
    );
};

export default SidebarModalFormSettingsItems;
