import React from 'react';
import {ISocialLink} from "../../../../interface/INavbar";

interface INewSocialLinksFormProps {
    fields: ISocialLink[];
    deleteField: Function;
    onChangeHandler: Function;
    saveNewSocialLink: Function;
}

const NewSocialLinksForm: React.FC<INewSocialLinksFormProps> = ({
                                                                    fields,
                                                                    saveNewSocialLink,
                                                                    onChangeHandler,
                                                                    deleteField
                                                                }) => {
    return (
        <div>

        </div>
    );
};

export default NewSocialLinksForm;
