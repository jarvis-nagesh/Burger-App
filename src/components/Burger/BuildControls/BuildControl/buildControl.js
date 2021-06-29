import React from 'react'
import cls from "./buildControl.module.css"

const BuildControl = (props) => {
    return(
        <div className = {cls.BuildControl}>
            <div className={cls.Label}><strong>{props.label}:  </strong></div>
            <button className={cls.Less} onClick = {props.remove} disabled= {props.disable}>-</button>
            <button className={cls.More} onClick = {props.added}>+</button>
        </div>
    )
}

export default BuildControl;