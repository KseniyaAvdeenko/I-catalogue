import React from 'react';
import styles from '../../AdminNavbar.module.sass'
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import SavedProdAttrs from "./SavedProdAttrs";

import {IProdAttrs, IProdAttrsBase} from "../../../../interface/IProduct";
import NewProdAttrForm from "./NewProdAttrForm";
import {slugify} from "transliteration";
import {createProdAttribute, deleteProdAttribute, updateProdAttribute} from "../../../../store/actions/prodAttrsAction";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";

const ProductsAttributes = () => {
    const {error, isLoading, prodAttrs} = useAppSelector(state => state.prodAttrsReducer)
    const dispatch = useAppDispatch();
    //states
    const [fields, setFields] = React.useState<IProdAttrs[]>([{id: 0, attribute: ''}])
    const [newAttr, setNewAttr] = React.useState<IProdAttrsBase>({attribute: ''})

    const deleteProdAttr = (id: number) => {
        if (localStorage.access) {
            dispatch(deleteProdAttribute(decodeToken(localStorage.access), id))
        }
    }

    const addNewField = () => {
        const newField: IProdAttrs = {id: 0, attribute: ''}
        newField.id = fields.length;
        setFields([...fields, newField])
    }

    const onChangeNewAttrHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFields(fields =>
            fields.map(field =>
                field.id === parseInt(e.target.id.split('*')[1])
                    ? {...field, [e.target.name]: e.target.value}
                    : field
            )
        )
        setNewAttr({...newAttr, [e.target.name]: e.target.value})
    }

    const deleteField = (id: number) => {
        setFields(fields.filter(el => el.id != id))
    }

    const saveAttr = (id: number) => {
        if (localStorage.access) {
            dispatch(createProdAttribute(decodeToken(localStorage.access), newAttr))
            if (!error) {
                deleteField(id);
                setNewAttr({...newAttr, attribute: ''})
            }
        }
    }


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (localStorage.access) {
            let attrId = parseInt(e.target.id.split('*')[1])
            dispatch(updateProdAttribute(decodeToken(localStorage.access), attrId, {[e.target.name]: e.target.value}))
        }
    }

    return (
        <section id={'addingProdAttrsSection'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h3 className={styles.AdminNavbar__subheading}>Добавление характеристик товара\услуги</h3>
            <div className={styles.AdminNavbar__formContainer}>
                {prodAttrs && (
                    <SavedProdAttrs deleteProdAttribute={deleteProdAttr} attrs={prodAttrs}
                                    isLoading={isLoading} onChangeHandler={onChangeHandler}/>
                )}
                <NewProdAttrForm
                    fields={fields}
                    onChangeHandler={onChangeNewAttrHandler}
                    deleteField={deleteField}
                    saveNewAttr={saveAttr}
                />
                <button className={styles.AdminNavbar__button} onClick={addNewField}> Добавить</button>
            </div>


        </section>
    );
};

export default ProductsAttributes;
