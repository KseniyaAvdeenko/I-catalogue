import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../UI/Inputs/AdminInput";

interface IPageProdBackgroundProps extends IAdminComponentsProps {
    prodBackground: string | undefined;
    isBlockWithProds: boolean;
}

const PageProdBackground: React.FC<IPageProdBackgroundProps> = ({prodBackground, isBlockWithProds, isLoading, onChangeHandler}) => {
    return (
        <div className={styles.form__inputContainer} style={{display: isBlockWithProds?'flex':'none'}}>
            <label htmlFor="prodBackground">Фон карточки товара\услуги</label>
            {isLoading && 'Loading...'}
            <AdminInput type={"color"}
                        value={prodBackground ?? '#bbb'}
                        name={'prodBackground'}
                        id={'prodBackground'}
                        classname={''}
                        checked={false}
                        required={false}
                        readonly={false}
                        onChangeHandler={onChangeHandler}
            />
        </div>
    );
};

export default PageProdBackground;
