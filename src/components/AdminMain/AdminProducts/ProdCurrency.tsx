import React from 'react';
import {IOptions} from "../../../interface/IAdminPageComponets";
import styles from "../AdminMain.module.sass";
import {currencyTypes} from "../Options";

interface IProdCurrencyProps {
    prodCurrency: string;
    onChangeHandler: Function;
    currencyOptionsVisibility: IOptions
    changeCurrencyOptionsContainerVisibility: React.MouseEventHandler<HTMLDivElement>
}

const ProdCurrency: React.FC<IProdCurrencyProps> = ({
                                                        prodCurrency,
                                                        onChangeHandler,
                                                        currencyOptionsVisibility,
                                                        changeCurrencyOptionsContainerVisibility
                                                    }) => {

    return (
        <div className={styles.form__inputContainer_select} style={{marginBottom: '2rem'}}>
            <div className={styles.form__inputContainer_label}>Валюта</div>
            <div className={styles.form__selectContainer}
                 onClick={changeCurrencyOptionsContainerVisibility}>{currencyTypes.map(cur => (cur.id === prodCurrency ? cur.currency : ''))}</div>
            <div className={styles.form__optionsContainer}
                 style={{display: currencyOptionsVisibility.display, top: currencyOptionsVisibility.top}}>
                {currencyTypes.map(type => (
                    <label key={type.id} htmlFor={type.id}
                           className={type.id === prodCurrency
                               ? [styles.form__option, styles.selectedOption].join(' ')
                               : [styles.form__option].join(' ')}>{type.currency}
                        <input type="radio"
                               value={type.id}
                               name="currency"
                               id={type.id}
                               checked={type.id === prodCurrency}
                               onChange={e => onChangeHandler(e)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default ProdCurrency;
