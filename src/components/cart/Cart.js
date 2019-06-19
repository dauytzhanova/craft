import React, {Component} from 'react';
import CartItemsList from './CartItemsList';
import {Redirect} from "react-router-dom";
import "./cart.css";
import db from "../home/cards/db";

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            isLogInFalse: false,
        }
        this.buy = this.buy.bind(this);
    }
    buy() {
        if (this.state.isLogInFalse){
            return <Redirect to= "/login"/>    
        }else {
            alert("Thaks for using our Service!");
        }
        
    }
    render() {
        return (
            <div className="cart">
                <div className="cart-container">
                    <div className="cart-intro">
                        <div className="line"><h1 className="cart-intro-title"><span>Your Shopping Cart</span></h1></div>
                        <h3 className="cart-intro-shipping">YOU'RE $22.02 AWAY FROM FREE SHIPPING!</h3>
                        <p className="cart-intro-flat">Flat rate of $5 per order for anything under $35 to USA / Canada</p>
                    </div>
                    <CartItemsList itemsList = {db.books} />
                    <div className="subtotal">
                    <h3 className="subtotal-title">Subtotal</h3>
                    <h2 className="subtotal-price">$0</h2>
                </div>
                <button className="buy-button" onClick={this.buy}>Buy</button>
                </div>
                
            </div>
        );
    }
}