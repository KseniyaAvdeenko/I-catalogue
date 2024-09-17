import React from 'react';


interface IInput {
    type: string;
    name: string;
    id: string;
    value: string | number | undefined;
    checked: boolean
    onChangeHandler: Function
    required: boolean
    readonly: boolean;
    classname: string;
    step?: number;
    min?: number;
    max?: number;
    pattern?: string
}

const AdminInput: React.FC<IInput> = ({
                                          type,
                                          classname,
                                          checked,
                                          value,
                                          id,
                                          required,
                                          readonly,
                                          onChangeHandler,
                                          name,
                                          step,
                                          min,
                                          max,
                                          pattern
                                      }) => {

    return type === 'text'
        ? (<input type={type}
                  name={name}
                  id={id}
                  value={value ?? ''}
                  onChange={e => onChangeHandler(e)}
                  required={required}
                  readOnly={readonly}
                  className={classname}
                  pattern={pattern}
        />)
        : type === 'number'
            ? (
                <input type={type}
                       name={name}
                       id={id}
                       value={value ?? ''}
                       onChange={e => onChangeHandler(e)}
                       required={required}
                       readOnly={readonly}
                       className={classname}
                       step={step}
                       min={min}
                       max={max}
                />
            )
            : type === 'color'
                ? (
                    <input type={type}
                           name={name}
                           id={id}
                           value={value ?? ''}
                           onChange={e => onChangeHandler(e)}
                           required={required}
                           readOnly={readonly}
                           className={classname}
                    />
                )
                : type === 'radio'
                    ? (
                        <input type={type}
                               name={name}
                               id={id}
                               checked={checked}
                               value={value ?? ''}
                               onChange={e => onChangeHandler(e)}
                               required={required}
                               readOnly={readonly}
                               className={classname}
                        />
                    )
                    : type === 'checkbox'
                        ? (
                            <input type={type}
                                   name={name}
                                   id={id}
                                   checked={checked}
                                   onChange={e => onChangeHandler(e)}
                                   required={required}
                                   readOnly={readonly}
                                   className={classname}
                            />
                        )
                        : type === 'file' ? (
                            <input type={type}
                                   name={name}
                                   id={id}
                                   onChange={e => onChangeHandler(e)}
                                   required={required}
                                   readOnly={readonly}
                                   className={classname}
                            />
                        ) : <></>
};

export default AdminInput;
