import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import AdminInput from "../Inputs/AdminInput";

interface IAdminInputContainerProps extends IAdminComponentsProps {
    type: string;
    name: string;
    inputId: string;
    value: string | number;
    checked: boolean
    required: boolean
    readonly: boolean;
    inputClassname: string;
    inputContainerClassname: string;
    labelClassName: string;
    label: string;
    step?: number;
    min?: number;
    max?: number;
    pattern?: string
}

const AdminInputContainer: React.FC<IAdminInputContainerProps> = ({
                                                                      isLoading,
                                                                      onChangeHandler,
                                                                      type,
                                                                      inputClassname,
                                                                      inputContainerClassname,
                                                                      labelClassName,
                                                                      name,
                                                                      inputId,
                                                                      required,
                                                                      readonly,
                                                                      value,
                                                                      checked,
                                                                      label,
                                                                      step,
                                                                      min,
                                                                      max,
                                                                      pattern
                                                                  }) => {
    return (
        <div className={inputContainerClassname}>
            <label className={labelClassName} htmlFor={inputId}>{label}</label>
            {isLoading && 'Loading...'}
            <AdminInput
                type={type}
                name={name}
                id={inputId}
                value={value}
                checked={checked}
                onChangeHandler={onChangeHandler}
                required={required}
                readonly={readonly}
                classname={inputClassname}
                min={min} max={max} step={step}
                pattern={pattern}
            />
        </div>
    );
};

export default AdminInputContainer;
