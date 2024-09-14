import React, {useState} from 'react';
import {formData} from "../../../../store/actions/apiUrl";
import styles from "../../AdminMain.module.sass";
import Download from "../../../../assets/img/Download.svg";
import {IFile, IImagePreview} from "../../../../interface/IAdminPageComponets";

interface IUploadImagesProps {
    files: IFile[];
    onImageChangeHandler: Function;
    makeImgMainHandler: Function
}

const UploadImages: React.FC<IUploadImagesProps> = ({files, onImageChangeHandler, makeImgMainHandler}) => {
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
                    </label>
                ))}
            </div>
        </div>
    );
};

export default UploadImages;
