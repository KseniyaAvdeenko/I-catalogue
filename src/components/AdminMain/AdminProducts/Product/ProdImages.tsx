import React, {useState} from 'react';
import styles from "../../AdminMain.module.sass";
import {IImage, IProdReadOnly} from "../../../../interface/IProduct";
import {createImage, deleteImage, updateImage} from "../../../../store/actions/prodImagesAction";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import {useAppDispatch} from "../../../../hooks/redux";
import {IFile} from "../../../../interface/IAdminPageComponets";
import Download from "../../../../assets/img/Download.svg";
import DeleteIcon from "../../../../assets/img/deleteIcon.svg";

interface IProdImagesProps {
    selectedProd: IProdReadOnly;

}

const ProdImages: React.FC<IProdImagesProps> = ({selectedProd}) => {
    const dispatch = useAppDispatch()

    const onImageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const fileArray = Array.from(e.target.files)
            fileArray.map(file => dispatch(createImage(decodeToken(localStorage.access), {prod: selectedProd.id, mainImg: false, prodImg: file})))
        }
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(updateImage(
            decodeToken(localStorage.access),
            parseInt(e.target.id),
            {[e.target.name]: e.target.checked})
        )

        selectedProd && selectedProd.images.filter(el => el.id !== parseInt(e.target.id)).map(image => {
            dispatch(updateImage(
                decodeToken(localStorage.access),
                image.id,
                {mainImg: false})
            )
        })
    }
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

    function deleteProdImageFile(id: number) {
        dispatch(deleteImage(decodeToken(localStorage.access), id))
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
                {selectedProd && selectedProd.images.map(image => (
                    <label key={image.id} htmlFor={`${image.id}`}
                           onMouseOver={e=>onFocusIn(e)} onMouseOut={e=>onFocusOut(e)}
                           className={image.mainImg
                               ? [styles.upload__item, styles.upload__item_selected].join(' ')
                               : styles.upload__item
                           }>
                        <input type="radio"
                               name="mainImg"
                               id={`${image.id}`}
                               checked={image.mainImg}
                               onChange={e => onChangeHandler(e)}
                        />
                        <img src={image.prodImg} alt=""/>
                        <p>Главная картинка</p>
                        <div className={styles.upload__item_deleteIcon} onClick={()=>deleteProdImageFile(image.id)}>
                            <img src={DeleteIcon} width={16} height={21} alt=""/>
                        </div>
                    </label>
                ))}
            </div>

        </div>
    );
};

export default ProdImages;
