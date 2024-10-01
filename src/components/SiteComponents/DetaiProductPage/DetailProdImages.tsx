import React, {useEffect, useState} from 'react';
import {IProdImg} from "../../../interface/IProduct";
import styles from './DetailProd.module.sass'
import {useAppSelector} from "../../../hooks/redux";
import DefaultImage from '../../../assets/img/defaultImg.svg'
import {ArrowLeft, ArrowRight} from "../../UI/Icons/Arrows";

const DetailProdImages: React.FC<{ images: IProdImg[] }> = ({images}) => {
    const {buttonSettings} = useAppSelector(state => state.buttonSettingsReducer)
    const [background, setBackground] = useState<string>('')
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (buttonSettings) setBackground(buttonSettings.buttonBackground)
        const timer = setInterval(() => {
            goToNext();
        }, 7000);

        return () => clearInterval(timer);
    }, [currentIndex, 1000]);

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    return images.length ? (
            <div className={styles.imageCarousel}>
                <div className={styles.imageCarousel__inner} style={{border: `.1rem solid ${background}`}}>
                    <img src={images[currentIndex].prodImg} alt={'image ' + currentIndex}/>
                </div>
                <ArrowLeft strokeColor={background} clickHandler={goToPrevious}
                           classname={[styles.imageCarousel__arrows, styles.imageCarousel__arrows_left].join(' ')}/>
                <ArrowRight strokeColor={background} clickHandler={goToNext}
                            classname={[styles.imageCarousel__arrows, styles.imageCarousel__arrows_right].join(' ')}/>
                <div className={styles.imageCarousel__dots}>
                    {images.map((image, i)=>(
                        <div key={image.id}
                             className={styles.imageCarousel__dot}
                             onClick={()=>goToImage(i)}
                             style={{background: background}}
                        ></div>
                    ))}
                </div>
            </div>)
        : (<div className={styles.imageCarousel}>
            <div className={styles.imageCarousel__inner} style={{border: `.1rem solid ${background}`}}>
                <img src={DefaultImage} alt={'no images'}/>
            </div>
        </div>);
};

export default DetailProdImages;
