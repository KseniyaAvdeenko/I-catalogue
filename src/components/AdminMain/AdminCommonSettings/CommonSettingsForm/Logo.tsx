import React, {useEffect} from 'react';
import styles from "../../AdminMain.module.sass";
import Download from '../../../../assets/img/Download.svg';

interface ILogoProps {
    onChangeHandler: Function;
    logo: string | undefined;
    logoInput: { imgDisplay: string, background: string }
    setLogoInput: Function
}

const Logo: React.FC<ILogoProps> = ({
                                        onChangeHandler, logo,
                                        logoInput, setLogoInput
                                    }) => {

    //--methods
    useEffect(() => {
        logo
            ? setLogoInput({
                ...logoInput,
                imgDisplay: 'none',
                background: `url(${logo}) center center / cover no-repeat #F2F2F2`
            })
            : setLogoInput({...logoInput, imgDisplay: 'block', background: '#F2F2F2'})
    }, [logo])

    return (
        <div className={styles.form__items}>
            <div className={styles.form__items} style={{alignItems: 'center'}}>
                <p style={{marginBottom: '1rem'}}>Логотип</p>
                <label htmlFor="logo"
                       className={[styles.fileInput, styles.fileInput_logo].join(' ')}
                       style={{background: logoInput.background}}>
                    <img src={Download} alt="download" style={{display: logoInput.imgDisplay}}/>
                    <input
                        type="file"
                        name="logo"
                        id="logo"
                        onChange={e => onChangeHandler(e)}
                    />
                </label>
            </div>
        </div>
    );
};

export default Logo;
