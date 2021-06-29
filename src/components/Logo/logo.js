import React from "react"
import burgerlogo from "../../assets/Images/burger-logo.png"
import cls from "./Logo.module.css"

const logo = () => (
    <div className={cls.Logo}>
    <img href="/"  src={burgerlogo} alt="burger-logo" />
    </div>
)
export default logo;