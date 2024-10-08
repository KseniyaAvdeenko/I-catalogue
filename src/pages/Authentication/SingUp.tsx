import React, {useState} from 'react';
import AdminHeader from "../../components/AdminComponents/AdminHeader/AdminHeader";
import styles from "./Auth.module.sass";
import AdminFooter from "../../components/AdminComponents/AdminFooter/AdminFooter";
import {redirect, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {INewUser} from "../../interface/IUser";
import {registerUser} from "../../store/actions/authAction";
import AuthInputContainer from "../../components/UI/InputContainers/AuthInputContainer";
import VisibleIcon from '../../assets/img/Visible.svg'
import InVisibleIcon from '../../assets/img/Invisible.svg'
import PasswordInput from "../../components/AuthComponents/PasswordInput";
import Notifications from "../../components/UI/Notifications/Notifications";

const SignUp = () => {
    const auth = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()

    //--states
    const [newUser, setNewUser] = useState<INewUser>({username: '', email: '', password: '', re_password: ''})
    const [usernameLabel, setUsernameLabel] = useState<{ top: string, color: string }>({top: '1rem', color: '#333333'})
    const [passwordLabel, setPasswordLabel] = useState<{ top: string, color: string }>({top: '1rem', color: '#333333'})
    const [emailLabel, setEmailLabel] = useState<{ top: string, color: string }>({top: '1rem', color: '#333333'})
    const [rePasswordLabel, setRePasswordLabel] = useState<{ top: string, color: string }>({
        top: '1rem',
        color: '#333333'
    })
    const [passwordVisibility, setPasswordVisibility] = useState<{ visible: boolean, image: string, type: string }>({
        visible: false,
        image: InVisibleIcon,
        type: 'password'
    })
    const [rePasswordVisibility, setRePasswordVisibility] = useState<{ visible: boolean, image: string, type: string }>({
        visible: false,
        image: InVisibleIcon,
        type: 'password'
    })
    //--methods
    const onBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'username')
            !e.currentTarget.value.trim()
                ? setUsernameLabel({...usernameLabel, top: '1rem', color: '#333333'})
                : setUsernameLabel({...usernameLabel, top: '-2rem', color: '#333333'})

        if (e.currentTarget.name === 'email')
            !e.currentTarget.value.trim()
                ? setEmailLabel({...emailLabel, top: '1rem', color: '#333333'})
                : setEmailLabel({...emailLabel, top: '-2rem', color: '#333333'})

        if (e.currentTarget.name === 'password')
            !e.currentTarget.value.trim()
                ? setPasswordLabel({...passwordLabel, top: '1rem', color: '#333333'})
                : setPasswordLabel({...passwordLabel, top: '-2rem', color: '#333333'})
        if (e.currentTarget.name === 're_password')
            !e.currentTarget.value.trim()
                ? setRePasswordLabel({...rePasswordLabel, top: '1rem', color: '#333333'})
                : setRePasswordLabel({...rePasswordLabel, top: '-2rem', color: '#333333'})
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newUser.username.trim() && newUser.email.trim() && newUser.password.trim() && newUser.re_password) {
            if (newUser.re_password.trim() && newUser.password) {
                dispatch(registerUser(newUser))
                setNewUser({...newUser, username: '', email: '', password: '', re_password: ''})
            }
        }
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }
    if (auth.isSignedUp) {
        redirect('/sign_in/')
    }

    const onFocusHandler = (e: React.FocusEvent) => {
        if (e.currentTarget.id === 'username') setUsernameLabel({...usernameLabel, top: '-2rem', color: '#926B6A'})
        if (e.currentTarget.id === 'email') setEmailLabel({...emailLabel, top: '-2rem', color: '#926B6A'})
        if (e.currentTarget.id === 'password') setPasswordLabel({...passwordLabel, top: '-2rem', color: '#926B6A'})
        if (e.currentTarget.id === 're_password') setRePasswordLabel({
            ...rePasswordLabel,
            top: '-2rem',
            color: '#926B6A'
        })
    }

    const getPasswordVisibility = () => {
        passwordVisibility.visible
            ? setPasswordVisibility({...passwordVisibility, visible: false, image: InVisibleIcon, type: 'password'})
            : setPasswordVisibility({...passwordVisibility, visible: true, image: VisibleIcon, type: 'text'})
    }
    const getRePasswordVisibility = () => {
        rePasswordVisibility.visible
            ? setRePasswordVisibility({...rePasswordVisibility, visible: false, image: InVisibleIcon, type: 'password'})
            : setRePasswordVisibility({...rePasswordVisibility, visible: true, image: VisibleIcon, type: 'text'})
    }

    return (
        <main className={styles.auth__container}>
            <div className={styles.auth__form}>
                <h4 className={styles.auth__heading}>Регистрация</h4>
                <form onSubmit={e => submitHandler(e)} className={styles.auth__formContainer}>
                    <AuthInputContainer inputContainerClass={styles.auth__inputContainer}
                                        type={'text'} name={'username'} onFocusHandler={onFocusHandler}
                                        onChangeHandler={onChangeHandler} onBlurHandler={onBlurInput}
                                        value={newUser.username} required={true} labelStyle={usernameLabel}
                                        label={'Логин'}/>
                    <AuthInputContainer inputContainerClass={styles.auth__inputContainer}
                                        type={'email'} name={'email'} onFocusHandler={onFocusHandler}
                                        onChangeHandler={onChangeHandler} onBlurHandler={onBlurInput}
                                        value={newUser.email} required={true} labelStyle={emailLabel}
                                        label={'Email'}/>
                    <PasswordInput inputContainerClass={styles.auth__inputContainer}
                                   type={passwordVisibility.type}
                                   name={"password"}
                                   onFocusHandler={onFocusHandler}
                                   onChangeHandler={onChangeHandler}
                                   onBlurHandler={onBlurInput}
                                   value={newUser.password}
                                   required={true}
                                   labelStyle={passwordLabel}
                                   label={'Пароль'}
                                   imgClassName={styles.visibilityIcon}
                                   image={passwordVisibility.image}
                                   passwordVisibilityHandler={getPasswordVisibility}/>

                    <PasswordInput inputContainerClass={styles.auth__inputContainer}
                                   type={rePasswordVisibility.type}
                                   name={"re_password"}
                                   onFocusHandler={onFocusHandler}
                                   onChangeHandler={onChangeHandler}
                                   onBlurHandler={onBlurInput}
                                   value={newUser.re_password}
                                   required={true}
                                   labelStyle={rePasswordLabel}
                                   label={'Повторите пароль'}
                                   imgClassName={styles.visibilityIcon}
                                   image={rePasswordVisibility.image}
                                   passwordVisibilityHandler={getRePasswordVisibility}/>
                    <button type={"submit"} className={styles.auth__button}>Регистрироваться</button>
                </form>
            </div>
        </main>
    );
};

export default SignUp;
