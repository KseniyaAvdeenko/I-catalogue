import React from 'react';
import {IFooterSettingsBase} from "../../../interface/ICommonSettings";
interface IFooterLayout2Props{
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>;
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>;
    footerStyles: IFooterSettingsBase;
    logo: string|undefined
}
const FooterLayout2: React.FC<IFooterLayout2Props> = ({logo,footerStyles, onHoverOut, onHoverIn}) => {
    return (
        <div>

        </div>
    );
};

export default FooterLayout2;
