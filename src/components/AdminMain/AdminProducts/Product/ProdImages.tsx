import React, {useState} from 'react';
import styles from "../../AdminMain.module.sass";
import {IImage, IProdReadOnly} from "../../../../interface/IProduct";
import {updateImage} from "../../../../store/actions/prodImagesAction";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import {useAppDispatch} from "../../../../hooks/redux";

interface IProdImagesProps {
    selectedProd: IProdReadOnly;

}

const ProdImages: React.FC<IProdImagesProps> = ({selectedProd}) => {
    const [prodImages, setProdImages] = useState<IImage[] | []>([])
    const dispatch = useAppDispatch()


    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(parseInt(e.target.id))

        // dispatch(updateImage(
        //     decodeToken(localStorage.access),
        //     parseInt(e.target.id),
        //     {[e.target.name]: e.target.checked})
        // )
        //
        // selectedProd && selectedProd.images.filter(el => el.id !== parseInt(e.target.id)).map(image => {
        //     dispatch(updateImage(
        //         decodeToken(localStorage.access),
        //         image.id,
        //         {mainImg: false})
        //     )
        // })

    }

    return (
        <div className={styles.form__items} style={{alignItems: 'center'}}>
            <p style={{marginBottom: '1rem'}}>Картинки товара</p>
            <div className={styles.upload}>
                {selectedProd && selectedProd.images.map(image => (
                    <label key={image.id} htmlFor={`${image.id}`}
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
                    </label>
                ))}
            </div>

        </div>
    );
};

export default ProdImages;
