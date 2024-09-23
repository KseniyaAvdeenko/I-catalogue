import React from 'react';
import styles from "../../AdminMain.module.sass";
import {footerLayouts} from "../../Options";


interface IFooterContentLayoutProps {
    footerLayout: string|undefined;
    onChangeHandler: Function;
}

const FooterContentLayout: React.FC<IFooterContentLayoutProps> = ({footerLayout, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer_choose}>
            <div className={styles.form__inputContainer_label}>Размещение элементов в “шапке” сайта</div>
            <div className={styles.choiceBox__container}>
                {footerLayouts.map(layout => (
                    layout.value === footerLayout
                        ?
                        <label key={layout.id} htmlFor={layout.id} className={[styles.choiceBox, styles.choiceBox_selected].join(' ')}>
                            <img src={layout.image} alt={layout.id}/>
                            <input
                                type="radio"
                                name="contentLayout"
                                id={layout.id}
                                value={layout.value}
                                onChange={e => onChangeHandler(e)}
                            />
                        </label>
                        : <label key={layout.id} htmlFor={layout.id} className={styles.choiceBox}>
                            <img src={layout.image} alt={layout.id}/>
                            <input
                                type="radio"
                                name="contentLayout"
                                id={layout.id}
                                value={layout.value}
                                onChange={e => onChangeHandler(e)}
                            />
                        </label>
                ))}
            </div>
        </div>
    );
};

export default FooterContentLayout;
