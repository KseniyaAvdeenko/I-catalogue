import React, {useEffect, useState} from 'react';
import styles from './Sidebar.module.sass';
import {IIntro} from "../../../interface/IAdminPageComponets";
import {ISidebarContent, SidebarContent} from "./AdminSidebarPaths";
import {useAppSelector} from "../../../hooks/redux";
import SidebarItemsWithSubsections from "./SidebarItemsWithSubsections";
import SidebarWithoutSubsections from "./SidebarWithoutSubsections";


interface ISidebarProps {
    scrollToBlock: Function;
    intro: IIntro;
    setIntro: Function
}

const Sidebar = React.forwardRef<HTMLDivElement, ISidebarProps>(({scrollToBlock, intro, setIntro}, ref) => {
    //states
    const [sidebarContent, setSidebarContent] = useState<ISidebarContent[]>(SidebarContent)
    const {pages} = useAppSelector(state => state.pageSettingsReducer)

    useEffect(() => {
        if (pages) {
            if (!sidebarContent.find(el => el.section === 'pagesSettings'))
                setSidebarContent(sidebarContent => [...sidebarContent, {
                    order: 4,
                    section: 'pagesSettings',
                    content: ``,
                    getItemsVisibilitySection: 'none',
                    link: 'pages_settings/',
                    subsections: false
                }])
        }
    }, [pages])

    //methods
    const getItemsVisibility = (block: string) => {
        setSidebarContent(sidebarContent =>
            sidebarContent.map(item =>
                item.getItemsVisibilitySection === block
                    ? item.subsectionsOpen
                        ? {...item, subsectionsOpen: false, arrowRotation: 180, subsectionsDisplay: 'none'}
                        : {...item, subsectionsOpen: true, arrowRotation: 0, subsectionsDisplay: 'flex'}
                    : {...item, subsectionsOpen: false, arrowRotation: 180, subsectionsDisplay: 'none'}
            ))
    }

    useEffect(() => {
        window.location.pathname === '/admin_page/'
            ? setIntro({...intro, display: 'block', justifyContent: 'center'})
            : setIntro({...intro, display: 'none', justifyContent: 'start'})
        if (window.location.pathname === "/admin_page/common_settings/") getItemsVisibility('commonSettings')
        if (window.location.pathname === "/admin_page/navbar/") getItemsVisibility('navbar')
        if (window.location.pathname === "/admin_page/products_settings/") getItemsVisibility('prodSettings')
        if (window.location.pathname === "/admin_page/modal_form/") getItemsVisibility('modalFormSettings')
    }, [window.location.pathname])

    return (
        <aside ref={ref} className={styles.Sidebar}>
            <div className={styles.Sidebar__container}>
                {sidebarContent.sort((a, b) => a.order - b.order).map(content => (
                    content.subsections
                        ? content.section === 'prodSettings'
                            ? <SidebarItemsWithSubsections
                                key={content.link}
                                sidebarItem={content}
                                getItemsVisibility={getItemsVisibility}
                                scrollToBlock={scrollToBlock}
                                prodsCondition={true}
                                modalFormCondition={false}
                            />
                            : content.section === 'modalFormSettings'
                                ? <SidebarItemsWithSubsections
                                    key={content.link}
                                    sidebarItem={content}
                                    getItemsVisibility={getItemsVisibility}
                                    scrollToBlock={scrollToBlock}
                                    prodsCondition={false}
                                    modalFormCondition={true}
                                />
                                : <SidebarItemsWithSubsections
                                    key={content.link}
                                    sidebarItem={content}
                                    getItemsVisibility={getItemsVisibility}
                                    scrollToBlock={scrollToBlock}
                                    prodsCondition={false}
                                    modalFormCondition={false}
                                />
                        : content.section === 'pagesSettings'
                            ? <SidebarWithoutSubsections
                                key={content.link}
                                getItemsVisibility={getItemsVisibility}
                                sidebarItem={content}
                                pagesCondition={true}
                                editingProdCondition={false}
                            />
                            : content.section === 'editingProduct'
                                ? <SidebarWithoutSubsections
                                    key={content.link}
                                    getItemsVisibility={getItemsVisibility}
                                    sidebarItem={content}
                                    pagesCondition={false}
                                    editingProdCondition={true}
                                />
                                : <SidebarWithoutSubsections
                                    key={content.link}
                                    getItemsVisibility={getItemsVisibility}
                                    sidebarItem={content}
                                    pagesCondition={false}
                                    editingProdCondition={false}
                                />
                ))}
            </div>
        </aside>
    );
});

export default Sidebar;
