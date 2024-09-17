import React from 'react';
import styles from "../../AdminNavbar.module.sass";
import NavLinkInput from "./NavLinkInput";
import SlugInput from "./SlugInput";
import DeleteIcon from "../../../../assets/img/deleteIcon.svg";
import SaveIcon from "../../../../assets/img/saveIcon.svg";
import {INavLink} from "../../../../interface/IAdminPageComponets";

interface INewNavLinkFormProps {
    fields: INavLink[];
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
                    <SlugInput
                        label={'Ссылка на соответствующую страницу'}
                        id={'slug*' + field.id}
                        type={'text'}
                        name={'slug'}
                        onChangeHandler={onChangeHandler}
                        required={false}
                        value={field.slug}
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
