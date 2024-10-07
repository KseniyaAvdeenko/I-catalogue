import React, {useState} from 'react';
import styles from "../../AdminMain.module.sass";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {updateCommonSettings} from "../../../../store/actions/commonSettingsAction";
import BasicFontFamily from "./BasicFontFamily";
import Logo from "./Logo";
import Favicon from "./Favicon";
import {IOptions} from "../../../../interface/IAdminPageComponets";
import {decodeToken} from "../../../../hooks/encodeDecodeTokens";
import AdminInputContainer from "../../../UI/InputContainers/AdminInputContainer";
import Loader from "../../../UI/Loader/Loader";

interface ICommonSettingsFormProps {

}


const CommonSettingsForm: React.FC<ICommonSettingsFormProps> = () => {
    const {commonSettings, error, isLoading} = useAppSelector(state => state.commonSettingsReducer);
    const dispatch = useAppDispatch()
    //--states
    const [fontOptionsVisibility, setFontOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-20.2rem'
    })
    const [logoInput, setLogoInput] = useState<{ imgDisplay: string, background: string }>(
        {imgDisplay: 'block', background: '#F2F2F2'})
    const [faviconInput, setFaviconInput] = useState<{ imgDisplay: string, background: string }>(
        {imgDisplay: 'block', background: '#F2F2F2'})
    //methods
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (commonSettings) {
            if (e.target.type === 'file') {
                const file = e.target.files?.[0];
                if (file) {
                    e.target.name === 'logo'
                        ? setLogoInput({
                            ...logoInput,
                            imgDisplay: 'none',
                            background: `url(${URL.createObjectURL(file)}) center / cover no-repeat #F2F2F2`
                        })
                        : setFaviconInput({
                            ...faviconInput, imgDisplay: 'none',
                            background: `url(${URL.createObjectURL(file)}) center / cover no-repeat #F2F2F2`
                        })
                    dispatch(updateCommonSettings(decodeToken(localStorage.access), commonSettings.id, {[e.target.name]: file}))
                }
            } else {
                e.target.type === 'number'
                    ? dispatch(updateCommonSettings(decodeToken(localStorage.access), commonSettings.id, {[e.target.name]: parseInt(e.target.value)}))
                    : dispatch(updateCommonSettings(decodeToken(localStorage.access), commonSettings.id, {[e.target.name]: e.target.value}))

            }
        }
        if (e.target.name === 'basicFontFamily') {
            setFontOptionsVisibility({...fontOptionsVisibility, open: false, display: 'none'})
        }
    }
    return (
        <section id={'commonSettingsSection'}
                 className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h2 className={styles.AdminMain__heading}>Общие настройки сайта</h2>
            {commonSettings
                ? <div className={styles.AdminMain__formContainer}>
                    <div className={styles.form__items}>
                        <AdminInputContainer
                            type={'color'} name={'basicFontColor'} inputId={'basicFontColor'}
                            value={commonSettings.basicFontColor} checked={false} required={false}
                            readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Основной цвет шрифта'}
                            onChangeHandler={onChangeHandler}/>
                        <AdminInputContainer
                            type={'number'} name={'basicFontSize'} inputId={'basicFontSize'}
                            value={commonSettings.basicFontSize} checked={false}
                            required={false} readonly={false} inputClassname={''}
                            inputContainerClassname={styles.form__inputContainer}
                            labelClassName={''} label={'Основной размер шрифта'}
                            onChangeHandler={onChangeHandler}/>
                        <BasicFontFamily
                            basicFontFamily={commonSettings.basicFontFamily}
                            onChangeHandler={onChangeHandler}
                            fontOptionsVisibility={fontOptionsVisibility}
                            setFontOptionsVisibility={setFontOptionsVisibility}
                        />
                    </div>
                    <div className={styles.form__items}>
                        <Logo
                            onChangeHandler={onChangeHandler}
                            logo={commonSettings.logo}
                            logoInput={logoInput}
                            setLogoInput={setLogoInput}
                        />
                    </div>
                    <div className={styles.form__items}>
                        <Favicon
                            onChangeHandler={onChangeHandler}
                            favicon={commonSettings.favicon}
                            faviconInput={faviconInput}
                            setFaviconInput={setFaviconInput}
                        />
                    </div>
                </div>
                : <div className={styles.AdminMain__formContainerUnLoaded}>{isLoading && <Loader/>}</div>
            }
        </section>
    );
};

export default CommonSettingsForm;
