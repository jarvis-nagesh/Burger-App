import React from 'react'
import cls from "./button.module.css"

const button = props => (
     <button className={[cls.Button, cls[props.btntype]].join(' ')} onClick={props.clicked}>
         {props.children}
     </button>
)

export default button;