import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import {ISocialLink} from "../../../../interface/INavbar";
import styles from "../../AdminNavbar.module.sass";
import SocialIconSelect from "./SocialIconSelect";
import SocialIconTypeSelect from "./SocialIconTypeSelect";
import SocialLinkHref from "./SocialLinkHref";
import SocialLinkColor from "./SocialLinkColor";
import DeleteIcon from "../../../../assets/img/deleteIcon.svg";

interface ISavedSocialLinksProps extends IAdminComponentsProps {
    socialLinks: ISocialLink[];
    deleteSavedSocialLink: Function;
    changeIconTypesOptionsContainerVisibility: React.MouseEventHandler<HTMLDivElement>;
    changeIconsOptionsContainerVisibility: React.MouseEventHandler<HTMLDivElement>;
}

const SavedSocialLinks: React.FC<ISavedSocialLinksProps> = ({
                                                                changeIconTypesOptionsContainerVisibility,
                                                                changeIconsOptionsContainerVisibility,
                                                                socialLinks,
                                                                deleteSavedSocialLink,
                                                                onChangeHandler
                                                            }) => {
    return (
        <div className={styles.savedItems} style={{borderBottom: socialLinks.length ? '.1rem solid #926B6A' : 'none'}}>
            {socialLinks && socialLinks.map(link => (
                <div key={link.id} className={styles.savedItems__items}>
                    <SocialIconSelect
                        id={link.id}
                        onChangeHandler={onChangeHandler}
                        changeIconsOptionsContainerVisibility={changeIconsOptionsContainerVisibility}
                        linkIcon={link.linkIcon}
                        name={'linkIcon'}/>
                    <SocialIconTypeSelect
                        linkIconType={link.linkIconType}
                        id={link.id} name={'linkIconType'}
                        onChangeHandler={onChangeHandler}
                        changeIconsOptionsContainerVisibility={changeIconTypesOptionsContainerVisibility}/>
                    <SocialLinkColor
                        socialLinkType={link.linkIconType}
                        socialLinkColor={link.socialLinkColor}
                        id={link.id}
                        onChangeHandler={onChangeHandler}/>
                    <SocialLinkHref
                        onChangeHandler={onChangeHandler}
                        required={true}
                        value={link.linkHref}
                        id={'linkHref*' + link.id}
                        label={'Ссылка'}
                        type={'text'}
                        name={'linkHref'}
                    />
                    <img src={DeleteIcon} alt="delete icon" onClick={() => deleteSavedSocialLink(link.id)}/>
                </div>
            ))}
        </div>
    );
};

export default SavedSocialLinks;
