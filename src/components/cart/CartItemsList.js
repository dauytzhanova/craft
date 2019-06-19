import React, {Component} from 'react';
import CartItem from "./CartItem";
import "./cartItemsList.css";

export default class CartItemsList extends Component {
    constructor(props){
        super(props);
    }
    

    
    render(){
        const CartItems = this.props.itemsList.map(book => {
            if(sessionStorage.getItem('item'+book.id)){
                return <CartItem key={book.id} bookItem={book}/>}
         })    
        return(
            <div>
                <div className="cart-list-header">
                <strong className="strong-Item">Item</strong>
                <div className="cart-item-header-details">
                    <strong>Quantity</strong>
                    <strong>Price</strong>
                    <strong>Total</strong>
                </div>
                </div>
                <div className="cart-items">
                    {CartItems}
                </div>
                <div className="cart-list-total"></div>
            </div>
        );
    }
}