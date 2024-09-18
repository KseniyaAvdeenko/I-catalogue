import React, {useEffect} from 'react';
import styles from './AdminHeader.module.sass'
import AppLogo from '../../../assets/img/I-Catalogue.svg'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {Link, useNavigate} from "react-router-dom";
import {logout, refreshToken} from "../../../store/actions/authAction";
import {loadCurrentUser} from "../../../store/actions/userAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";


interface IAdminHeader {
    children?: React.ReactNode | null
}

const AdminHeader: React.FC<IAdminHeader> = ({children}) => {
    const navigate = useNavigate()
    const auth = useAppSelector(state=> state.authReducer)
    const {currentUser, errorCurrentUser} = useAppSelector(state => state.userReducer)

    const now = Date.now()
    const dispatch = useAppDispatch()

    console.log(auth)

    //--methods
    const logOut = () => {
        dispatch(logout())
        navigate('/sign_in/')
    }

    useEffect( () => {
        if(now >= +auth.accessExpires && now < +auth.refreshExpires) dispatch(refreshToken(decodeToken(auth.refresh)))
        if(now >= +auth.refreshExpires) logOut()
    }, [now, auth.accessExpires, auth.refreshExpires]);

    useEffect(() => {
        if (auth.access) dispatch(loadCurrentUser(decodeToken(auth.access)));
    }, [auth.access])

    return (
        <header className={styles.adminHeader}>
            <img src={AppLogo} alt="app logo"/>
            {children && children}
            <div className={styles.auth}>
                {auth.isAuth
                    ? <>
                        <div className={styles.auth__items}
                             style={{cursor: 'default'}}>{currentUser?.username ?? ''}</div>
                        <div className={[styles.auth__items, styles.auth__link].join(' ')}
                             onClick={logOut}>Выход
                        </div>
                    </>
                    : <>
                        <Link to={'/sign_in/'} className={[styles.auth__items, styles.auth__link].join(' ')}>Вход</Link>
                        <Link to={'/sign_up/'}
                              className={[styles.auth__items, styles.auth__link].join(' ')}>Регистрация</Link>
                    </>
                }
            </div>
        </header>
    );
};

export default AdminHeader;