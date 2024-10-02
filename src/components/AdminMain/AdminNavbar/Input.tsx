import React from 'react';

interface IInput {
    type: string;
    name: string;
    id: string;
    value: string | undefined;
    checked: boolean
    onChangeHandler: Function
    required: boolean
    classname: string
}

const Input: React.FC<IInput> = ({
                                     onChangeHandler,
                                     type,
                                     name,
                                     checked,
                                     value,
                                     id,
                                     required,
                                     classname,
                                 }) => {

    const getInput = (type: string, onChangeHandler: Function, name: string, checked: boolean, value: string | undefined, id: string, required: boolean, classname: string) => {
        if (type === 'checkbox') {
            return (<input
                type={type}
                onChange={e => onChangeHandler(e)}
                name={name}
                id={id}
                checked={checked}
                required={required}
                className={classname ?? ''}
            />)
        } else if (type === 'radio') {
            return (
                <input
                    type={type}
                    checked={checked}
                    onChange={e => onChangeHandler(e)}
                    name={name}
                    id={id}
                    value={value ?? ''}
                    required={required}
                    className={classname ?? ''}
                />
            )
        } else {
            return (
                <input
                    type={type}
                    onChange={e => onChangeHandler(e)}
                    name={name}
                    id={id}
                    value={value ?? ''}
                    required={required}
                    className={classname ?? ''}
                />
            )
        }
    }

    return getInput(type, onChangeHandler, name, checked, value, id, required, classname)
};

export default Input;
