import React, {useEffect, useState} from 'react';
import styles from './Auth.module.sass'
import {IUserBase} from "../../interface/IUser";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {loginUser} from "../../store/actions/authAction";
import {useNavigate} from "react-router-dom";
import AuthInputContainer from "../../components/UI/InputContainers/AuthInputContainer";
import PasswordInput from "../../components/AuthComponents/PasswordInput";
import InVisibleIcon from "../../assets/img/Invisible.svg";
import VisibleIcon from "../../assets/img/Visible.svg";
import {
    changeAuthLabelsAndValidationViewOnBlur,
    changeAuthLabelsOnFocus
} from "../../utils/changeAuthLabelsAndValidationView";


const SignIn = () => {
    const navigate = useNavigate()
    const auth = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()
    //-----states
    const [user, setUser] = useState<IUserBase>({username: '', password: ''})

    //--methods
   const onBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => changeAuthLabelsAndValidationViewOnBlur(e)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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


    const onFocusHandler = (e: React.FocusEvent) => changeAuthLabelsOnFocus(e)


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

        <main className={styles.auth__container}>
            <div className={styles.auth__form}>
                <h4 className={styles.auth__heading}>Вход</h4>
                <form onSubmit={e => submitHandler(e)} className={styles.auth__formContainer}>
                    <AuthInputContainer inputContainerClass={styles.auth__inputContainer}
                                        type={'text'} name={'username'} onFocusHandler={onFocusHandler}
                                        onChangeHandler={onChangeHandler} onBlurHandler={onBlurInput}
                                        value={user.username} required={true}
                                        label={'Логин'}/>
                    <PasswordInput inputContainerClass={styles.auth__inputContainer}
                                   type={passwordVisibility.type}
                                   name={"password"}
                                   onFocusHandler={onFocusHandler}
                                   onChangeHandler={onChangeHandler}
                                   onBlurHandler={onBlurInput}
                                   value={user.password}
                                   required={true}
                                   label={'Пароль'}
                                   imgClassName={styles.visibilityIcon}
                                   image={passwordVisibility.image}
                                   passwordVisibilityHandler={getPasswordVisibility}/>
                    <button type={"submit"} className={styles.auth__button}>Войти</button>
                </form>
            </div>
        </main>
    );
};

export default SignIn;
