import React, { useState } from 'react'

export const AuthContex = () => React.createContext({
    isLogin: false,
    SignIn: () => {}
})

const AuthContextProvider = (props) => {
    const [login, setLogin] = useState(false)
    const LoginHandler = () => {
        setLogin(true);
    }

    return (
        <AuthContextProvider value = {{isLogin:login, SignIn:LoginHandler}}>
            {props.children}
        </AuthContextProvider>
    )

}

export default AuthContextProvider;