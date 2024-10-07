import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";

interface ISocialLinkColorProps extends IAdminComponentsProps {
    socialLinkType: string
    socialLinkColor: string
    id: number
}

const SocialLinkColor: React.FC<ISocialLinkColorProps> = ({
                                                              socialLinkType,
                                                              id,

                                                              socialLinkColor,
                                                              onChangeHandler,
                                                          }) => {
    return (
        <div className={styles.form__inputContainer}
             style={{marginBottom: 0, display: socialLinkType === 'fulfilledMonotone'||socialLinkType === 'outlinedMonotone' ? 'flex': 'none'}}>
            <label htmlFor="buttonBorderColor">Цвет иконки</label>
            <input type="color"
                   value={socialLinkColor}
                   name={'socialLinkColor'}
                   id={'socialLinkColor*' + id}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default SocialLinkColor;
