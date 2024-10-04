import React from 'react';
import styles from "../../AdminMain.module.sass";
import {socialIcons} from "../../Options";
import {IAdminComponentsProps, IOptions} from "../../../../interface/IAdminPageComponets";

interface ISocialIconSelectProps extends IAdminComponentsProps {
    linkIcon: string;
    id: number;
    name: string;
    onChangeHandler: Function;
    changeIconsOptionsContainerVisibility: React.MouseEventHandler<HTMLDivElement>
}

const SocialIconSelect: React.FC<ISocialIconSelectProps> = ({
                                                                changeIconsOptionsContainerVisibility,
                                                                linkIcon,
                                                                onChangeHandler,
                                                                isLoading,
                                                                id,
                                                                name
                                                            }) => {

    const getLinkIcon = (linkIconName: string) => {
        const linkIconObj = structuredClone(socialIcons.find(el => el.name === linkIconName))
        return (<img src={linkIconObj.icon} alt={linkIconObj.name} style={{marginRight: '1rem'}}/>)
    }

    return (
        <div className={styles.form__inputContainer_select}>
            <div className={styles.form__inputContainer_label}>Иконка на ссылку</div>
            <div className={styles.form__selectContainer} onClick={e=>changeIconsOptionsContainerVisibility(e)}>
                {isLoading && 'Loading...'}
                {getLinkIcon(linkIcon)}
                {linkIcon}
            </div>
            <div className={styles.form__optionsContainer}
                 style={{display: 'none', bottom: '-20.2rem'}}>
                {socialIcons.map(icon => (
                    <label key={icon.name} htmlFor={icon.name + '*' + id}
                           className={icon.name === linkIcon
                               ? [styles.form__option, styles.selectedOption].join(' ')
                               : [styles.form__option].join(' ')}>
                        <img src={icon.icon} alt={icon.name} style={{marginRight: '1rem'}}/>
                        {icon.name}
                        <input type="radio"
                               value={icon.name}
                               name={name}
                               id={icon.name + '*' + id}
                               onChange={e => onChangeHandler(e)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default SocialIconSelect;
