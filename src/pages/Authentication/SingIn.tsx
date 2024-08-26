import React, {useEffect, useState} from 'react';
import styles from './Auth.module.sass'
import {IUserBase} from "../../interface/IUser";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {loginUser} from "../../store/actions/authAction";
import {useNavigate} from "react-router-dom";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminFooter from "../../components/AdminFooter/AdminFooter";


const SignIn = () => {
    const navigate = useNavigate()
    const auth = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()
    //-----states
    const [usernameLabel, setUsernameLabel] = useState<{ top: string, color: string }>({top: '1rem', color: '#333333'})
    const [passwordLabel, setPasswordLabel] = useState<{ top: string, color: string }>({top: '1rem', color: '#333333'})
    const [user, setUser] = useState<IUserBase>({username: '', password: ''})

    //--methods
    const onBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.name === 'username'
            ? !e.currentTarget.value.trim()
                ? setUsernameLabel({...usernameLabel, top: '1rem', color: '#333333'})
                : setUsernameLabel({...usernameLabel, top: '-2rem', color: '#333333'})
            : !e.currentTarget.value.trim()
                ? setPasswordLabel({...passwordLabel, top: '1rem', color: '#333333'})
                : setPasswordLabel({...passwordLabel, top: '-2rem', color: '#333333'})
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUser({...user, [e.target.name]: e.target.value})
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (user.username && user.password) {
            dispatch(loginUser(user))
            setUser({...user, username: '', password: ''})
        }
    }
    useEffect(() => {
        if (auth.isAuth) {
            navigate('/admin_page/')
        }
    }, [auth.isAuth])


    return (
        <>
            <AdminHeader></AdminHeader>
            <main className={styles.auth__container}>
                <div className={styles.auth__form}>
                    <h4 className={styles.auth__heading}>Вход</h4>
                    {auth.error && (
                        <p style={{textAlign: 'center', color: 'red', marginBottom: '2rem'}}>{auth.error}</p>)}
                    <form onSubmit={e => submitHandler(e)} className={styles.auth__formContainer}>
                        <div className={styles.auth__inputContainer}>
                            <label htmlFor="username" style={usernameLabel}>Логин</label>
                            <input type="text" name='username' id='username'
                                   onFocus={() => setUsernameLabel({...usernameLabel, top: '-2rem', color: '#926B6A'})}
                                   onBlur={e => onBlurInput(e)}
                                   onChange={e => onChangeHandler(e)}
                                   value={user.username}
                            />
                        </div>
                        <div className={styles.auth__inputContainer}>
                            <label htmlFor="password" style={passwordLabel}>Пароль</label>
                            <input type="password" name='password' id='password'
                                   onFocus={() => setPasswordLabel({...passwordLabel, top: '-2rem', color: '#926B6A'})}
                                   onBlur={e => onBlurInput(e)}
                                   value={user.password}
                                   onChange={e => onChangeHandler(e)}/>
                        </div>
                        <button type={"submit"} className={styles.auth__button}>Войти</button>
                    </form>
                </div>
            </main>
            <AdminFooter/>
        </>
    );
};

export default SignIn;
