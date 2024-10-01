import React from 'react';
import AuthInput from "../UI/Inputs/AuthInput";

interface IPasswordInputProps {
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
    imgClassName: string;
    image: string;
    passwordVisibilityHandler: React.MouseEventHandler
}

const PasswordInput: React.FC<IPasswordInputProps> = ({
                                                          labelStyle,
                                                          inputContainerClass,
                                                          onBlurHandler,
                                                          onFocusHandler,
                                                          onChangeHandler,
                                                          name,
                                                          value,
                                                          type,
                                                          required,
                                                          label,
                                                          imgClassName,
                                                          image,
                                                          passwordVisibilityHandler,
                                                      }) => {
    return (
        <div className={inputContainerClass}>
            <label htmlFor={name} style={labelStyle}>{label}</label>
            <AuthInput type={type} name={name}
                       onChangeHandler={onChangeHandler}
                       onBlurHandler={onBlurHandler}
                       onFocusHandler={onFocusHandler}
                       value={value}
                       required={required}
            />
            <img src={image} alt="icon" className={imgClassName} onClick={passwordVisibilityHandler}/>

        </div>
    );
};

export default PasswordInput;
