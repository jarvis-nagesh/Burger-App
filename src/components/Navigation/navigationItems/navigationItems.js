import React from 'react'
import Navigation from './navigationItem/navigationItem'
import cls from "./navigationItems.module.css"

const navigations = (props) => (
    <ul className={cls.Navigations}>
        <Navigation link="" active ={true}>Burger Builder</Navigation>
    </ul>
)

export default navigations;