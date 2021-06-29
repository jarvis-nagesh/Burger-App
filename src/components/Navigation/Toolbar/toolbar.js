import React from 'react'
import cls from "./toolbar.module.css"
import Logo from "../../Logo/logo"
import NavigationItems from "../navigationItems/navigationItems"

const toolbar = (props) => (
    <header className={cls.Toolbar}>
        <div onClick={props.showDrawer} className={cls.Icon}>
            <div className={cls.Menu}></div>
            <div className={cls.Menu}></div>
            <div className={cls.Menu}></div>
        </div>
        <div ><Logo /></div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;