import { useState, useRef, useEffect} from 'react';
import styles from './RegisterForm.module.css'


    const Input =(props) => {
    const [ input, setInput ] = useState('');
    const [ isValid, setIsValid ] = useState(true);
    
    let isInitial = useRef(true);

    const InputHandler = (e) => {
        setInput(e.target.value);
    }
  
    props.onSaveForm(input, props.inputId);

      useEffect(() => {
         if(isInitial.current) {
             isInitial.current=false;
             return;
         }
         if(input === '') {
            setIsValid(false);
         }
         else{
             setIsValid(true);
         }
      }, [props.trg, input])


    return (
        <>
            <input name={props.inputId} className={isValid ? '' : styles.error} name='inputName' type={props.types} placeholder={props.placehold} onChange={InputHandler} value={input}/>
            { !isValid && <p className={styles.errorParagraph}>{props.message}</p>}
        </>
        )
    }

export default Input;