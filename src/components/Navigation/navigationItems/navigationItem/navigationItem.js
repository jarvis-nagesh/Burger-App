import React from 'react'
import cls from "./navigation.module.css"

const navigation = (props) => (
    <li className={cls.Navigation} >
        <a className={props.active ? cls.active : null} href={props.link} >{props.children}</a>
    </li>

)

export default navigation;