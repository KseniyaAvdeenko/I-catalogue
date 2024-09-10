import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../UI/Inputs/AdminInput";

interface IMainPageHeadingFontWeightProps extends IAdminComponentsProps{
    headingFontWeight: number|undefined
}
const MainPageHeadingFontWeight: React.FC<IMainPageHeadingFontWeightProps> = ({headingFontWeight, isLoading, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="headingFontWeight">Жирность заголовка</label>
            {isLoading && 'Loading...'}
            <input
                type="number"
                value={headingFontWeight ?? 900}
                name={'headingFontWeight'}
                id={'headingFontWeight'}
                min={400}
                max={900}
                step={100}
                onChange={e=>onChangeHandler(e)}
            />
        </div>
    );
};

export default MainPageHeadingFontWeight;
