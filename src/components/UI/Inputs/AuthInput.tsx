import React from 'react';

interface IAuthInputProps {
    type: string;
    name: string;
    onFocusHandler: React.FocusEventHandler;
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
    onBlurHandler: React.FocusEventHandler;
    value: string;
    required: boolean;
}

const AuthInput: React.FC<IAuthInputProps> = ({
                                                  type,
                                                  onBlurHandler,
                                                  onFocusHandler,
                                                  onChangeHandler,
                                                  name,
                                                  value,
                                                  required
                                              }) => {
    return (
        <input type={type} name={name} id={name}
               onFocus={e=> onFocusHandler(e)}
               onBlur={e => onBlurHandler(e)}
               onChange={e => onChangeHandler(e)}
               value={value}
               required={required}
               autoComplete={'off'}
        />
    );
};

export default AuthInput;
