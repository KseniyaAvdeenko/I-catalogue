import React from 'react';
import styles from '../AdminMain.module.sass'
import {headerLayouts} from "../../Options";
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";

interface IHeaderLayoutProps extends IAdminComponentsProps{
    headerLayout: string | undefined
}

const HeaderLayout: React.FC<IHeaderLayoutProps> = ({isLoading, headerLayout, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer_choose}>
            <div className={styles.form__inputContainer_label}>Размещение элементов в “шапке” сайта</div>
            <div className={styles.choiceBox__container}>
                {headerLayouts.map(layout => (
                    layout.id === headerLayout
                        ?
                        <label key={layout.id} htmlFor={layout.id} className={[styles.choiceBox, styles.choiceBox_selected].join(' ')}>
                            <img src={layout.image} alt={layout.id}/>
                            <input
                                type="radio"
                                name="headerLayout"
                                id={layout.id}
                                value={layout.id}
                                onChange={e => onChangeHandler(e)}
                            />
                        </label>
                        : <label key={layout.id} htmlFor={layout.id} className={styles.choiceBox}>
                            <img src={layout.image} alt={layout.id}/>
                            <input
                                type="radio"
                                name="headerLayout"
                                id={layout.id}
                                value={layout.id}
                                onChange={e => onChangeHandler(e)}
                            />
                        </label>
                ))}
            </div>

        </div>
    );
};

export default HeaderLayout;
