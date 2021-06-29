import React, { useState, useEffect } from "react"
import cls from "./SignIn.module.css"
import { Redirect } from "react-router-dom"

const SignIn = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch('https://burger-app-5aee9-default-rtdb.firebaseio.com/users.json')
            .then(res => res.json())
            .then(data => {
                setUserData(data)
            })
    }, [])

    const SignInbuttonClickHandler = (e) => {
        e.preventDefault();
        setIsLogin(true)
    };

    let redirect;
    if (isLogin) {
        redirect = <Redirect to="/burgerBuilder" />
    }


    return (
        <div>
            {redirect}
            <div>
                <form action="#" method="" className={cls.Form}>
                    <input type="text" value="demo.username"/>
                    <input type="pwd" value="demo.password" />
                    <button type="submit" onClick={SignInbuttonClickHandler}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;