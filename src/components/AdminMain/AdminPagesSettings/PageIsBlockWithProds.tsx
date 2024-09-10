import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../UI/Inputs/AdminInput";

interface IPageIsBlockWithProdsProps extends IAdminComponentsProps{
    isBlockWithProds: boolean
}

const PageIsBlockWithProds:React.FC<IPageIsBlockWithProdsProps> = ({isBlockWithProds, isLoading, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="isBlockWithProds">Является ли станица каталогом товаров\услуг</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={"checkbox"}
                name={'isBlockWithProds'}
                id={'isBlockWithProds'}
                value={''}
                checked={isBlockWithProds}
                onChangeHandler={onChangeHandler}
                required={false}
                readonly={false}
                classname={''}
            />
        </div>
    );
};

export default PageIsBlockWithProds;
