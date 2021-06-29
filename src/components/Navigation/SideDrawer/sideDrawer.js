import React from 'react'
import Logo from "../../Logo/logo"
import NavigationItems from "../navigationItems/navigationItems"
import cls from "./sidedrawer.module.css"
import Backdrop from "../../UI/Backdrop/backdrop"


const sidedrawer = props => {
    let classes = [cls.Sidedrawer, cls.Close]
    if (props.open) {
        classes = [cls.Sidedrawer, cls.Open]
    }
    return (
        <>
            <Backdrop show={props.open} closed={props.closed} />
            <div className={classes.join(' ')}>
                <Logo />
                <NavigationItems />
            </div>
        </>
    )
}

export default sidedrawer