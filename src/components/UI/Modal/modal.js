import React from 'react'
import cls from "./modal.module.css"
import Backdrop from "../Backdrop/backdrop"

const Modal = props => (
    <>
<Backdrop show={props.show} closed={props.clicked} />
<div className={cls.Modal}style={{transform: props.show ? 'translateX(0)':'translateX(-100vh)',opacity: props.show ? '1':'0'}}>
    {props.children}
</div>
</>
)


export default Modal;