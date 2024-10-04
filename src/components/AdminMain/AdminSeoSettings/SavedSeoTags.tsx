import React from 'react';
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";
import {ISeoSettings} from "../../../interface/ISeoSettings";
import styles from "../AdminNavbar.module.sass";
import DeleteIcon from "../../../assets/img/deleteIcon.svg";
import SeoTagType from "./SeoTagType";
import SeoTagName from "./SeoTagName";
import SeoTagContent from "./SeoTagContent";
import SeoTagCode from "./SeoTagCode";

interface ISavedSeoTagsProps extends IAdminComponentsProps {
    seoTags: ISeoSettings[]
    deleteSeoTag: Function
}

const SavedSeoTags: React.FC<ISavedSeoTagsProps> = ({isLoading, onChangeHandler, seoTags, deleteSeoTag}) => {
    return (
        <div className={styles.savedItems} style={{borderBottom: seoTags.length ? '.1rem solid #926B6A' : 'none'}}>
            {isLoading && 'Loading...'}
            {seoTags.map(tag => (
                <div key={tag.id} className={styles.savedItems__items}>
                    <SeoTagType
                        label={'Тип тега'}
                        onChangeHandler={onChangeHandler}
                        seoTagType={tag.tag}
                        seoTagId={tag.id}/>
                    <div className={styles.savedItems__item} style={{flexBasis: '35%',  display: tag.tag === 'pixel' ? 'none' : 'flex'}}>
                        <SeoTagName
                            onChangeHandler={onChangeHandler}
                            label={'Атрибут name мета-тега'}
                            id={'tagName*' + tag.id}
                            type={'text'} name={'tagName'}
                            required={false} value={tag.tagName}
                            listId={'name*' + tag.id}
                        />
                        <SeoTagContent
                            onChangeHandler={onChangeHandler}
                            label={'Атрибут content мета-тега'}
                            id={'content*' + tag.id} name={'content'}
                            value={tag.content}/>
                    </div>
                    {tag.tag === 'meta_tag' && (<div style={{flexBasis: 'fit-content'}}>или</div>)}
                    <SeoTagCode
                        onChangeHandler={onChangeHandler}
                        label={'Код тега'} id={'code*' + tag.id}
                        name={'code'} value={tag.code}/>
                    <img src={DeleteIcon} alt="delete icon" onClick={() => deleteSeoTag(tag.id)}/>
                </div>
            ))}
        </div>
    );
};

export default SavedSeoTags;
