import React from 'react';
import {IOptions} from "../../../../interface/IAdminPageComponets";
import styles from "../../AdminMain.module.sass";
import {currencyTypes} from "../../Options";

interface IProdCurrencyProps {
    newProdCurrency: string;
    onChangeHandler: Function;
    currencyOptionsVisibility: IOptions
    setCurrencyOptionsVisibility: Function;
}

const ProdCurrency: React.FC<IProdCurrencyProps> = ({
                                                        newProdCurrency,
                                                        onChangeHandler,
                                                        currencyOptionsVisibility,
                                                        setCurrencyOptionsVisibility
                                                    }) => {
     const changeCurrencyOptionsContainerVisibility = () => {
        currencyOptionsVisibility.open
            ? setCurrencyOptionsVisibility({...currencyOptionsVisibility, open: false, display: 'none', bottom: '-12.9rem'})
            : setCurrencyOptionsVisibility({...currencyOptionsVisibility, open: true, display: 'flex', bottom: '-12.9rem'})
    }
    return (
         <div className={styles.form__inputContainer_select} style={{marginBottom: '2rem'}}>
            <div className={styles.form__inputContainer_label}>Валюта</div>
            <div className={styles.form__selectContainer}
                 onClick={changeCurrencyOptionsContainerVisibility}>{currencyTypes.map(cur=>(cur.id === newProdCurrency?cur.currency:''))}</div>
            <div className={styles.form__optionsContainer}
                 style={{display: currencyOptionsVisibility.display, bottom: currencyOptionsVisibility.bottom}}>
                {currencyTypes.map(type => (
                        <label key={type.id} htmlFor={type.id}
                                 className={type.currency === newProdCurrency
                                     ?[styles.form__option, styles.selectedOption].join(' ')
                                     :[styles.form__option].join(' ')}>{type.currency}
                            <input type="radio"
                                   value={type.id}
                                   name="currency"
                                   id={type.id}
                                   onChange={e => onChangeHandler(e)}
                            />
                        </label>
                ))}
            </div>
        </div>
    );
};

export default ProdCurrency;
