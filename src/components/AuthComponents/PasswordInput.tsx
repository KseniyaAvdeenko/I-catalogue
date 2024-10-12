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
    label: string;
    imgClassName: string;
    image: string;
    passwordVisibilityHandler: React.MouseEventHandler;
}

const PasswordInput: React.FC<IPasswordInputProps> = ({
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
            <label htmlFor={name} style={{top: '1rem', color: '#333333'}}>{label} {required && (<sup style={{color: 'red'}}>*</sup>)}</label>
            <AuthInput type={type} name={name}
                       onChangeHandler={onChangeHandler}
                       onBlurHandler={onBlurHandler}
                       onFocusHandler={onFocusHandler}
                       value={value}
                       required={required}
            />
            <div style={{display: 'none'}}></div>
            <img src={image} alt="icon" className={imgClassName} onClick={passwordVisibilityHandler}/>
        </div>
    );
};

export default PasswordInput;
