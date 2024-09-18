import React, {useState} from 'react';
import AdminHeader from "../../components/AdminComponents/AdminHeader/AdminHeader";
import styles from "./Auth.module.sass";
import AdminFooter from "../../components/AdminComponents/AdminFooter/AdminFooter";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {INewUser} from "../../interface/IUser";
import {registerUser} from "../../store/actions/authAction";

const SignUp = () => {
    const navigate = useNavigate()
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
    //--methods
    const onBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'username') {
            !e.currentTarget.value.trim()
                ? setUsernameLabel({...usernameLabel, top: '1rem', color: '#333333'})
                : setUsernameLabel({...usernameLabel, top: '-2rem', color: '#333333'})
        } else if (e.currentTarget.name === 'email') {
            !e.currentTarget.value.trim()
                ? setEmailLabel({...emailLabel, top: '1rem', color: '#333333'})
                : setEmailLabel({...emailLabel, top: '-2rem', color: '#333333'})
        } else if (e.currentTarget.name === 'password') {
            !e.currentTarget.value.trim()
                ? setPasswordLabel({...passwordLabel, top: '1rem', color: '#333333'})
                : setPasswordLabel({...passwordLabel, top: '-2rem', color: '#333333'})
        } else {
            !e.currentTarget.value.trim()
                ? setRePasswordLabel({...rePasswordLabel, top: '1rem', color: '#333333'})
                : setRePasswordLabel({...rePasswordLabel, top: '-2rem', color: '#333333'})
        }
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
        navigate('/sign_in/')
    }
    return (
        <>
            <AdminHeader></AdminHeader>
            <main className={styles.auth__container}>
                <div className={styles.auth__form}>
                    <h4 className={styles.auth__heading}>Регистрация</h4>
                    {auth.error && (
                        <p style={{textAlign: 'center', color: 'red', marginBottom: '2rem'}}>{auth.error}</p>)}
                    <form onSubmit={e => submitHandler(e)} className={styles.auth__formContainer}>
                        <div className={styles.auth__inputContainer}>
                            <label htmlFor="username" style={usernameLabel}>Логин</label>
                            <input type="text" name='username' id='username'
                                   onFocus={() => setUsernameLabel({...usernameLabel, top: '-2rem', color: '#926B6A'})}
                                   onBlur={e => onBlurInput(e)}
                                   onChange={e => onChangeHandler(e)}
                                   value={newUser.username}
                                   required={true}
                            />
                        </div>
                        <div className={styles.auth__inputContainer}>
                            <label htmlFor="email" style={emailLabel}>Email</label>
                            <input type="email" name='email' id='email'
                                   onFocus={() => setEmailLabel({...emailLabel, top: '-2rem', color: '#926B6A'})}
                                   onBlur={e => onBlurInput(e)}
                                   onChange={e => onChangeHandler(e)}
                                   value={newUser.email}
                                   required={true}
                            />
                        </div>
                        <div className={styles.auth__inputContainer}>
                            <label htmlFor="password" style={passwordLabel}>Пароль</label>
                            <input type="password" name='password' id='password'
                                   onFocus={() => setPasswordLabel({...passwordLabel, top: '-2rem', color: '#926B6A'})}
                                   onBlur={e => onBlurInput(e)}
                                   onChange={e => onChangeHandler(e)}
                                   value={newUser.password}
                                   required={true}
                            />
                        </div>
                        <div className={styles.auth__inputContainer}>
                            <label htmlFor="re_password" style={rePasswordLabel}>Повторите пароль</label>
                            <input type="password" name='re_password' id='re_password'
                                   onFocus={() => setRePasswordLabel({
                                       ...rePasswordLabel,
                                       top: '-2rem',
                                       color: '#926B6A'
                                   })}
                                   onBlur={e => onBlurInput(e)}
                                   onChange={e => onChangeHandler(e)}
                                   value={newUser.re_password}
                                   required={true}
                            />
                        </div>
                        <button type={"submit"} className={styles.auth__button}>Регистрироваться</button>
                    </form>
                </div>
            </main>
            <AdminFooter/>
        </>
    );
};

export default SignUp;
