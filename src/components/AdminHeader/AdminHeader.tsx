import React from 'react';
import styles from './AdminHeader.module.sass'
import AppLogo from '../../assets/img/I-Catalogue.png'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import authReducer from "../../store/reducers/authSlice";
import {Link} from "react-router-dom";

interface IAdminHeader {
    children?: React.ReactNode | null
}

const AdminHeader: React.FC<IAdminHeader> = ({children}) => {
    const auth = useAppSelector(state => state.authReducer)
    return (
        <header className={styles.adminHeader}>
            <img src={AppLogo} alt="app logo"/>
            {children && children}
            <div className={styles.auth}>
                {auth.isAuth
                    ? <>
                        <div className={styles.auth__items}></div>
                        <div className={styles.auth__items}>Выход</div>
                    </>
                    : <>
                        <Link to={'sing-in'} className={styles.auth__items}>Вход</Link>
                        <Link to={'sign-up'} className={styles.auth__items}>Регистрация</Link>
                    </>
                }
            </div>
        </header>
    );
};

export default AdminHeader;
