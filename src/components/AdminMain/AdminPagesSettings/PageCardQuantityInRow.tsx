import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import AdminInput from "../../../UI/Inputs/AdminInput";

interface IPageCardQuantityInRowProps extends IAdminComponentsProps {
    isBlockWithProds: boolean;
    cardQuantityInRow: number | undefined
}

const PageCardQuantityInRow: React.FC<IPageCardQuantityInRowProps> = ({
                                                                          cardQuantityInRow,
                                                                          isBlockWithProds,
                                                                          isLoading,
                                                                          onChangeHandler
                                                                      }) => {
    return (
        <div className={styles.form__inputContainer} style={{display: isBlockWithProds ? 'flex' : 'none'}}>
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

export default PageCardQuantityInRow;
