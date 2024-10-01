import {IButtonSettings, IButtonStyles} from "../interface/ICommonSettings";

export const defaultBtnStyles: IButtonStyles = {
    borderRadius: 0,
    background: '#bbb',
    border: 'none',
    borderColor: '',
    borderWidth: 0,
    borderStyle: '',
    fontSize: 20,
    color: '#000'
}

export const getButtonSettings = (btnSettings: IButtonSettings) => {
    return {
        borderRadius: btnSettings ? btnSettings.buttonBorderRadius : 0,
        background: btnSettings ? btnSettings.buttonBackground : '#bbb',
        border: btnSettings && btnSettings.buttonBorders
            ? btnSettings.buttonBorderWidth + 'px solid ' + btnSettings.buttonBorderColor : 'none',
        fontSize: btnSettings ? btnSettings.buttonTextFontSize : 20,
        color: btnSettings ? btnSettings.buttonTextColor : '#000',
        borderColor: btnSettings ? btnSettings.buttonBorderColor : '',
        borderWidth: btnSettings && btnSettings.buttonBorders ? btnSettings.buttonBorderWidth : 0,
        borderStyle: btnSettings && btnSettings.buttonBorders ? 'solid' : '',
    }
}