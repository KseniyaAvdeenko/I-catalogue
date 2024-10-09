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


const Sidebar: React.FC<ISidebarProps> = ({scrollToBlock, intro, setIntro}) => {
    //states
    const [sidebarContent, setSidebarContent] = useState<ISidebarContent[]>(SidebarContent)
    const {pages, isLoading} = useAppSelector(state => state.pageSettingsReducer)


    useEffect(() => {
        if (pages) {
            pages.map(page => {
                const sidebarContentElem: ISidebarContent = {
                    section: 'pagesSettings',
                    content: `Настройка и контент страницы "${page.navLink}"`,
                    getItemsVisibilitySection: 'none',
                    link: 'pages_settings/' + page.slug,
                    subsections: false
                }
                setSidebarContent(sidebarContent => [...sidebarContent, sidebarContentElem])
            })
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
        <aside className={styles.Sidebar}>
            <div className={styles.Sidebar__container}>
                {sidebarContent.map(content => (
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
                                isLoading={isLoading}
                            />
                            : <SidebarWithoutSubsections
                                key={content.link}
                                getItemsVisibility={getItemsVisibility}
                                sidebarItem={content}
                                pagesCondition={false}
                                isLoading={true}
                            />
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
