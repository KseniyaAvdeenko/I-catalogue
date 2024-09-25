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
    labelStyle: { top: string, color: string };
    label: string;
}

const AuthInputContainer: React.FC<ILoginInputProps> = ({
                                                            labelStyle,
                                                            inputContainerClass,
                                                            onBlurHandler,
                                                            onFocusHandler,
                                                            onChangeHandler,
                                                            name,
                                                            value,
                                                            type,
                                                            required,
                                                            label
                                                        }) => {
    return (
        <div className={inputContainerClass}>
            <label htmlFor={name} style={labelStyle}>{label}</label>
            <input type={type} name={name} id={name}
                   onFocus={e => onFocusHandler(e)}
                   onBlur={e => onBlurHandler(e)}
                   onChange={e => onChangeHandler(e)}
                   value={value}
                   required={required}
            />
        </div>
    );
};

export default AuthInputContainer;
