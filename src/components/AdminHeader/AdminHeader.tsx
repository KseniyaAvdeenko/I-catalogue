import React, {useEffect} from 'react';
import styles from './AdminHeader.module.sass'
import AppLogo from '../../assets/img/I-Catalogue.png'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Link, useNavigate} from "react-router-dom";
import {logout, refreshToken, verifyToken} from "../../store/actions/authAction";
import {loadCurrentUser} from "../../store/actions/userAction";
import {loadCommonSettings} from "../../store/actions/commonSettingsAction";
import {loadFooterSettings} from "../../store/actions/footerSettingsAction";
import {loadHeaderSettings} from "../../store/actions/headerSettingsAction";
import {loadButtonSettings} from "../../store/actions/buttonSettingsAction";
import {decodeToken} from "../../hooks/encodeDecodeTokens";
import {loadContacts} from "../../store/actions/contactsAction";
import {loadPagesWithNavLinks} from "../../store/actions/pageSettingsAction";
import {loadMainPageSettings} from "../../store/actions/mainPageSettingsAction";


interface IAdminHeader {
    children?: React.ReactNode | null
}

const AdminHeader: React.FC<IAdminHeader> = ({children}) => {
    const navigate = useNavigate()
    //const auth = useAppSelector(state => state.authReducer)
    const {currentUser, errorCurrentUser} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const now = Date.parse(new Date().toString())
    //--methods
    const logOut = () => {
        dispatch(logout())
        navigate('/sign_in/')
    }
    async function isAuthenticated() {
        while ((now - Date.parse(localStorage.lastLogin)) >= 360000 ) {
            if (await verifyToken(decodeToken(localStorage.refresh))) {
                dispatch(refreshToken(decodeToken(localStorage.refresh)))
            }
        }
        while ((now - Date.parse(localStorage.lastLogin)) > (3600000 * 24)) {
            logOut()
        }
    }

    console.log(now - Date.parse(localStorage.lastLogin))
    useEffect( () => {
        if (localStorage.access && localStorage.refresh && localStorage.laastLogin) {
            isAuthenticated()
        }
    }, [now, localStorage.access, localStorage.refresh, localStorage.lastLogin]);

    useEffect(() => {
        if (localStorage.access) {
            dispatch(loadCurrentUser(decodeToken(localStorage.access)))
        }
        dispatch(loadButtonSettings())
        dispatch(loadCommonSettings())
        dispatch(loadContacts())
        dispatch(loadPagesWithNavLinks())
        dispatch(loadMainPageSettings())
        dispatch(loadFooterSettings())
        dispatch(loadHeaderSettings())
    }, [localStorage.access])

    //console.log(currentUser, localStorage.access)
    return (
        <header className={styles.adminHeader}>
            <img src={AppLogo} alt="app logo"/>
            {children && children}
            <div className={styles.auth}>
                {localStorage.access
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
