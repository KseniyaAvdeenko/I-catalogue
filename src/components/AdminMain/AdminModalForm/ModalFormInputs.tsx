import React, {useState} from 'react';
import styles from "../AdminNavbar.module.sass";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import SavedFormInputs from "./SavedFormInputs";
import {deleteModalFormLabel} from "../../../store/actions/modalFormAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";
import NewInputForm from "./NewInputForm";
import {IModalLabelBase, IModalLabels, ModalInputTypes} from "../../../interface/IModalForm";

const ModalFormInputs = () => {
    const {modalForm, error, isLoading} = useAppSelector(state => state.modalFormReducer)
    const dispatch = useAppDispatch()
    //--states

    const [fields, setFields] = useState<IModalLabels[]>([{id: 0, inputLabel: '', inputIdName: '', inputType: "text"}])

    const onSavedInputsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log({[e.target.name]: e.target.value})
    }
    const onNewInputsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log({[e.target.name]: e.target.value}, parseInt(e.target.id.split('*')[1]))
        setFields(fields=>fields.map(field=>
        field.id === parseInt(e.target.id.split('*')[1])
            ?{...field, [e.target.name]: e.target.value}
            :field
        ))
    }

    const deleteInput = (id: number) => dispatch(deleteModalFormLabel(decodeToken(localStorage.access), id))


    const saveNewInput = (id: number) => {
        const newField = fields.find(el => el.id === id)
        console.log('save', newField)
    }

    //--methods

    const deleteField = (id: number) => {
        setFields(fields.filter(el => el.id !== id))
    }

    const saveAllFields = () => {
        let array: IModalLabelBase[] = []
        fields.map(el => {
            const field: IModalLabelBase = {
                inputLabel: el.inputLabel,
                inputIdName: el.inputIdName,
                inputType: el.inputType
            }
            array.push(field)
        })

        setFields([{id: 0, inputLabel: '', inputIdName: '', inputType: "text"}])
        console.log('save', array)
    }

    const addNewField = () => {
        const field: IModalLabels = {id: fields.length, inputLabel: '', inputIdName: '', inputType: "text"}
        setFields([...fields, field])
    }

    return (
        <section id={'addingFormInputsSection'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h2 className={styles.AdminNavbar__heading}>Добавление и редактирование полей ввода модального окна</h2>
            <div className={styles.AdminNavbar__formContainer}>
                {modalForm && modalForm.labels && (
                    <SavedFormInputs
                        formInputs={modalForm.labels}
                        isLoading={isLoading}
                        onChangeHandler={onSavedInputsChangeHandler}
                        deleteInput={deleteInput}/>
                )}
                <NewInputForm
                    onChangeHandler={onNewInputsChangeHandler}
                    saveNewInput={saveNewInput} fields={fields}
                    deleteField={deleteField}/>
                <button className={styles.AdminNavbar__button} onClick={addNewField}>Добавить поле</button>
                <button className={styles.AdminNavbar__button} style={{marginTop: '2rem'}}
                        onClick={saveAllFields}>Сохранить все поля ввода
                </button>
            </div>

        </section>
    );
};

export default ModalFormInputs;
