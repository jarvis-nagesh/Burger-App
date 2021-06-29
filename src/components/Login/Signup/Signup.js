import React, { useState } from "react"
import cls from "./SignUp.module.css"


const SignUp = props => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [username, setUsername] = useState()
    const [pwd, setPwd] = useState()
    const [address, setAddress] = useState()
    const [mbl, setMbl] = useState()
    const [pincode, setPincode] = useState()
    const {details} = props

    let userDetails = {
        firstName:firstName,
        lastName:lastName,
        username:username,
        password:pwd,
        address:address,
        mbl:mbl,
        pincode:pincode
    }

    const SignUpbuttonClickHandler = () => {
        props.signUpRedirect(true, false)
        details(userDetails);
        setFirstName();
        setLastName();
        setUsername();
        setAddress();
        setPwd();
        setMbl();
        setPincode();
    };
    return (
            <div>
                <form action="#" method="#" className={cls.Form}>
                    <input type="text" value={firstName} placeholder="First Name" onChange={(event)=> setFirstName(event.target.value)}/>
                    <input type="text" value={lastName} placeholder="Last Name" onChange={(event)=> setLastName(event.target.value)}/>
                    <input type="text" value={username} placeholder="Username" onChange={(event)=> setUsername(event.target.value)}/>
                    <input type="password" value={pwd}  placeholder="Password" onChange={(event)=> setPwd(event.target.value)}/>
                    <input type="text" value={address} placeholder="Address" onChange={(event)=> setAddress(event.target.value)}/>
                    <input type="number" value={mbl} placeholder="Mobile" onChange={(event)=> setMbl(event.target.value)}/>
                    <input type="number" value={pincode} placeholder="Pincode" onChange={(event)=> setPincode(event.target.value)}/>
                    <button type="submit" onClick={SignUpbuttonClickHandler}>SignUp</button>
                </form>
            </div>
    )
}

export default SignUp;