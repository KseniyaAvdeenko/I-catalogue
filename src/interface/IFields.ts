export interface IInputProps {
    type: string;
    value?: string;
    checked?: boolean;
    name: string;
    id: string;
    label?: string
}

export interface IContactField {
    content: {label: string; input: IInputProps;  };
    isLink: {label: string; input: IInputProps };
    linkHref: {label: string; input: IInputProps };
    linkType: {label: string; inputs:IInputProps[] };
}

