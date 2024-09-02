import React from 'react';
interface ILabel{
    htmlFor: string;
    label:string;
    classname: string
}
const Label: React.FC<ILabel> = ({htmlFor, classname, label}) => {
    return (
        <label htmlFor={htmlFor} className={classname}>{label}</label>
    );
};

export default Label;
