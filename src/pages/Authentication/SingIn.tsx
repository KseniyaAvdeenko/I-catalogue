import React, {useEffect, useState} from 'react';
import styles from './Auth.module.sass'
import {IUserBase} from "../../interface/IUser";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {loginUser} from "../../store/actions/authAction";
import {redirect, useNavigate} from "react-router-dom";
import AdminHeader from "../../components/AdminComponents/AdminHeader/AdminHeader";
import AdminFooter from "../../components/AdminComponents/AdminFooter/AdminFooter";
import AuthInputContainer from "../../components/UI/InputContainers/AuthInputContainer";
import PasswordInput from "../../components/AuthComponents/PasswordInput";
import InVisibleIcon from "../../assets/img/Invisible.svg";
import VisibleIcon from "../../assets/img/Visible.svg";



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
        if (auth.isAuth) navigate('/admin_page/')
    }, [auth.isAuth])


    const onFocusHandler = (e: React.FocusEvent) => {
        if (e.currentTarget.id === 'username') setUsernameLabel({...usernameLabel, top: '-2rem', color: '#926B6A'})
        if (e.currentTarget.id === 'password') setPasswordLabel({...passwordLabel, top: '-2rem', color: '#926B6A'})
    }
    const [passwordVisibility, setPasswordVisibility] = useState<{ visible: boolean, image: string, type: string }>({
        visible: false,
        image: InVisibleIcon,
        type: 'password'
    })
    const getPasswordVisibility = () => {
        passwordVisibility.visible
            ? setPasswordVisibility({...passwordVisibility, visible: false, image: InVisibleIcon, type: 'password'})
            : setPasswordVisibility({...passwordVisibility, visible: true, image: VisibleIcon, type: 'text'})
    }
    return (
        <>
            <AdminHeader></AdminHeader>
            <main className={styles.auth__container}>
                <div className={styles.auth__form}>
                    <h4 className={styles.auth__heading}>Вход</h4>
                    {auth.error && (
                        <p style={{textAlign: 'center', color: 'red', marginBottom: '2rem'}}>{auth.error}</p>)}
                    <form onSubmit={e => submitHandler(e)} className={styles.auth__formContainer}>
                        <AuthInputContainer inputContainerClass={styles.auth__inputContainer}
                                            type={'text'} name={'username'} onFocusHandler={onFocusHandler}
                                            onChangeHandler={onChangeHandler} onBlurHandler={onBlurInput}
                                            value={user.username} required={true} labelStyle={usernameLabel}
                                            label={'Логин'}/>
                        <PasswordInput inputContainerClass={styles.auth__inputContainer}
                                       type={passwordVisibility.type}
                                       name={"password"}
                                       onFocusHandler={onFocusHandler}
                                       onChangeHandler={onChangeHandler}
                                       onBlurHandler={onBlurInput}
                                       value={user.password}
                                       required={true}
                                       labelStyle={passwordLabel}
                                       label={'Пароль'}
                                       imgClassName={styles.visibilityIcon}
                                       image={passwordVisibility.image}
                                       passwordVisibilityHandler={getPasswordVisibility}/>
                        <button type={"submit"} className={styles.auth__button}>Войти</button>
                    </form>
                </div>
            </main>
            <AdminFooter/>
        </>
    );
};

export default SignIn;
