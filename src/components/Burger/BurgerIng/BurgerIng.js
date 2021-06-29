import React, { Component } from "react"
import cls from "./BurgerIng.module.css"
import Proptypes from "prop-types"

class BurgerIng extends Component {

    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ("BreadBottom"):
                ingredient = <div className={cls.BreadBottom}></div>
                break;

            case ("BreadTop"):
                ingredient = (<div className={cls.BreadTop}>
                    <div className={cls.Seeds1} ></div>
                    <div className={cls.Seeds2} ></div>
                </div>)
                break;

            case ("Salad"):
                ingredient = <div className={cls.Salad}></div>
                break;

            case ("Bacon"):
                ingredient = <div className={cls.Bacon}></div>
                break;

            case ("Cheese"):
                ingredient = <div className={cls.Cheese}></div>
                break;
            case ("Meat"):
                ingredient = <div className={cls.Meat}></div>
                break;



            default:
                ingredient = null;
        }
        return ingredient


    }
}

BurgerIng.propTypes = {
    type: Proptypes.string.isRequired
}


export default BurgerIng;

