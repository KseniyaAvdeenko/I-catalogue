import React, {FC, useEffect, useState} from 'react';
import {IProdReadOnly} from "../../../interface/IProduct";
import {useAppSelector} from "../../../hooks/redux";
import {Link} from "react-router-dom";

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
    const [btnStyles, setBtnStyles] = useState({
        borderRadius: 0,
        background: '#bbb',
        border: 'none',
        fontSize: 20,
        color: '#000'
    })
    useEffect(() => {
        if (buttonSettings) setBtnStyles({
            ...btnStyles,
            borderRadius: buttonSettings.buttonBorderRadius,
            background: buttonSettings.buttonBackground,
            border: buttonSettings.buttonBorders
                ? buttonSettings.buttonBorderWidth + 'px solid ' + buttonSettings.buttonBorderColor : 'none',
            fontSize: buttonSettings.buttonTextFontSize,
            color: buttonSettings.buttonTextColor
        })
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
