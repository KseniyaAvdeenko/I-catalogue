import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import AdminInput from "../../../UI/Inputs/AdminInput";
import Tip from '../../../../assets/img/tip.svg'


interface IDetailedPageHeadingContent extends IAdminComponentsProps {
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
}

const DetailedPageHeadingContent: React.FC<IDetailedPageHeadingContent> = ({
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
                                                                               label
                                                                           }) => {
    const onHoverIn = (e: React.MouseEvent<HTMLImageElement>) => {
        const tipText = e.currentTarget.dataset.tip as string;
        const tip = e.currentTarget.nextSibling as HTMLDivElement;
        if (tip && tip.style) {
            tip.style.display = 'block';
            tip.textContent = tipText;
        }
    }

    const onHoverOut = (e: React.MouseEvent<HTMLImageElement>) => {
        const tip = e.currentTarget.nextSibling as HTMLDivElement;
        if (tip && tip.style) tip.style.display = 'none';
    }

    const tooltip: string = `Если требуется, чтобы в заголовке страницы товара/услуги отображалось название, добавьте символ "*" вместо названия в нужном месте заголовка`

    return (
        <div className={inputContainerClassname}>
            <label className={labelClassName} htmlFor={inputId}>
                <span>{label}</span>
                {required ? (<span><sup style={{color: 'red'}}>*</sup></span>) : ''}
                <img src={Tip} alt="tip" data-tip={tooltip}
                     onMouseEnter={e => onHoverIn(e)}
                     onMouseLeave={e => onHoverOut(e)}
                />
                <div></div>
            </label>
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
            />
        </div>
    );
};

export default DetailedPageHeadingContent;
