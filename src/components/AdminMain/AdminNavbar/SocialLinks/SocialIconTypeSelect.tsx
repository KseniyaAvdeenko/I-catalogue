import React from 'react';
import styles from "../../AdminMain.module.sass";
import {socialIconTypes} from "../../Options";
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import {SocialLinkIconType} from "../../../../interface/INavbar";

interface ISocialIconTypeSelectProps extends IAdminComponentsProps {
    linkIconType: SocialLinkIconType;
    id: number;
    name: string;
    onChangeHandler: Function;
    changeIconsOptionsContainerVisibility: React.MouseEventHandler<HTMLDivElement>
}

const SocialIconTypeSelect: React.FC<ISocialIconTypeSelectProps> = ({
                                                                changeIconsOptionsContainerVisibility,
                                                                linkIconType,
                                                                onChangeHandler,
                                                                id,
                                                                name
                                                            }) => {

    const getLinkIconType = (linkIconType: string) => {
        const linkIconTypeObj = structuredClone(socialIconTypes.find(el => el.id === linkIconType))
        return (<><img src={linkIconTypeObj.icon} alt={linkIconTypeObj.id} style={{marginRight: '1rem'}}/>{linkIconTypeObj.name}</>)
    }

    return (
        <div className={styles.form__inputContainer_select}>
            <div className={styles.form__inputContainer_label}>Вид иконки на ссылку</div>
            <div className={styles.form__selectContainer} onClick={e=>changeIconsOptionsContainerVisibility(e)}>
                {getLinkIconType(linkIconType)}
            </div>
            <div className={styles.form__optionsContainer}
                 style={{display: 'none', bottom: '-18.5rem'}}>
                {socialIconTypes.map(type => (
                    <label key={type.id} htmlFor={type.id + '*' + id}
                           className={type.id === linkIconType
                               ? [styles.form__option, styles.selectedOption].join(' ')
                               : [styles.form__option].join(' ')}>
                        <img src={type.icon} alt={type.id} style={{marginRight: '1rem'}}/>
                        {type.name}
                        <input type="radio"
                               value={type.id}
                               name={name}
                               id={type.id + '*' + id}
                               onChange={e => onChangeHandler(e)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default SocialIconTypeSelect;
