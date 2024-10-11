import React, {useEffect} from 'react';
import styles from './AdminHeader.module.sass'
import AppLogo from '../../../assets/img/I-Catalogue.svg'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {Link} from "react-router-dom";
import {logout, refreshToken} from "../../../store/actions/authAction";
import {loadCurrentUser} from "../../../store/actions/userAction";
import {decodeToken} from "../../../hooks/encodeDecodeTokens";
import {loadOrderStats} from "../../../store/actions/orderAction";


interface IAdminHeader {
    children?: React.ReactNode | null
}

const AdminHeader: React.FC<IAdminHeader> = ({children}) => {
    const {isAuth, access, accessExpires, refreshExpires, refresh} = useAppSelector(state => state.authReducer)
    const {currentUser} = useAppSelector(state => state.userReducer)

    const now = Date.now()
    const dispatch = useAppDispatch()

    //--methods
    const userLogOut = () => dispatch(logout(decodeToken(access), decodeToken(refresh)))

    useEffect(() => {
        if (access && refresh && now >= (+accessExpires - 60000) && now < +refreshExpires) dispatch(refreshToken(decodeToken(refresh)))
    }, [now, accessExpires, refreshExpires]);

    useEffect(() => {
        if (access) dispatch(loadCurrentUser(decodeToken(access)));
        if (access) dispatch(loadOrderStats(decodeToken(access)))
    }, [access])

    return (
        <header className={styles.adminHeader}>
            <Link to={'/admin_page/'} className={styles.adminHeader__logo}><img src={AppLogo} alt="app logo"/></Link>
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