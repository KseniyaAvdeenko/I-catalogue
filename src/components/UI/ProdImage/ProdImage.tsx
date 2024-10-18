import React from 'react';
import {IProdImg} from "../../../interface/IProduct";
import DefaultImg from "../../../assets/img/defaultImg.svg";

const ProdImage: React.FC<{images: IProdImg[] | [], imageWrapperClassname: string}> = ({imageWrapperClassname, images}) => {
    if (images.length) {
        if (images.filter(el => el.mainImg).length) {
            return (<div className={imageWrapperClassname}><img itemProp="image" src={images.filter(el => el.mainImg)[0].prodImg} alt={'product image'}/></div>)
        } else {
            return (<div className={imageWrapperClassname}><img itemProp="image" src={images[0].prodImg} alt={'product image'}/></div>)
        }
    } else {
        return (<div className={imageWrapperClassname}><img itemProp="image" src={DefaultImg} alt={'default image'}/></div>)
    }
};

export default ProdImage;
