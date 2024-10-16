import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../../hooks/redux";
import {IButtonStyles} from "../../../../interface/ICommonSettings";
import {defaultBtnStyles, getButtonSettings} from "../../../../utils/getButtonSettings";
import styles from '../Preview.module.sass';

const PreviewButtonElement:React.FC<{btnText: string}> = ({btnText}) => {
    const {buttonSettings} = useAppSelector(state => state.buttonSettingsReducer)
    const [btnStyles, setBtnStyles] = useState<IButtonStyles>(defaultBtnStyles)

    useEffect(() => {
        if (buttonSettings) setBtnStyles(getButtonSettings(buttonSettings))
    }, [buttonSettings]);
    return (
        <button className={styles.showingItems__button} style={btnStyles}>{btnText}</button>
    );
};

export default PreviewButtonElement;
