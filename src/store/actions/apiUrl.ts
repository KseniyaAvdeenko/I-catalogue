export const apiUrl = 'http://127.0.0.1:8000/'

export const formData = new FormData()
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