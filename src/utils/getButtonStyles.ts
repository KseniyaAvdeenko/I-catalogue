import {IButtonSettings} from "../interface/ICommonSettings";

export const getButtonStyles = (buttonSettings: IButtonSettings | null) => {
    if (buttonSettings) {
        return {
            borderRadius: buttonSettings.buttonBorderRadius,
            background: buttonSettings.buttonBackground,
            color: buttonSettings.buttonTextColor,
            fontSize: buttonSettings.buttonTextFontSize+'px',
            border: buttonSettings.buttonBorders
                ? buttonSettings.buttonBorderWidth + 'px solid ' + buttonSettings.buttonBorderColor
                : 'none'
        }
    } else {
        return {
            borderRadius: 20,
            background: '#bbb',
            color: '#000',
            fontSize: '2.2rem',
            border: 'none'
        }
    }
}