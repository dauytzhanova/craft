import React, {Component} from "react";
import "./footer.css";

export default class Footer extends Component {
    render() {
        return(
            <footer className="footer">
        <div className="footer-upper">
            <div className="footer-logo-block">
                <h1 className="footer-logo">Craft</h1>
                <p className="footer-logo-address">2321 Kenmore Ave <br/>Buffalo, NY <br/>14207</p>
                <p className="footer-logo-email">Email: help@craft.com</p>
                <p className="footer-logo-phone">Phone: 1-888-402-7323</p>
            </div>    
        <div className="footer-list">
            <h3 className="list-title">Products</h3>
            <ul>
                <li>Browse</li>
                <li>New Arrivals</li>
                <li>Bestsellers</li>
                <li>Sale</li>
                <li>Get Discount</li>
            </ul>
        </div>
        <div className="footer-list">
                <h3 className="list-title">My Account</h3>
                <ul>
                    <li>Login</li>
                    <li>Wishlist</li>
                    <li>Create New Account</li>
                    <li>My Rewards</li>
                </ul>
        </div>
        <div className="footer-list">
                <h3 className="list-title">Help</h3>
                <ul>
                    <li>About Us</li>
                    <li>Ordering</li>
                    <li>Customer Service</li>
                    <li>Contact Us</li>
                </ul>
        </div>
    </div>
    
    </footer>
        
        );
    }
}