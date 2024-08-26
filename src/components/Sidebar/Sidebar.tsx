import React, {useState} from 'react';
import styles from './Sidebar.module.sass';
import ArrowDown from '../../assets/img/arrowDown.png'

interface ISidebarProps {

}

const Sidebar: React.FC<ISidebarProps> = ({}) => {
    //states
    const [commonSettingsItems, setCommonSettingsItems] = useState<{ display: string, rotate: number, open: boolean }>({
        display: 'none', rotate: 180, open: false
    })

    //methods
    const commonSettingsItemsVisibility = () => {
        commonSettingsItems.open
            ? setCommonSettingsItems({...commonSettingsItems, open: false, rotate: 180, display: 'none'})
            : setCommonSettingsItems({...commonSettingsItems, open: true, rotate: 0, display: 'flex'})
    }


    return (
        <aside className={styles.Sidebar__container}>
            <div className={styles.Sidebar__items}>
                <div className={styles.Sidebar__itemsContainer} onClick={commonSettingsItemsVisibility}>
                    <h6 className={styles.Sidebar__heading}>Общие настройки сайта</h6>
                    <img src={ArrowDown} style={{transform: `rotate(${commonSettingsItems.rotate}deg)`}}
                         alt="arrowDown"/>
                </div>
                <div className={styles.Sidebar__itemContainer} style={{display: commonSettingsItems.display}}>
                    <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}>Общие настройки
                        сайта
                    </div>
                    <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}>Настройка ‘шапки
                        сайта’
                    </div>
                    <div className={[styles.Sidebar__item, styles.Sidebar__item_margin].join(' ')}>Настройка “подвала”
                        сайта
                    </div>
                    <div className={[styles.Sidebar__item].join(' ')}>Настройка кнопок</div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
