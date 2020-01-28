import React, {useState} from 'react';
import * as firebase from 'firebase';

function SignUp(props){

    const [passwordError, setPasswordError] = useState(false);

    let _name = null;
    let _email = null;
    let _passwordOne = null;
    let _passwordTwo = null;
    let _botProtection = null;

    function signUpFunction(e){
        e.preventDefault();
        if(_botProtection.value === ''){
            if(_passwordOne.value !== _passwordTwo.value){
                _passwordOne.value = '';
                _passwordTwo.value = '';
                return setPasswordError("Your passwords doesn't match. Please try again.")
            } else {
                firebase.auth().createUserWithEmailAndPassword(_email.value, _passwordOne.value).catch(error => {
                    setPasswordError(error.message)
                })
            }
        } else {
            console.log('no')
        }
    }

    return(
        <div className="signUpContainer">
            <div className="signUpForm">
                <form onSubmit={signUpFunction}>
                    <input type="text" placeholder='Name' ref={value => {_name = value}}/><br />
                    <input type="email" placeholder='Email' ref={value => {_email = value}}/><br />
                    <input type="password" placeholder="Password" ref={value => {_passwordOne = value}}/><br />
                    <input type="password" placeholder="Confirm Password" ref={value => {_passwordTwo = value}}/><br />
                    {passwordError}
                    <input placeholder="bot" style={{display: "none"}} ref={value => {_botProtection = value}} />
                    <br />
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have a account? <span onClick={props.closeSignUp} className="signUpClick">Click Here!</span></p>
            </div>
        </div>
    )
}

export default SignUp;