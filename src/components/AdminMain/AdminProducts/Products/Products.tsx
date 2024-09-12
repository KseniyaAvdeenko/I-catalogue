import React, {useState} from 'react';
import styles from "../../AdminNavbar.module.sass";
import {useAppSelector} from "../../../../hooks/redux";
import {formData} from "../../../../store/actions/apiUrl";


const Products = () => {
    const {prodAttrs} = useAppSelector(state => state.prodAttrsReducer)
    const {products} = useAppSelector(state => state.productReducer)

    const [files, setFiles] = useState<File[]>([])
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const onImageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.files)

        if (e.target.files) {
            let filesArray = Array.from(e.target.files)
            setFiles(Array.from(e.target.files))
            const previews = filesArray.map((file) => URL.createObjectURL(file));
            setImagePreviews(previews)
            files.map(file=>{formData.append(file.name, file)})
        }
    }


    // @ts-ignore
    for (let [name, value] of formData.entries()) {
        // Типы: name - string, value - FormDataEntryValue (может быть строкой или File)
        console.log(`${name} = ${value}`);
    }
    return (
        <section id={'addingProdsSection'}
                 className={[styles.AdminNavbar__container, styles.AdminNavbar__container_margin].join(' ')}>
            <h3 className={styles.AdminNavbar__subheading}>Добавление товара\услуги</h3>
            <div className={styles.AdminNavbar__formContainer}>
                <input type="file" onChange={e => onImageChangeHandler(e)} multiple={true}/>

                <div style={{display: 'flex'}}>
                    {imagePreviews && imagePreviews.map(image => (
                        <img src={image} key={image} width={100} height={100} alt=""/>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Products;
