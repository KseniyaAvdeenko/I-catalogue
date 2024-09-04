import React from 'react';
import {INavLinks} from "../../../../interface/INavbar";
import styles from "../AdminNavbar.module.sass";
import NavLinkInput from "./NavLinkInput";
import CorrespondingPageNameInput from "./CorrespondingPageNameInput";
import DeleteIcon from "../../../../assets/img/deleteIcon.png";
import SaveIcon from "../../../../assets/img/saveIcon.png";

interface INewNavLinkFormProps {
    fields: INavLinks[];
    onChangeHandler: Function;
    deleteField: Function;
    saveNewLink: Function;
}

const NewNavLinkForm: React.FC<INewNavLinkFormProps> = ({fields, onChangeHandler, saveNewLink, deleteField}) => {
    return (
        <div className={styles.formItems}>
            {fields.map(field => (
                <div key={field.id} className={styles.savedItems__items}>
                    <NavLinkInput label={'Навигационная ссылка'}
                                  id={'navLink*' + field.id}
                                  type={'text'}
                                  name={'navLink'}
                                  onChangeHandler={onChangeHandler}
                                  required={true}
                                  value={field.navLink}
                    />
                    <CorrespondingPageNameInput
                        label={'Соответствующая страница'}
                        id={'correspondingPageName*' + field.id}
                        type={'text'}
                        name={'correspondingPageName'}
                        onChangeHandler={onChangeHandler}
                        required={false}
                        value={field.correspondingPageName}
                    />
                    <div className={styles.savedItems__items} style={{flexBasis: '10%'}}>
                        <img src={SaveIcon} alt="save icon"  onClick={() => saveNewLink(field.id)}/>
                        <img src={DeleteIcon} alt="delete icon" onClick={() => deleteField(field.id)}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewNavLinkForm;
