export const apiUrl = 'http://127.0.0.1:8000/'

export const formData: FormData = new FormData()
export const reader = new FileReader();

export function getRequestHeaders() {
    return {
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json',
        }
    }
}


export function getAuthConfigApplicationJson(access: string): any {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${access}`,
            'Accept': 'application/json'
        }
    };
}

export function getAuthConfigMultipart(access: string): any {
    return {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `JWT ${access}`,
        }
    };
}

export function createFormData(data: any): FormData {
    Object.keys(data).map((key) => {
        formData.set(key, data[key])
    })
    return formData
}
export function clearFormData(data: any): void {
    Object.keys(data).map((key) => {
        formData.delete(key)
    })
}