import React, {FC, useEffect, useState} from 'react';
import {IProdReadOnly} from "../../../interface/IProduct";
import {useAppSelector} from "../../../hooks/redux";
import {Link} from "react-router-dom";
import {IButtonStyles} from "../../../interface/ICommonSettings";
import {defaultBtnStyles, getButtonSettings} from "../../../utils/getButtonSettings";

interface ISiteButtonProps {
    product: IProdReadOnly
    type: 'link' | 'button'
    btnText: string
    clickHandler?: Function
    btnClassName: string
    btnType?: 'button'| 'submit'|'reset'
}

const SiteButton: FC<ISiteButtonProps> = ({product,btnType, btnText, type, clickHandler, btnClassName}) => {
    const {buttonSettings} = useAppSelector(state => state.buttonSettingsReducer)
    const [btnStyles, setBtnStyles] = useState<IButtonStyles>(defaultBtnStyles)

    useEffect(() => {
        if (buttonSettings) setBtnStyles(getButtonSettings(buttonSettings))
    }, [buttonSettings]);

    return type === 'link' ? (
            <Link
                style={btnStyles}
                className={btnClassName}
                to={'product/' + product.id}>
                {btnText}
            </Link>)
        : type === 'button' && clickHandler
            ? (<button
                type={btnType ?? 'button'}
                style={btnStyles}
                className={btnClassName}
                onClick={() => clickHandler(product)}>
                {btnText}</button>)
            : (<button type={btnType} style={btnStyles} className={btnClassName}>{btnText}</button>);
};

export default SiteButton;
