import React, {FC, useEffect, useState} from 'react';
import {IProdReadOnly} from "../../../interface/IProduct";
import {useAppSelector} from "../../../hooks/redux";
import {Link} from "react-router-dom";
import {IButtonStyles} from "../../../interface/ICommonSettings";
import {useWindowWidth} from "../../../hooks/useWindowWidth";
import {getButtonStyles} from "../../../utils/getButtonStyles";

interface ISiteButtonProps {
    product: IProdReadOnly
    type: 'link' | 'button'
    btnText: string
    clickHandler?: Function
    btnClassName: string
    btnType?: 'button' | 'submit' | 'reset'
}

const SiteButton: FC<ISiteButtonProps> = ({product, btnType, btnText, type, clickHandler, btnClassName}) => {
    const {buttonSettings} = useAppSelector(state => state.buttonSettingsReducer)
    const [btnStyles, setBtnStyles] = useState<IButtonStyles>(getButtonStyles(buttonSettings))

    const windowWidth = useWindowWidth()

    useEffect(() => {
        if (windowWidth > 768) setBtnStyles({...btnStyles, fontSize: btnStyles.fontSize})
        if (windowWidth < 768) setBtnStyles({...btnStyles, fontSize: '2rem'})
        if (windowWidth < 420) setBtnStyles({...btnStyles, fontSize: '1.8rem'})
        if (windowWidth < 320) setBtnStyles({...btnStyles, fontSize: '1.6rem'})
    }, [windowWidth]);

    // console.log(btnStyles, buttonSettings)
    return type === 'link' ? (
            <Link
                style={btnStyles}
                className={btnClassName}
                to={'/product/' + product.id}>
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
