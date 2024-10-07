import React, {useEffect} from 'react';
import styles from '../../AdminNavbar.module.sass'
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import SavedProdAttrs from "./SavedProdAttrs";
import {IProdAttrs} from "../../../../interface/IProduct";
import NewProdAttrForm from "./NewProdAttrForm";
import {createProdAttribute, deleteProdAttribute, updateProdAttribute} from "../../../../store/actions/prodAttrsAction";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import Loader from "../../../UI/Loader/Loader";

const ProductsAttributes = () => {
    const {error, isLoading, prodAttrs} = useAppSelector(state => state.prodAttrsReducer)
    const dispatch = useAppDispatch();
    //states
    const [fields, setFields] = React.useState<IProdAttrs[]>([{id: 0, attribute: ''}])

    //methods
    useEffect(() => {
        if (!fields.length) addNewField()
    }, [fields.length])

    const deleteProdAttr = (id: number) => dispatch(deleteProdAttribute(decodeToken(localStorage.access), id))

    const addNewField = () => {
        const newField: IProdAttrs = {id: 0, attribute: ''}
        newField.id = fields.length;
        setFields([...fields, newField])
    }

    const onChangeNewAttrHandler = (e: React.ChangeEvent<HTMLInputElement>) => setFields(fields =>
        fields.map(field =>
            field.id === parseInt(e.target.id.split('*')[1])
                ? {...field, [e.target.name]: e.target.value}
                : field
        )
    )

    const deleteField = (id: number) => setFields(fields.filter(el => el.id != id))

    const saveAttr = (id: number) => {
        const newAttr = structuredClone(fields.find(el => el.id === id))
        if (newAttr.attribute) {
            dispatch(createProdAttribute(decodeToken(localStorage.access), {attribute: newAttr.attribute}))
            deleteField(id);
        }
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (localStorage.access) {
            let attrId = parseInt(e.target.id.split('*')[1])
            dispatch(updateProdAttribute(decodeToken(localStorage.access), attrId, {[e.target.name]: e.target.value}))
        }
    }

    const saveAllFields = () => fields.map(elem => saveAttr(elem.id))


    return (
        <section id={'addingProdAttrsSection'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h3 className={styles.AdminNavbar__subheading}>Добавление характеристик товара\услуги</h3>
            <div className={styles.AdminNavbar__formContainer}>
                {prodAttrs
                    ?<SavedProdAttrs
                        deleteProdAttribute={deleteProdAttr}
                        attrs={prodAttrs}
                        onChangeHandler={onChangeHandler}/>
                    :<div className={styles.savedItems_UnLoaded}>{isLoading && (<Loader/>)}</div>
                }
                <NewProdAttrForm
                    fields={fields}
                    onChangeHandler={onChangeNewAttrHandler}
                    deleteField={deleteField}
                    saveNewAttr={saveAttr}
                />
                <button className={styles.AdminNavbar__button} onClick={addNewField}>Добавить поле</button>
                <button className={styles.AdminNavbar__button} style={{marginTop: '2rem'}}
                        onClick={saveAllFields}>Сохранить все контакты
                </button>
            </div>
        </section>
    );
};

export default ProductsAttributes;
