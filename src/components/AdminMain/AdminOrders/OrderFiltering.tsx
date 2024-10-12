import React from 'react';
import styles from "../AdminMain.module.sass";
import {filterOptions} from "../Options";
import {IFilter, IOptions} from "../../../interface/IAdminPageComponets";

interface IOrderFilteringProps {
    onChangeHandler: Function
    filter: IFilter;
    filterOptionVisibility: IOptions;
    setFilterOptionVisibility: Function
}

const OrderFiltering: React.FC<IOrderFilteringProps> = ({
                                                            onChangeHandler,
                                                            filter,
                                                            setFilterOptionVisibility,
                                                            filterOptionVisibility
                                                        }) => {
    return (
        <div className={styles.form__inputContainer_select}>
            <div className={styles.form__inputContainer_label}>Показать</div>
            <div className={styles.form__selectContainer}
                 onClick={() => filterOptionVisibility.open
                     ? setFilterOptionVisibility({...filterOptionVisibility, display: 'none', open: false})
                     : setFilterOptionVisibility({...filterOptionVisibility, display: 'flex', open: true})
                 }>
                {filterOptions.map(el => (el.id === filter.filter ? el.name : ''))}
            </div>
            <div className={styles.form__optionsContainer}
                 style={{bottom: '-13.2rem', display: filterOptionVisibility.display}}>
                {filterOptions.map(option => (
                    <label key={option.id} htmlFor={option.id}
                           className={option.id === filter.filter
                               ? [styles.form__option, styles.selectedOption].join(' ')
                               : [styles.form__option].join(' ')}>{option.name}
                        <input type="radio"
                               value={option.id}
                               name="filter"
                               id={option.id}
                               onChange={e => onChangeHandler(e)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default OrderFiltering;
