import React, {useEffect} from 'react';
import styles from './AdminHeader.module.sass'
import AppLogo from '../../../assets/img/I-Catalogue.svg'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {Link} from "react-router-dom";
import {logout, refreshToken, verifyToken} from "../../../store/actions/authAction";
import {loadCurrentUser} from "../../../store/actions/userAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";


interface IAdminHeader {
    children?: React.ReactNode | null
}

const AdminHeader: React.FC<IAdminHeader> = ({children}) => {
    const {isAuth, access, accessExpires, refreshExpires, refresh, error} = useAppSelector(state => state.authReducer)
    const {currentUser, errorCurrentUser} = useAppSelector(state => state.userReducer)

    const now = Date.now()
    const dispatch = useAppDispatch()

    //--methods
    const userLogOut = () => dispatch(logout(decodeToken(access), decodeToken(refresh)))

    useEffect(() => {
        if (access && refresh && now >= (+accessExpires - 60000) && now < +refreshExpires) dispatch(refreshToken(decodeToken(refresh)))
        if (refresh && now >= +refreshExpires) userLogOut()
    }, [now, accessExpires, refreshExpires]);

    useEffect(() => {
        if (access) dispatch(loadCurrentUser(decodeToken(access)));
    }, [access])

    return (
        <header className={styles.adminHeader}>
            <img src={AppLogo} alt="app logo"/>
            {children && children}
            {isAuth
                ? <div className={styles.auth}>
                    {currentUser && (
                        <div className={styles.auth__items} style={{cursor: 'default'}}>{currentUser.username}</div>)}
                    <div className={[styles.auth__items, styles.auth__link].join(' ')} onClick={userLogOut}>Выход
                    </div>
                </div>
                : <div className={styles.auth}>
                    <Link to={'/sign_in/'} className={[styles.auth__items, styles.auth__link].join(' ')}>Вход</Link>
                    <Link to={'/sign_up/'}
                          className={[styles.auth__items, styles.auth__link].join(' ')}>Регистрация</Link>
                </div>
            }
        </header>
    );
};

export default AdminHeader;