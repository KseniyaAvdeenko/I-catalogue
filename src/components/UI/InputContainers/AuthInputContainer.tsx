import React from 'react';

interface ILoginInputProps {
    inputContainerClass: string;
    type: string;
    name: string;
    onFocusHandler: React.FocusEventHandler<HTMLInputElement>;
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    onBlurHandler: React.FocusEventHandler<HTMLInputElement>;
    value: string;
    required: boolean;
    label: string;
}

const AuthInputContainer: React.FC<ILoginInputProps> = ({
                                                            inputContainerClass,
                                                            onBlurHandler,
                                                            onFocusHandler,
                                                            onChangeHandler,
                                                            name,
                                                            value,
                                                            type,
                                                            required,
                                                            label,
                                                        }) => {
    return (
        <div className={inputContainerClass}>
            <label htmlFor={name} style={{top: '1rem', color: '#333333'}}>{label} {required && (<sup style={{color: 'red'}}>*</sup>)}</label>
            <input type={type} name={name} id={name}
                   onFocus={e => onFocusHandler(e)}
                   onBlur={e => onBlurHandler(e)}
                   onChange={e => onChangeHandler(e)}
                   value={value}
                   required={required}
            />
            <div style={{display: 'none'}}></div>
        </div>
    );
};

export default AuthInputContainer;
