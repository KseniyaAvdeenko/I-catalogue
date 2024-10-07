import React, {useEffect, useState} from 'react';
import styles from "../AdminNavbar.module.sass";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import SavedFormInputs from "./SavedFormInputs";
import {createModalFormLabel, deleteModalFormLabel, updateModalFormLabel} from "../../../store/actions/modalFormAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";
import NewInputForm from "./NewInputForm";
import {IModalLabels} from "../../../interface/IModalForm";
import Loader from "../../UI/Loader/Loader";

const ModalFormInputs = () => {
    const {modalForm, error, isLoading} = useAppSelector(state => state.modalFormReducer)
    const dispatch = useAppDispatch()
    //--states

    const [fields, setFields] = useState<IModalLabels[]>([{id: 0, inputLabel: '', inputIdName: '', inputType: "text"}])
    const [savedLabelsTypes, setSavedLabelsTypes] = useState<string[]>([])
    //--methods
    useEffect(() => {
        if (modalForm && modalForm.labels.length) {
            modalForm.labels.map(el => {
                if (!savedLabelsTypes.includes(el.inputType)) setSavedLabelsTypes([...savedLabelsTypes, el.inputType])
            })
        }
    }, [modalForm])

    const onSavedInputsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateModalFormLabel(decodeToken(localStorage.access), parseInt(e.target.id.split('*')[1]), {[e.target.name]: e.target.value}))
    }
    const onNewInputsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFields(fields => fields.map(field =>
            field.id === parseInt(e.target.id.split('*')[1])
                ? {...field, [e.target.name]: e.target.value}
                : field
        ))
    }

    const deleteInput = (id: number) => dispatch(deleteModalFormLabel(decodeToken(localStorage.access), id))

    const saveNewInput = (id: number) => {
        const newField = fields.find(el => el.id === id)
        if (modalForm && newField && newField.inputLabel && newField.inputIdName) {
            dispatch(createModalFormLabel(decodeToken(localStorage.access),
                {
                    form: modalForm.id,
                    inputLabel: newField.inputLabel,
                    inputIdName: newField.inputIdName,
                    inputType: newField.inputType
                })
            )
        }
        deleteField(id)
    }

    const deleteField = (id: number) => {
        setFields(fields.filter(el => el.id !== id))
    }

    const saveAllFields = () => {
        if (modalForm) {
            fields.map(el => {
                if (el.inputLabel && el.inputIdName) {
                    const field = {
                        form: modalForm.id,
                        inputLabel: el.inputLabel,
                        inputIdName: el.inputIdName,
                        inputType: el.inputType
                    }
                    dispatch(createModalFormLabel(decodeToken(localStorage.access), field))
                }
            })
            setFields([{id: 0, inputLabel: '', inputIdName: '', inputType: "text"}])
        }
    }

    const addNewField = () => {
        const newField: IModalLabels = {id: fields.length, inputLabel: '', inputIdName: '', inputType: "text"}
        setFields([...fields, newField])
    }

    return (
        <section id={'addingFormInputsSection'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h2 className={styles.AdminNavbar__heading}>Добавление и редактирование полей ввода модального окна</h2>
            {modalForm
                ? <div className={styles.AdminNavbar__formContainer}>
                    {modalForm && modalForm.labels
                        ? <SavedFormInputs
                            formInputs={modalForm.labels}
                            onChangeHandler={onSavedInputsChangeHandler}
                            deleteInput={deleteInput}
                            savedLabelsTypes={savedLabelsTypes}
                        />
                        : <div className={styles.savedItems_UnLoaded}>{isLoading && (<Loader/>)}</div>
                    }
                    <NewInputForm
                        onChangeHandler={onNewInputsChangeHandler}
                        saveNewInput={saveNewInput} fields={fields}
                        deleteField={deleteField}
                        savedLabelsTypes={savedLabelsTypes}/>
                    <button className={styles.AdminNavbar__button} onClick={addNewField}>Добавить поле</button>
                    <button className={styles.AdminNavbar__button} style={{marginTop: '2rem'}}
                            onClick={saveAllFields}>Сохранить все поля ввода
                    </button>
                </div>
                : <div className={styles.AdminNavbar__formContainer_UnLoaded}>{isLoading && (<Loader/>)}</div>
            }
        </section>
    );
};

export default ModalFormInputs;
