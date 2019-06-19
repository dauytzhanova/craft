import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import "../cart/cartItem.css";

export default class WhishListItem extends Component {
    constructor(props) {
        super(props);
    }
    onNavigateBook = () => {
        browserHistory.push("/book");
    }

    removeFromWishList(s) {
        console.log(s)
        sessionStorage.removeItem("items"+s);
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
                <div className="item-details-w"><a href="#" className="item-w-remove" onClick={this.removeFromWishList(bookItem.id)}>REMOVE</a>
                   </div>  
            </div>
        );
    }
}