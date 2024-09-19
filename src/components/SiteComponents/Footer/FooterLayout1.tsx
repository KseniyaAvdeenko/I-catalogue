import React from 'react';
import styles from '../Layout.module.sass';
import {IFooterSettingsBase} from "../../../interface/ICommonSettings";

interface IFooterLayout1Props {
    onHoverIn: React.MouseEventHandler<HTMLAnchorElement>;
    onHoverOut: React.MouseEventHandler<HTMLAnchorElement>;
    footerStyles: IFooterSettingsBase;
    logo: string|undefined
}

const FooterLayout1: React.FC<IFooterLayout1Props> = ({logo,footerStyles, onHoverOut, onHoverIn}) => {
    return (
        <div>

        </div>
    );
};

export default FooterLayout1;
