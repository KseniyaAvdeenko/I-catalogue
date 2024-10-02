import React from 'react';
import {IAdminComponentsProps} from "../../../../interface/IAdminPageComponets";
import {ISocialLink} from "../../../../interface/INavbar";

interface ISavedSocialLinksProps extends IAdminComponentsProps {
    socialLinks: ISocialLink[];
    deleteSavedSocialLink: Function;
}

const SavedSocialLinks: React.FC<ISavedSocialLinksProps> = ({socialLinks, deleteSavedSocialLink, isLoading, onChangeHandler}) => {
    return (
        <div>

        </div>
    );
};

export default SavedSocialLinks;
