import React from 'react';
import {ISeoSettings} from "../../../interface/ISeoSettings";
import styles from "../AdminNavbar.module.sass";
import SaveIcon from "../../../assets/img/saveIcon.svg";
import DeleteIcon from "../../../assets/img/deleteIcon.svg";
import SeoTagType from "./SeoTagType";
import SeoTagName from "./SeoTagName";
import SeoTagContent from "./SeoTagContent";
import SeoTagCode from "./SeoTagCode";

interface INewSeoTagFormProps {
    fields: ISeoSettings[];
    deleteField: Function;
    onChangeHandler: Function;
    saveNewSeoTag: Function;
}

const NewSeoTagForm: React.FC<INewSeoTagFormProps> = ({fields, saveNewSeoTag, onChangeHandler, deleteField}) => {
    return (
        <div className={styles.formItems}>
            {fields && fields.map(field => (
                <div key={field.id} className={styles.formItems__items}>
                    <SeoTagType
                        label={'Тип тега'}
                        onChangeHandler={onChangeHandler}
                        seoTagType={field.tag}
                        seoTagId={field.id}/>
                    <div className={styles.savedItems__item}
                         style={{flexBasis: '35%', display: field.tag === 'pixel' ? 'none' : 'flex'}}>
                        <SeoTagName
                            onChangeHandler={onChangeHandler}
                            label={'Атрибут name мета-тега'}
                            id={'tagName*' + field.id}
                            type={'text'}
                            name={'tagName'}
                            required={false}
                            value={field.tagName}
                            listId={'name*' + field.id}
                        />
                        <SeoTagContent
                            onChangeHandler={onChangeHandler}
                            label={'Атрибут content мета-тега'}
                            id={'content*' + field.id} name={'content'}
                            value={field.content}/>
                    </div>
                    {field.tag === 'meta_tag' && (<div style={{flexBasis: 'fit-content'}}>или</div>)}
                    <SeoTagCode
                        onChangeHandler={onChangeHandler}
                        label={'Код тега'} id={'code*' + field.id}
                        name={'code'} value={field.code}/>
                    <div className={styles.savedItems__items} style={{flexBasis: '7%'}}>
                        <img src={SaveIcon} alt="save icon"  onClick={() => saveNewSeoTag(field.id)}/>
                        <img src={DeleteIcon} alt="delete icon" onClick={() => deleteField(field.id)}/>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default NewSeoTagForm;
