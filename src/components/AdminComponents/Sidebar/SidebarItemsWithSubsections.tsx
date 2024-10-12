import React from 'react';
import {ISidebarContent} from "./AdminSidebarPaths";
import styles from "./Sidebar.module.sass";
import {NavLink} from "react-router-dom";
import ArrowDown from "../../../assets/img/arrowDown.svg";
import {useAppSelector} from "../../../hooks/redux";

interface ISidebarItemsWithSubsectionsItemsProps {
    getItemsVisibility: Function;
    sidebarItem: ISidebarContent;
    scrollToBlock: Function;
    prodsCondition: boolean;
    modalFormCondition: boolean;
}

const SidebarItemsWithSubsections: React.FC<ISidebarItemsWithSubsectionsItemsProps> = ({
                                                                                           getItemsVisibility,
                                                                                           sidebarItem,
                                                                                           scrollToBlock,
                                                                                           prodsCondition,
                                                                                           modalFormCondition
                                                                                       }) => {

    const {prodAttrs} = useAppSelector(state => state.prodAttrsReducer)
    const {modalForm} = useAppSelector(state => state.modalFormReducer)

    return (
        <div className={styles.Sidebar__items}>
            <div className={styles.Sidebar__itemsContainer}
                 onClick={() => getItemsVisibility(sidebarItem.getItemsVisibilitySection)}>
                <NavLink to={sidebarItem.link}
                         className={({isActive}) =>
                             [isActive
                                 ? [styles.Sidebar__heading, styles.linkActive].join(' ')
                                 : styles.Sidebar__heading].join(' ')}>{sidebarItem.content}</NavLink>
                <img src={ArrowDown} style={{transform: `rotate(${sidebarItem.arrowRotation}deg)`}}
                     alt="arrowDown"/>
            </div>
            <div className={styles.Sidebar__itemContainer} style={{display: sidebarItem.subsectionsDisplay}}>
                {sidebarItem.subsectionsArray && sidebarItem.subsectionsArray.map(path => (

                    prodsCondition && prodAttrs && path.section === 'addingProdsSection'
                        ? <div key={path.section} className={[styles.Sidebar__item].join(' ')}
                               style={{display: prodAttrs && prodAttrs.length ? 'block' : 'none'}}
                               onClick={() => scrollToBlock(path.section)}>{path.content}</div>
                        : modalFormCondition && modalForm
                            ? <div key={path.section} className={[styles.Sidebar__item].join(' ')}
                                   style={{display: modalForm ? 'flex' : 'none'}}
                                   onClick={() => scrollToBlock(path.section)}>{path.content}</div>
                            : <div key={path.section} className={[styles.Sidebar__item].join(' ')}
                                   onClick={() => scrollToBlock(path.section)}>{path.content}</div>
                ))}
            </div>
        </div>
    );
};

export default SidebarItemsWithSubsections;
