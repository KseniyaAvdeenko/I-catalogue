import React, {useState} from 'react';
import styles from "../AdminMain.module.sass";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {IOptions} from "../Options";
import {updateCommonSettings} from "../../../store/actions/commonSettingsAction";
import BasicFontColor from "./BasicFontColor";
import BasicFontSize from "./BasicFontSize";
import BasicFontFamily from "./BasicFontFamily";
import Logo from "./Logo";
import {reader} from "../../../store/actions/apiUrl";
import Favicon from "./Favicon";

interface ICommonSettingsFormProps {

}


const CommonSettingsForm: React.FC<ICommonSettingsFormProps> = () => {
    const {commonSettings, error, isLoading} = useAppSelector(state => state.commonSettingsReducer);
    const dispatch = useAppDispatch()
    //--states
    const [fontOptionsVisibility, setFontOptionsVisibility] = useState<IOptions>({
        open: false, display: 'none', bottom: '-56.2rem'
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
                    reader.readAsDataURL(file)
                    reader.onloadend = (event: ProgressEvent<FileReader>) => {
                        setLogoInput({
                            ...logoInput,
                            imgDisplay: 'none',
                            background: `url(${event.target?.result}) center / cover no-repeat #F2F2F2`
                        })
                    }
                }
                dispatch(updateCommonSettings(commonSettings.id, {[e.target.name]: file}))
            } else {
                dispatch(updateCommonSettings(commonSettings.id, {[e.target.name]: e.target.value}))
            }
        }
        if (e.target.name === 'basicFontFamily') {
            setFontOptionsVisibility({...fontOptionsVisibility, open: false, display: 'none'})
        }
    }
    console.log(commonSettings)
    return (
        <div className={[styles.AdminMain__container, styles.AdminMain__container_margin].join(' ')}>
            <h2 className={styles.AdminMain__heading}>Общие настройки сайта</h2>
            <div className={styles.AdminMain__formContainer}>
                <div className={styles.form__items}>
                    <BasicFontColor
                        basicFontColor={commonSettings?.basicFontColor}
                        isLoading={isLoading}
                        onChangeHandler={onChangeHandler}
                    />
                    <BasicFontSize
                        isLoading={isLoading}
                        basicFontSize={commonSettings?.basicFontSize}
                        onChangeHandler={onChangeHandler}
                    />
                    <BasicFontFamily
                        isLoading={isLoading}
                        basicFontFamily={commonSettings?.basicFontFamily}
                        onChangeHandler={onChangeHandler}
                        fontOptionsVisibility={fontOptionsVisibility}
                        setFontOptionsVisibility={setFontOptionsVisibility}
                    />
                </div>
                <Logo
                    onChangeHandler={onChangeHandler}
                    logo={commonSettings?.logo}
                    logoInput={logoInput}
                    setLogoInput={setLogoInput}
                />
                <Favicon
                    onChangeHandler={onChangeHandler}
                    favicon={commonSettings?.favicon}
                    faviconInput={faviconInput}
                    setFaviconInput={setFaviconInput}
                />
            </div>
        </div>
    );
};

export default CommonSettingsForm;
