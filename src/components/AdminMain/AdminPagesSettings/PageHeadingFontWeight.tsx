import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";

interface IPageHeadingFontWeightProps extends IAdminComponentsProps{
    headingFontWeight: number
}

const PageHeadingFontWeight:React.FC<IPageHeadingFontWeightProps> = ({headingFontWeight, isLoading, onChangeHandler}) => {
    return (
         <div className={styles.form__inputContainer}>
            <label htmlFor="headingFontWeight">Жирность заголовка</label>
            {isLoading && 'Loading...'}
            <input
                type="number"
                value={headingFontWeight}
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

export default PageHeadingFontWeight;
