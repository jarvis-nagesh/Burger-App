import React from 'react'
import cls from "./backdrop.module.css"

const backdrop= props => {
    if(props.show){
        return <div onClick={props.closed} className={cls.Backdrop}></div>
    }
    return null;
}

export default backdrop;