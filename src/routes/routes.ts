import Main from "../pages/Main";
import Auth from "../pages/Authentication/Auth";

interface IRouter{
    id: string;
    path: string;
    element: () => JSX.Element;
}


export const publicRoutes: IRouter[] = [
    {id: 'main', path: '/', element: Main},
    {id: 'auth', path: 'auth/*', element: Auth},

]
