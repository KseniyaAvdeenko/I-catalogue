import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../../UI/Inputs/AdminInput";
interface ICardsQuantityInRowProps extends IAdminComponentsProps{
    cardQuantityInRow: number|undefined
}
const CardQuantityInRow: React.FC<ICardsQuantityInRowProps> = ({cardQuantityInRow, isLoading, onChangeHandler}) => {
    return (
         <div className={styles.form__inputContainer}>
            <label htmlFor="cardQuantityInRow">Количество карточек товара\услуги в ряду</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={"number"}
                name={'cardQuantityInRow'}
                id={'cardQuantityInRow'}
                value={cardQuantityInRow ?? 4}
                checked={false}
                onChangeHandler={onChangeHandler}
                required={false}
                readonly={false}
                classname={''}
            />
        </div>
    );
};

export default CardQuantityInRow;
