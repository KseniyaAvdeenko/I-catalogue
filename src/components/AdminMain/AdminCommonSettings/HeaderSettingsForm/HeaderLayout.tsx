import React from 'react';
import styles from '../../AdminMain.module.sass'
import {headerLayouts} from "../../Options";
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";


interface IHeaderLayoutProps extends IAdminComponentsProps{
    headerLayout: string;
}

const HeaderLayout: React.FC<IHeaderLayoutProps> = ({headerLayout, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer_choose}>
            <div className={styles.form__inputContainer_label}>Размещение элементов в “шапке” сайта</div>
            <div className={styles.choiceBox__container}>
                {headerLayouts.map(layout => (
                    <label key={layout.id} htmlFor={layout.id}
                           className={layout.value === headerLayout
                               ? [styles.choiceBox, styles.choiceBox_selected].join(' ')
                               : [styles.choiceBox].join(' ')}>
                        <img src={layout.image} alt={layout.id}/>
                        <input
                            type="radio"
                            name="headerLayout"
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

export default HeaderLayout;
