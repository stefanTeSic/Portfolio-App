import styles from './RegisterForm.module.css'
import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formActions } from '../../store/index'
import Input from './Input'

let preventFirstRun = true;
let formDataStringify;
let obj;
const RegisterForm = () => {
    const [passwordValid, setPasswordValid] = useState(true);
    const [trgVal, setTrgVal] = useState(true);

    const stateRedux = useSelector(state => state.formState);
    const passwordState = useSelector(state => state.formState.password);

    const dispatch = useDispatch();
    const history = useHistory();



    const ProbaHandler = (enteredFormData, inputId) => {

        if(inputId === 'name') {
            obj = { ...obj,
                name: enteredFormData
            }
        }
        else if (inputId === 'surname'){
            obj = { ...obj,
                surname: enteredFormData
            }
        }
        else if (inputId === 'company'){
            obj = { ...obj,
                company: enteredFormData
            }
        }
        else if (inputId === 'address'){
            obj = { ...obj,
                address: enteredFormData
            }
        }
        else if (inputId === 'city'){
            obj = { ...obj,
                city: enteredFormData
            }
        }
        else if (inputId === 'state'){
            obj = { ...obj,
                state: enteredFormData
            }
        }
        else if (inputId === 'zip'){
            obj = { ...obj,
                zip: enteredFormData
            }
        }
        else if (inputId === 'phone'){
            obj = { ...obj,
                phone: enteredFormData
            }
        }
        else if (inputId === 'email'){
            obj = { ...obj,
                email: enteredFormData
            }
        }
        else if (inputId === 'password'){
            obj = { ...obj,
                password: enteredFormData
            }
        }
        else if (inputId === 'confirm'){
            obj = { ...obj,
                confirm: enteredFormData
            }
        }
    }


    const validation = e => {
        e.preventDefault();
        setTrgVal(false);
    const formDataObject = obj;

        dispatch(formActions.setStateInRedux(formDataObject));
    }
    
    useEffect(() => {
        if(preventFirstRun) {
            preventFirstRun= false;
            return;
        }
        formDataStringify = JSON.stringify(stateRedux);
        localStorage.setItem('formData', formDataStringify);
        const registerUser = localStorage.getItem('formData');
        const json = JSON.parse(registerUser);
        if (obj.name === json['name'] &&  obj.surname === json['surname'] && obj.company === json['company'] && obj.address === json['address'] && obj.city === json['city'] && obj.state === json['state'] && obj.zip === json['zip'] && obj.phone === json['phone'] && obj.email === json['email'] && obj.password === json['password'] && obj.confirm === json['confirm'] ) {
            if(obj.name !== '' &&  obj.surname !== '' && obj.company !== '' && obj.address !== '' && obj.city !== '' &&  obj.state !== '' &&  obj.zip !== '' && obj.phone !== '' && obj.email !== '' && obj.password !== '' && obj.confirm !== '' &&  obj.password.length >= 8) {
                history.push("/dashboard");
                console.log('radiiii');
            }
        }

    }, [stateRedux])

    useEffect(() => {
        if(passwordState) {
            if(passwordState.length<8) {
                setPasswordValid(false);
            }else{
                setPasswordValid(true);
            }
        }
    }, [passwordState])

    return(
        <div className ={styles.main}>
            <div className className = {styles.subdiv}>
                <div className = {styles.title}>First App</div>
                <h1 className = {styles.welcome}>Welcome</h1>
                <p className = {styles.createAccount}>Create your account</p>
                <form id="myForm" type = "submit" className = {styles.form}  onSubmit={validation}>
                    <Input inputId = 'name' message= 'Please input your name!' types='text' placehold='First Name' onSaveForm={ProbaHandler} trg={trgVal}/>
                    <Input inputId = 'surname' message= 'Please input your surname!' types='text' placehold='Last Name' onSaveForm={ProbaHandler} trg={trgVal}/>
                    <Input inputId = 'company' message= 'Please input your company name!' types='text' placehold='Company' onSaveForm={ProbaHandler} trg={trgVal}/>
                    <Input inputId = 'address' message= 'Please input your address!' types='text' placehold='Address' onSaveForm={ProbaHandler} trg={trgVal}/>
                    <Input inputId = 'city' message= 'Please input your city name!' types='text' placehold='City' onSaveForm={ProbaHandler} trg={trgVal}/>
                    <Input inputId = 'state' message= 'Please input your state name!' types='text' placehold='State' onSaveForm={ProbaHandler} trg={trgVal}/>
                    <Input inputId = 'zip' message= 'Please input your zip code!' types='text' placehold='Zip' onSaveForm={ProbaHandler} trg={trgVal}/>
                    <Input inputId = 'phone' message= 'Please input your phone number!' types='text' placehold='Phone' onSaveForm={ProbaHandler} trg={trgVal}/>
                    <Input inputId = 'email' message= 'Please input your email!' types='email' placehold='Email' onSaveForm={ProbaHandler} trg={trgVal}/>
                    <Input inputId = 'password' message= 'Please input your password!' types='password' placehold='Password' onSaveForm={ProbaHandler} trg={trgVal}/>
                    {passwordValid ? null : <p className={styles.errorParagraph}>Password must contain minimum 8 characters</p>}
                    <Input inputId = 'confirm' message= 'Please reenter your password!' types='password' placehold='Confirm' onSaveForm={ProbaHandler} trg={trgVal}/>
                    <button className = {styles.button}>Register</button>
                </form>
                <div className = {styles.lastDiv}><Link to="/dashboard"><p>Already have an account?</p></Link><Link to="/"><a href="">Login!</a></Link></div>
            </div>
        </div>
    )
}


export default RegisterForm;