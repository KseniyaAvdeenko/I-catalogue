import React, {useEffect} from 'react';
import styles from "../AdminMain.module.sass";
import Download from "../../../assets/img/Download.png";
import {IAdminComponentsProps} from "../../../interface/IAdminPageComponets";

interface IFaviconProps{
    onChangeHandler: Function
    favicon: string | undefined;
    faviconInput: { imgDisplay: string, background: string }
    setFaviconInput: Function
}

const Favicon: React.FC<IFaviconProps> = ({
                                              onChangeHandler, setFaviconInput,
                                              faviconInput, favicon
                                          }) => {
    useEffect(() => {
        favicon
            ? setFaviconInput({
                ...faviconInput,
                imgDisplay: 'none',
                background: `url(${favicon}) center center / cover no-repeat #F2F2F2`
            })
            : setFaviconInput({...faviconInput, imgDisplay: 'block', background: '#F2F2F2'})
    }, [favicon])
    return (
        <div className={styles.form__items}>
            <div className={styles.form__items} style={{alignItems: 'center'}}>
                <p style={{marginBottom: '1rem'}}>Фавикон</p>
                <label htmlFor="favicon"
                       className={[styles.fileInput, styles.fileInput_favicon].join(' ')}
                       style={{background: faviconInput.background}}>
                    <img src={Download} alt="download" style={{display: faviconInput.imgDisplay}}/>
                    <input
                        type="file"
                        name="favicon"
                        id="favicon"
                        onChange={e => onChangeHandler(e)}
                    />
                </label>
            </div>
        </div>
    );
};

export default Favicon;
