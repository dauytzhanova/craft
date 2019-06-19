import React, {Component} from 'react';
import WishList from './WishList';
import "../cart/cart.css";
import db from "../home/cards/db";

export default class MyWishlist extends Component {
    render() {
        return (
            <div className="cart">
                <div className="cart-container">
                    <div className="cart-intro">
                        <div className="line"><h1 className="cart-intro-title"><span>My WhishList</span></h1></div>
                        <p className="cart-intro-flat">Flat rate of $5 per order for anything under $35 to USA / Canada</p>
                    </div>
                    <WishList itemsList = {db.books} />
                </div>
                
            </div>
        );
    }
}