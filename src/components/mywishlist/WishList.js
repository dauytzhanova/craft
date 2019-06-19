import React, {Component} from 'react';
import WhishListItem from "./WishListItem";
import "../cart/cartItemsList.css";

export default class WishList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const CartItems = this.props.itemsList.map(book => {
            if(sessionStorage.getItem('item'+book.id)){
                return <WhishListItem key={book.id} bookItem={book}/>}
         })    
        return(
            <div>
                <div className="cart-items">
                    {CartItems}
                </div>
                <div className="cart-list-total"></div>
            </div>
        );
    }
}