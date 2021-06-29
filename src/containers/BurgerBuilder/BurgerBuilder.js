import React, { Component } from 'react'
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/buildControls"
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from "../../components/Burger/orderSummary/orderSummary"
const ingredientPrizes = {
    Salad: 40,
    Bacon: 50,
    Cheese: 30,
    Meat: 45
}

class BurgerBuilder extends Component {

    state = {
        ingredient: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        },
        totalPrize: 4,
        perchase: true,
        perchasing: false

    }

    addIngredients = (type) => {
        const oldCount = this.state.ingredient[type];
        const updateCount = oldCount + 1;
        const updateIngredient = {
            ...this.state.ingredient
        };
        updateIngredient[type] = updateCount;
        const oldPrize = this.state.totalPrize;
        const newprize = oldPrize + ingredientPrizes[type];
        this.setState({
            ingredient: updateIngredient, totalPrize: newprize
        });
        this.updatePerchase(updateIngredient)
    }

    removeIngredients = (type) => {
        const oldCount = this.state.ingredient[type];
        if (oldCount <= 0) {
            return null
        }
        const updateCount = oldCount - 1;
        const updateIngredient = {
            ...this.state.ingredient
        };
        updateIngredient[type] = updateCount;
        const oldPrize = this.state.totalPrize;
        const newprize = oldPrize - ingredientPrizes[type];
        this.setState({
            ingredient: updateIngredient, totalPrize: newprize
        })
        this.updatePerchase(updateIngredient)
    }

    updatePerchase = (ingredient) => {
        const sum = Object.keys(ingredient).map(igkey => {
            return ingredient[igkey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({ perchase: sum <= 0 })
    }

    perchaseHandler = () => {
        this.setState({ perchasing: true })
    }

    summaryClosed = () => {
        this.setState({ perchasing: false })
    }

    cancelOrder = () => {
        this.summaryClosed();
    }

    successOrder = () => {
        alert("Order Placed");
        this.summaryClosed()
        window.location.reload()
    }

    render() {
        const disableInfo = {
            ...this.state.ingredient
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return <>
            <div style={{ marginTop: "60px" }} >
                <Modal show={this.state.perchasing} clicked={this.summaryClosed}>
                    <OrderSummary total={this.state.totalPrize} perchasing={this.state.perchasing} cancel={this.cancelOrder} success={this.successOrder} ingredient={this.state.ingredient} />
                </Modal>
                <div>
                    <Burger ingredient={this.state.ingredient} />
                </div>

                <div><BuildControls orderd={this.perchaseHandler} perchase={this.state.perchase} price={this.state.totalPrize} disableInfo={disableInfo} addIngredient={this.addIngredients} removeIngredients={this.removeIngredients} /></div>
            </div >
        </>
    }

}

export default BurgerBuilder