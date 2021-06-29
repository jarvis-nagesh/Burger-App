import React, { useState } from "react"
import cls from "./Login.module.css"
import SignIn from "./SignIn/SignIn"
import SignUp from "./Signup/Signup"


const Login = (props) => {
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(true);
    const [userData, setUserData] = useState([])

    const Details = user => {
        fetch('https://burger-app-5aee9-default-rtdb.firebaseio.com/users.json',{
            method: 'POST',
            body: JSON.stringify(user),
            headers: {'context-type':'application/json'}
        })
        setUserData(user)
    }

    // const Details = (user) => {
    //     const postData = {
    //         method: "POST",
    //         body: JSON.stringify(user),
    //         headers: {'context-type': 'application/json'}
    //     }
    //     fetch('https://burger-app-5aee9-default-rtdb.firebaseio.com/users.json', postData)
    // }

    const signInClicked = () => {
        setSignIn(true);
        setSignUp(false)
    };
    const signUpClicked = () => {
        setSignUp(true);
        setSignIn(false)
    };
    const signUpRedirect = (item1, item2) => {
        setSignIn(item1);
        setSignUp(item2);
    }

    let signForm;
    if (signIn) {
        signForm = (<SignIn />)
    }
    if (signUp) {
        signForm = (<SignUp details={Details} signUpRedirect={signUpRedirect}/>)
    }
    return (<>
        <div className={cls.Login}>
            <ul>
            <h5>Note <li>SignUp first, for shipping address, Then</li>
            <li>Demo login is provided, just click on login button to login.</li></h5>
            </ul>
            <div className={cls.Links}>
                <h2 onClick={signInClicked} className={signIn ? cls.active : cls.border}>SignIn</h2>
                <h2 onClick={signUpClicked} className={signUp ? cls.active : cls.border}>SignUp</h2>
            </div>
            <div className={cls.signIn}>
                {signForm}
            </div>
        </div>
    </>
    )

}

export default Login
