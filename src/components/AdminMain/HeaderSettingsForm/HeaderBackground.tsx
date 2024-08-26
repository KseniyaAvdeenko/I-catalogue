import React from 'react';
import styles from "../AdminMain.module.sass";

interface IHeaderBackgroundProps {
    isLoading: boolean;
    onChangeHandler: Function;
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
            <input type="color"
                   value={headerBg}
                   name={'background'}
                   id={'headerBg'}
                   onChange={e => onChangeHandler(e)}
            />
        </div>
    );
};

export default HeaderBackground;
