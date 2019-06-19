import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import "./cartItem.css";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
    }
    onNavigateBook = () => {
        browserHistory.push("/book");
    }

    removeFromCart(s) {
        console.log(s)
        sessionStorage.removeItem("item"+s);
    }
 
    render(){
        const {bookItem} = this.props;
        return(
            <div className="cart-item">
                <div className="item-info">
                    <img  className="item-info-img" src={bookItem.image}></img>
                    <div className="item-book-info">
                        <h5 className="item-book-title"><Link onClick={this.onNavigateBook} to="/book">{bookItem.title}</Link></h5>
                        <p className="item-book-author">{bookItem.author}</p>
                    </div>
                </div>
                <div className="item-details">
                    <div className="item-quantity">
                        <p>0</p>
                        <a className="remove-item" href="#" onClick={this.removeFromCart(bookItem.id)}>REMOVE</a>
                    </div>
                    <div className="item-price"><p>{bookItem.price}</p></div>
                    <div className="item-total"><p>{bookItem.price}</p></div>
                </div>  
            </div>
        );
    }
}