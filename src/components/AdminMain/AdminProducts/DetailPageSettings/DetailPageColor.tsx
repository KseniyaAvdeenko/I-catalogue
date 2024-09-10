import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";
import AdminInput from "../../../UI/Inputs/AdminInput";

interface IDetailedPageColorProps extends IAdminComponentsProps {
    background: string
}

const DetailPageColor: React.FC<IDetailedPageColorProps> = ({background, onChangeHandler, isLoading}) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="background">Фон страницы товара\услуги</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={"color"}
                name={'background'}
                id={'background'}
                value={background}
                checked={false}
                onChangeHandler={onChangeHandler}
                required={false}
                readonly={false}
                classname={''}
            />
        </div>
    );
};

export default DetailPageColor;
