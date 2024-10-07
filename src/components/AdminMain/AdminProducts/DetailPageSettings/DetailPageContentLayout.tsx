import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";
import {prodPageContentLayout} from "../../Options";

interface IContentLayoutProps extends IAdminComponentsProps {
    contentLayout: string
}

const DetailPageContentLayout: React.FC<IContentLayoutProps> = ({contentLayout, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer_choose}>
            <div className={styles.form__inputContainer_label}>Размещение контента</div>
            <div className={styles.choiceBox__container}>
                {prodPageContentLayout.map(layout => (
                    <label key={layout.id} htmlFor={layout.id}
                           style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                           className={layout.id === contentLayout
                               ? [styles.choiceBox, styles.choiceBox_selected].join(' ')
                               : [styles.choiceBox].join(' ')}>
                        <img src={layout.image} alt={layout.id}/>
                        <input
                            type="radio"
                            name="contentLayout"
                            id={layout.id}
                            checked={layout.id === contentLayout}
                            value={layout.id}
                            onChange={e => onChangeHandler(e)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default DetailPageContentLayout;
