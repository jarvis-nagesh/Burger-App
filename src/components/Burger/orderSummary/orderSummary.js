import React, {  useEffect, useState } from 'react'
import Button from "../../UI/Button/button"
import cls from "./summary.module.css"


const OrderSummary = (props) => {
    const [userData, setUserData] = useState([{
        firstname:"demo.firstname",
        lastname:"demo.lastname",
        address:"demo.address",
        pincode:"demo.pincode",
        mbl:"demo.mbl"
    }])
    useEffect(() => {
        fetch('https://burger-app-5aee9-default-rtdb.firebaseio.com/users.json')
        .then(res => res.json())
        .then(data => {
            setUserData(data)
        })
    },[])
    const keys = Object.keys(userData).map(igkey => {
        return igkey
    })
    const key = keys[keys.length-1]
    const orderSummary = Object.keys(props.ingredient)
    .map(igkey => {
        return <li key={igkey}>{igkey}:{props.ingredient[igkey]}</li>
    })

    return(
        <> 
        <div className={props.perchasing ? cls.Show: cls.Hide}>
            <h2>Order Summary</h2>
            <h4>Shipping Address</h4>
            <p style={{fontSize:"15px", margin:"2px"}}><strong>Name:</strong> {userData[key].firstName +' '+ userData[key].lastName}</p>
            <p style={{fontSize:"15px", margin:"2px"}}><strong>Address:</strong> {userData[key].address}</p>
            <p style={{fontSize:"15px", margin:"2px"}}><strong>Number:</strong> {userData[key].mbl}</p>
            <p style={{fontSize:"15px", margin:"2px"}}><strong>Pincode:</strong> {userData[key].pincode}</p>
            <p><strong>Your order includes following ingredients.</strong></p>
            <ul>
                {orderSummary}
            </ul>
            <h2>Order Total: Rs {props.total}</h2>
            <h4>Continue Perchase ?</h4>
            <div className={cls.Button}>
            <Button btntype="Danger" clicked={props.cancel}>Cancel</Button>
            <Button btntype="Success" clicked={props.success}>Place Order</Button>
            </div>
        </div>
        </>
    )
}


export default OrderSummary;