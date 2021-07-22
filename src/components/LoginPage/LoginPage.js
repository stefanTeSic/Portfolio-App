import { useState } from 'react'
import styles from './LoginPage.module.css'
import { Link, useHistory } from 'react-router-dom'
import Input from '../RegisterPage/Input'

let email;
let password;
const LoginPage = () => {
    const history = useHistory();
    const [trgVal, setTrgVal] = useState(true);

    const loginHandler = (enteredFormData, inputId) => {
        if(inputId === 'email') {
            email=enteredFormData;
        }
        else if(inputId === 'password') {
            password=enteredFormData;
        }
    }
    const loginUser = localStorage.getItem('formData');
    const json = JSON.parse(loginUser);

    const validation = (e) => {
        e.preventDefault();
        setTrgVal(false);
        if(email === json['email'] && password === json['password']) {
            history.push('/dashboard');
        }
    }

    return(
        <div className ={styles.main}>
            <div className ={styles.subdiv}>
                <div className ={styles.title}>First App</div>
                <h1 className ={styles.welcome}>Welcome</h1>
                <p className ={styles.loginAccount}>Login to your account</p>
                <form  type = "submit" className ={styles.form} onSubmit={validation}>
                        <Input inputId='email' message='Please input your email!' types='email' placehold='Email' onSaveForm={loginHandler} trg={trgVal}/>
                        <Input inputId='password' message='Please input your password!' types='password' placehold='Password' onSaveForm={loginHandler} trg={trgVal}/>
                        <div><a href="">Forgot password</a></div>
                    <button className ={styles.button}> Login </button>
                </form>
                <div className = {styles.lastDiv}><p>Don't have an account?</p><Link to="/register"><a href="">Register now!</a></Link></div>
            </div>
        </div>
    )
}

export default LoginPage;