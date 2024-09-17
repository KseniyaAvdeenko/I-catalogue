import {IHeading} from "./IPagesSettings";

export type ModalInputTypes = 'text'
    | 'number'
    | 'tel'
    | 'email'
    | 'datetime-local'


export interface IModalLabelBase {
    inputLabel: string;
    inputType: ModalInputTypes;
    inputIdName: string;
}

export interface IModalLabels extends IModalLabelBase {
    id: number;
}

export interface IModalForm {
    id: number;
    headingSettings: IHeading;
    background: string;
    labels: IModalLabels[] | []
}

