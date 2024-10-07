import React from 'react';
import styles from "../../AdminNavbar.module.sass";
import DeleteIcon from "../../../../assets/img/deleteIcon.svg";
import {IPageSetting} from "../../../../interface/IPagesSettings";

interface ISaveNavLinksProps {
    pages: IPageSetting[]|[]
    deleteNavLink: Function
}

const SavedNavLinks: React.FC<ISaveNavLinksProps> = ({ deleteNavLink, pages}) => {
    return (
        <div className={styles.savedItems} style={{borderBottom:  pages.length ?'.1rem solid #926B6A': 'none'}}>
            {pages && pages.map(page => (
                <div key={page.id} className={styles.savedItems__items}>
                    <div className={styles.savedItems__item}>
                        <label htmlFor={'navLink*' + page.slug}
                               className={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}>
                            Навигационная ссылка
                        </label>
                        <input
                            type={'text'}
                            name={'navLink'}
                            id={'navLink*' + page.slug}
                            value={page.navLink}
                            readOnly={true}
                        />
                    </div>
                    <div className={styles.savedItems__item}>
                        <label htmlFor={'slug*' + page.slug}
                               className={[styles.savedItems__item, styles.savedItems__item_labelMargin].join(' ')}>
                            Ссылка на соответствующую страницу
                        </label>
                        <input
                            type={'text'}
                            name={'slug'}
                            id={'slug*' + page.slug}
                            value={page.slug}
                            readOnly={true}
                        />
                    </div>
                    <img src={DeleteIcon} alt="delete icon" onClick={() => deleteNavLink(page.slug)}/>
                </div>
            ))}
        </div>
    );
};

export default SavedNavLinks;
