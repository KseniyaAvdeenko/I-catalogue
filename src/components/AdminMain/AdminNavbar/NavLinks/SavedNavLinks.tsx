import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import {INavLinks} from "../../../../interface/INavbar";
import styles from "../AdminNavbar.module.sass";
import NavLinkInput from "./NavLinkInput";
import CorrespondingPageNameInput from "./CorrespondingPageNameInput";
import DeleteIcon from "../../../../assets/img/deleteIcon.png";

interface ISaveNavLinksProps extends IAdminComponentsProps {
    navLinks: INavLinks[] | null
    deleteNavLink: Function
}

const SavedNavLinks: React.FC<ISaveNavLinksProps> = ({isLoading, onChangeHandler, deleteNavLink, navLinks}) => {
    return (
        <div className={styles.savedItems}>
            {isLoading && 'Loading...'}
            {navLinks && navLinks.map(navLink => (
                <div key={navLink.id} className={styles.savedItems__items}>
                    <NavLinkInput label={'Навигационная ссылка'}
                                  id={'navLink*' + navLink.id}
                                  type={'text'}
                                  name={'navLink'}
                                  onChangeHandler={onChangeHandler}
                                  required={true}
                                  value={navLink.navLink}
                    />
                    <CorrespondingPageNameInput
                        label={'Соответствующая страница'}
                        id={'correspondingPageName*' + navLink.id}
                        type={'text'}
                        name={'correspondingPageName'}
                        onChangeHandler={onChangeHandler}
                        required={false}
                        value={navLink.correspondingPageName}
                    />
                    <img src={DeleteIcon} alt="delete icon" onClick={() => deleteNavLink(navLink.id)}/>
                </div>
            ))}
        </div>
    );
};

export default SavedNavLinks;
