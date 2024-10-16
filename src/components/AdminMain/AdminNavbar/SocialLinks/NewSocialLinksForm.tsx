import React from 'react';
import {ISocialLink} from "../../../../interface/INavbar";
import styles from "../../AdminNavbar.module.sass";
import SocialIconSelect from "./SocialIconSelect";
import SocialIconTypeSelect from "./SocialIconTypeSelect";
import SocialLinkHref from "./SocialLinkHref";
import SocialLinkColor from "./SocialLinkColor";
import SaveIcon from "../../../../assets/img/saveIcon.svg";
import DeleteIcon from "../../../../assets/img/deleteIcon.svg";

interface INewSocialLinksFormProps {
    fields: ISocialLink[];
    deleteField: Function;
    onChangeHandler: Function;
    saveNewSocialLink: Function;
    changeIconTypesOptionsContainerVisibility: React.MouseEventHandler<HTMLDivElement>;
    changeIconsOptionsContainerVisibility: React.MouseEventHandler<HTMLDivElement>;
}

const NewSocialLinksForm: React.FC<INewSocialLinksFormProps> = ({
                                                                    changeIconTypesOptionsContainerVisibility,
                                                                    fields,
                                                                    saveNewSocialLink,
                                                                    onChangeHandler,
                                                                    deleteField,
                                                                    changeIconsOptionsContainerVisibility
                                                                }) => {
    return (
        <div className={styles.formItems}>
            {fields && fields.map(field => (
                <div key={field.id} className={styles.formItems__items}>
                    <SocialIconSelect
                        id={field.id}
                        onChangeHandler={onChangeHandler}
                        changeIconsOptionsContainerVisibility={changeIconsOptionsContainerVisibility}
                        linkIcon={field.linkIcon}
                        name={'linkIcon'}/>
                    <SocialIconTypeSelect
                        linkIconType={field.linkIconType}
                        id={field.id} name={'linkIconType'}
                        onChangeHandler={onChangeHandler}
                        changeIconsOptionsContainerVisibility={changeIconTypesOptionsContainerVisibility}
                    />
                    <SocialLinkColor
                        socialLinkType={field.linkIconType}
                        socialLinkColor={field.socialLinkColor}
                        id={field.id}
                        onChangeHandler={onChangeHandler}/>
                    <SocialLinkHref
                        onChangeHandler={onChangeHandler}
                        required={true}
                        value={field.linkHref}
                        id={'linkHref*' + field.id}
                        label={'Ссылка'}
                        type={'text'}
                        name={'linkHref'}
                    />
                    <div style={{display: 'flex'}}>
                        <img src={SaveIcon} alt="save icon" onClick={() => saveNewSocialLink(field.id)} style={{marginRight: '1rem'}}/>
                        <img src={DeleteIcon} alt="delete icon" onClick={() => deleteField(field.id)}/>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default NewSocialLinksForm;
