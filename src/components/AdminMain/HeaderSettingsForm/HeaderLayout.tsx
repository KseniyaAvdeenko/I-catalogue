import React from 'react';
import styles from '../AdminMain.module.sass'
import {headerLayouts} from "../Options";

interface IHeaderLayoutProps {
    isLoading: boolean;
    onChangeHandler: Function;
    headerLayout: string | undefined
}

const HeaderLayout: React.FC<IHeaderLayoutProps> = ({isLoading, headerLayout, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer_choose}>
            <div className={styles.form__inputContainer_label}>Размещение элементов в “шапке” сайта</div>
            <div className={styles.choiceBox__container}>
                {headerLayouts.map(layout => (
                    layout.id === headerLayout
                        ?<label htmlFor={layout.id} className={[styles.choiceBox, styles.choiceBox_selected].join(' ')}>
                            <img key={layout.id} src={layout.image} alt={layout.id}/>
                            <input type="radio" name="headerLayout" id={layout.id}/>
                        </label>
                        :<label htmlFor={layout.id} className={styles.choiceBox}>
                            <img key={layout.id} src={layout.image} alt={layout.id}/>
                            <input
                                type="radio"
                                name="headerLayout"
                                id={layout.id}
                                value={layout.id}
                                onChange={e=>onChangeHandler(e)}
                            />
                        </label>


                ))}
            </div>

        </div>
    );
};

export default HeaderLayout;
