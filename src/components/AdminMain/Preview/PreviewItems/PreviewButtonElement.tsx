import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../../hooks/redux";
import {IButtonStyles} from "../../../../interface/ICommonSettings";
import styles from '../Preview.module.sass';
import {getButtonStyles} from "../../../../utils/getButtonStyles";

const PreviewButtonElement: React.FC<{ btnText: string }> = ({btnText}) => {
    const {buttonSettings} = useAppSelector(state => state.buttonSettingsReducer)

    const btnStyles: IButtonStyles = getButtonStyles(buttonSettings)

    return (
        <button className={styles.showingItems__button} style={btnStyles}>{btnText}</button>
    );
};

export default PreviewButtonElement;
