import React from 'react';
import {IFooterSettingsBase} from "../../../interface/ICommonSettings";
interface IFooterLayout3Props{
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>;
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>;
    footerStyles: IFooterSettingsBase;
    logo: string|undefined
}
const FooterLayout3: React.FC<IFooterLayout3Props> = ({logo,footerStyles, onHoverOut, onHoverIn}) => {
    return (
        <div>

        </div>
    );
};

export default FooterLayout3;
