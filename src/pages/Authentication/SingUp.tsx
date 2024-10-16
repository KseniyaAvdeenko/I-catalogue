import React, {useState} from 'react';
import styles from "./Auth.module.sass";
import {redirect} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {INewUser} from "../../interface/IUser";
import {registerUser} from "../../store/actions/authAction";
import AuthInputContainer from "../../components/UI/InputContainers/AuthInputContainer";
import VisibleIcon from '../../assets/img/Visible.svg'
import InVisibleIcon from '../../assets/img/Invisible.svg'
import PasswordInput from "../../components/AuthComponents/PasswordInput";
import {
    changeAuthLabelsAndValidationViewOnBlur,
    changeAuthLabelsOnFocus, isPasswordsMatching
} from "../../utils/changeAuthLabelsAndValidationView";
import {setPageTitle} from "../../hooks/getTitle";

const SignUp = () => {
    const auth = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()

    //--states
    const [newUser, setNewUser] = useState<INewUser>({username: '', email: '', password: '', re_password: ''})

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
    setPageTitle("Регистрация")
    //--methods
    const onBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => changeAuthLabelsAndValidationViewOnBlur(e)


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
        if (e.currentTarget.id === 're_password')
            e.currentTarget.value === newUser.password
                ? isPasswordsMatching(e, true)
                : isPasswordsMatching(e, false)
    }

    if (auth.isSignedUp) redirect('/sign_in/')

    const onFocusHandler = (e: React.FocusEvent) => changeAuthLabelsOnFocus(e)


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
                    <AuthInputContainer
                        inputContainerClass={styles.auth__inputContainer}
                        type={'text'} name={'username'} onFocusHandler={onFocusHandler}
                        onChangeHandler={onChangeHandler} onBlurHandler={onBlurInput}
                        value={newUser.username} required={true} label={'Логин'}
                    />
                    <AuthInputContainer
                        inputContainerClass={styles.auth__inputContainer}
                        type={'email'} name={'email'} onFocusHandler={onFocusHandler}
                        onChangeHandler={onChangeHandler} onBlurHandler={onBlurInput}
                        value={newUser.email} required={true} label={'Email'}
                    />
                    <PasswordInput inputContainerClass={styles.auth__inputContainer}
                                   type={passwordVisibility.type}
                                   name={"password"}
                                   onFocusHandler={onFocusHandler}
                                   onChangeHandler={onChangeHandler}
                                   onBlurHandler={onBlurInput}
                                   value={newUser.password}
                                   required={true}
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
