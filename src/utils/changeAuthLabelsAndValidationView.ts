import React from "react";

export const changeAuthLabelsAndValidationViewOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const label = e.currentTarget.previousSibling as HTMLElement;
    const validation = e.currentTarget.nextSibling as HTMLElement;
    if (validation && validation.style && label && label.style) {
        if (!e.currentTarget.value.trim()) {
            label.style.top = '1rem';
            label.style.color = '#333333';
            validation.style.display = 'block';
            validation.textContent = 'Обязательное поле не должно быть пустым. Пожалуйста, заполните'
        } else {
            label.style.top = '-2rem';
            label.style.color = '#926B6A';
            validation.style.display = 'none'
        }
    }
}

export const changeAuthLabelsOnFocus = (e: React.FocusEvent) => {
    const label = e.currentTarget.previousSibling as HTMLElement;
    if (label && label.style) {
        label.style.top = '-2rem';
        label.style.color = '#926B6A';
    }
}

export const isPasswordsMatching = (e: React.ChangeEvent<HTMLInputElement>, match: boolean) => {
    const validation = e.currentTarget.nextSibling as HTMLElement;
    if (validation && validation.style ) {
        if(match){
            validation.style.display = 'block';
            validation.style.color = 'green'
            validation.textContent = 'Пароли совпадают'
        }else{
          validation.style.display = 'block';
          validation.style.color = '#ff0209'
          validation.textContent = 'Пароли не совпадают'
        }
    }
}