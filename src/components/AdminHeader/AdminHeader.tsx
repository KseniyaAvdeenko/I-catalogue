import React, {useEffect} from 'react';
import styles from './AdminHeader.module.sass'
import AppLogo from '../../assets/img/I-Catalogue.svg'
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
import {loadProdPage} from "../../store/actions/prodPageSettingsAction";
import {loadProdAttributes} from "../../store/actions/prodAttrsAction";
import {loadProducts, loadProductsRead} from "../../store/actions/productAction";
import {loadImages} from "../../store/actions/prodImagesAction";
import {loadModalFormSettings} from "../../store/actions/modalFormAction";



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
        if (auth.access) {
            dispatch(loadCurrentUser(decodeToken(auth.access)));
        }
        dispatch(loadButtonSettings());
        dispatch(loadCommonSettings());
        dispatch(loadContacts());
        dispatch(loadPagesWithNavLinks());
        dispatch(loadMainPageSettings());
        dispatch(loadFooterSettings());
        dispatch(loadHeaderSettings());
        dispatch(loadProdPage());
        dispatch(loadProdAttributes());
        dispatch(loadProducts());
        dispatch(loadProductsRead())
        dispatch(loadImages())
        dispatch(loadModalFormSettings())
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