import React, {useState} from 'react';
import s from './Auth.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getAuthLogin} from "./AuthReducer";
import {Redirect} from "react-router-dom";


const Auth = () => {
    const dispatch = useDispatch();
    const error = useSelector((state)=> state.auth.error);
    const isAuth = useSelector((state)=> state.auth.isAuth);
    const [emailInput, setEmail] = useState('');
    const [passInput, setPass] = useState('');


    const onEmailChange = (e) => {
        setEmail(e.currentTarget.value)

    };
    const onPassChange = (e) => {
        setPass (e.currentTarget.value)
    };

    const submit = () => {
        dispatch(getAuthLogin(emailInput, passInput));

    };
    const cancel = () => {
        setEmail('');
        setPass('')
    };

    if(isAuth) return <Redirect to = {"/restaurants-list"}/>;


    return (
        <div className={s.auth}>
            <h3>
                Login
            </h3>


            <form className={s.form}>
                <div className={s.field}><span className={s.label}>Login </span>
                    <input className={s.formData}
                           value = {emailInput}
                           onChange={onEmailChange}
                           placeholder='Enter your email'/></div>
                <div className={s.field}><span className={s.label}>Password</span>
                    <input className={s.formData}
                           value = {passInput}
                           onChange={onPassChange}
                           placeholder='Enter your password'/></div>
            </form>


            <div className={s.error}>{error}</div>
            {/*<div className={s.error}>{inputError}</div>*/}


            <div className={s.buttons}>
                <button onClick={submit}>login</button>
                <button onClick={cancel}>cancel</button>
            </div>

        </div>
    );
};

export default Auth;
