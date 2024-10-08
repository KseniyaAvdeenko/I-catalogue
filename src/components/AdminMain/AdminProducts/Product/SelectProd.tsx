import React from 'react';
import {IProdReadOnly} from "../../../../interface/IProduct";
import styles from "../../AdminMain.module.sass";
import {IAdminComponentsProps, IOptions} from "../../../../interface/IAdminPageComponets";

interface ISelectProdProps extends IAdminComponentsProps {
    products: IProdReadOnly[];
    prodsOptionsVisibility: IOptions
    setProdsOptionsVisibility: Function;
    selectedProd: IProdReadOnly | null|undefined
}

const SelectProd: React.FC<ISelectProdProps> = ({
                                                    products,
                                                    setProdsOptionsVisibility,
                                                    prodsOptionsVisibility,
                                                    onChangeHandler, selectedProd
                                                }) => {

    const changeProdOptionsContainerVisibility = () => {
        prodsOptionsVisibility.open
            ? setProdsOptionsVisibility({...prodsOptionsVisibility, open: false, display: 'none', bottom: '-8.8rem'})
            : setProdsOptionsVisibility({...prodsOptionsVisibility, open: true, display: 'flex', bottom: '-8.8rem'})
    }


    return (
        <div className={styles.form__inputContainer_select} style={{flexBasis: '30%'}}>
            <div className={styles.form__selectContainer}
                 onClick={changeProdOptionsContainerVisibility}>
                {selectedProd && selectedProd.name}</div>
            <div className={styles.form__optionsContainer}
                 style={{display: prodsOptionsVisibility.display, bottom: prodsOptionsVisibility.bottom}}>
                {products && products.map(product => (
                    <label key={product.id} htmlFor={product.id + product.name}
                           className={selectedProd && product.id === selectedProd.id
                               ? [styles.form__option, styles.selectedOption].join(' ')
                               : [styles.form__option].join(' ')}
                    >{product.name}
                        <input type="radio"
                               value={product.id}
                               name="prod"
                               checked={product.id === selectedProd?.id}
                               id={product.id + product.name}
                               onChange={e => onChangeHandler(e)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default SelectProd;
