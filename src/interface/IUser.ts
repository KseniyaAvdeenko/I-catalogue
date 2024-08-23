export interface IUserBase{
    username: string;
    password: string;
}

export interface INewUser extends IUserBase{
    email: string;
    re_password: string;
}
export interface INewUserResponse extends INewUser{
    id: number
}
export interface IUser {
    id: number;
    username: string;
    email: string;
    is_staff: boolean;
    is_superuser: boolean;
    date_joined: string;
    last_login: string;
}