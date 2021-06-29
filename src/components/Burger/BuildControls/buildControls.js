import React from 'react'
import BuildControl from "./BuildControl/buildControl"
import cls from "./buildControls.module.css"

const controls = [
    {label : 'Salad', type : 'Salad'},
    {label : 'Bacon', type : 'Bacon'},
    {label : 'Cheese', type : 'Cheese'},
    {label : 'Meat', type : 'Meat'},
]
const BuildControls = (props) => (
    <div className = {cls.BuildControls}>
        <h3><strong>Amount: {props.price}</strong></h3>
        {controls.map(cntrl => (
            <BuildControl disable={props.disableInfo[cntrl.type]} key={cntrl.label} added={()=> props.addIngredient(cntrl.type)}
             remove={()=>props.removeIngredients(cntrl.type)} label={cntrl.label} type = {cntrl.type}  />
        ))}
        <button className={cls.OrderButton} onClick={props.orderd} disabled={props.perchase}>Order Now</button>
    </div>
)

export default BuildControls;