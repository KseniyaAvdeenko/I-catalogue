import React from 'react';
import styles from "../../AdminMain.module.sass";
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import AdminInput from "../../../UI/Inputs/AdminInput";

interface IHeaderBackgroundProps extends IAdminComponentsProps{
    headerBg: string | undefined;
}

const HeaderBackground: React.FC<IHeaderBackgroundProps> = ({
                                                                headerBg, isLoading,
                                                                onChangeHandler,
                                                            }) => {
    return (
        <div className={styles.form__inputContainer}>
            <label htmlFor="headerBg">Цвет фона</label>
            {isLoading && 'Loading...'}
            <AdminInput type={'color'}
                        name={'background'}
                        id={'headerBg'}
                        value={headerBg??'#fff'}
                        checked={false}
                        onChangeHandler={onChangeHandler}
                        required={false}
                        classname={''}
                        readonly={false}/>
        </div>
    );
};

export default HeaderBackground;
