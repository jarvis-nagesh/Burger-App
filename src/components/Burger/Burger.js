import React from 'react'
import BurgerIng from "./BurgerIng/BurgerIng"
import cls from "./Burger.module.css"

const Burger = (props) => {

    let newIngredient = Object.keys(props.ingredient).map(igKey => {
        return [...Array(props.ingredient[igKey])].map((_, i) => {
            return <BurgerIng key={igKey + i} type={igKey} />
        });
    }).reduce((prevValue, currentValue) => {
        return prevValue.concat(currentValue);
    }, [])

    if(newIngredient.length === 0) {
       newIngredient = <p>Please add some ingredients !</p>
    }
    
    return (
        <>
            <div className={cls.Burger}>
                <BurgerIng type="BreadTop" />
                {newIngredient}
                <BurgerIng type="BreadBottom" />
            </div>
        </>
    )
}

export default Burger;