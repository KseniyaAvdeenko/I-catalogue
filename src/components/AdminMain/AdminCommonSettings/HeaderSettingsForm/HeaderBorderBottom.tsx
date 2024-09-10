import React from 'react';
import styles from "../../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import AdminInput from "../../../UI/Inputs/AdminInput";

interface IHeaderBorderBottomProps extends IAdminComponentsProps {
    headerBorderBottom: boolean
}

const HeaderBorderBottom: React.FC<IHeaderBorderBottomProps> = ({
                                                                    headerBorderBottom, isLoading,
                                                                    onChangeHandler
                                                                }) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="headerBottomBorder">Нижняя граница “шапки” сайта</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={"checkbox"}
                name={'headerBottomBorder'}
                id={'headerBottomBorder'}
                value={''}
                checked={headerBorderBottom}
                onChangeHandler={onChangeHandler}
                required={false}
                readonly={false}
                classname={''}
            />
        </div>
    );
};

export default HeaderBorderBottom;
