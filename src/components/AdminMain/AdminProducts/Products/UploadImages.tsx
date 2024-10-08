import React from 'react';
import styles from "../../AdminMain.module.sass";
import Download from "../../../../assets/img/Download.svg";
import {IFile} from "../../../../interface/IAdminPageComponets";
import DeleteIcon from '../../../../assets/img/deleteIcon.svg'

interface IUploadImagesProps {
    files: IFile[];
    onImageChangeHandler: Function;
    makeImgMainHandler: Function;
    deleteProdImageFile: Function
}

const UploadImages: React.FC<IUploadImagesProps> = ({deleteProdImageFile, files, onImageChangeHandler, makeImgMainHandler}) => {


    function onFocusIn(e: React.MouseEvent<HTMLLabelElement>) {

        if(e.currentTarget.lastElementChild){
            e.currentTarget.lastElementChild.classList.add(styles.upload__item_deleteIconVisible)
        }
    }

    function onFocusOut(e: React.MouseEvent<HTMLLabelElement>) {
        if(e.currentTarget.lastElementChild){
            e.currentTarget.lastElementChild.classList.remove(styles.upload__item_deleteIconVisible)
        }
    }



    return (
        <div className={styles.form__items} style={{alignItems: 'center'}}>
            <p style={{marginBottom: '1rem'}}>Картинки товара</p>
            <label htmlFor="prodImg"
                   className={[styles.fileInput, styles.fileInput_prodImages].join(' ')}>
                <img src={Download} alt="download"/>
                <input
                    type="file"
                    name="prodImg"
                    id="prodImg"
                    multiple={true}
                    onChange={e => onImageChangeHandler(e)}
                />
            </label>
            <div className={styles.upload}>
                {files && files.map(image => (
                    <label key={image.prodImg.name} htmlFor={image.prodImg.name}
                           onMouseOver={e=>onFocusIn(e)} onMouseOut={e=>onFocusOut(e)}
                           className={image.mainImg ?[styles.upload__item, styles.upload__item_selected].join(' ') :styles.upload__item }
                    >
                        <input type="radio"
                               name="mainImg"
                               id={image.prodImg.name}
                               checked={image.mainImg}
                               onChange={e => makeImgMainHandler(e)}
                        />
                        <img src={URL.createObjectURL(image.prodImg)} alt=""/>
                        <p>Главная картинка</p>
                        <div className={styles.upload__item_deleteIcon} onClick={()=>deleteProdImageFile(image.prodImg.name)}>
                            <img src={DeleteIcon} width={16} height={21} alt=""/>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default UploadImages;
