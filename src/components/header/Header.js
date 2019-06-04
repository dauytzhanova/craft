import React, {Component} from "react";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a className="logo" href="#">Craft</a>
                <nav className="nav">
                    <a className="nav__link" href="#">Home</a>
                    <a className="nav__link" href="#">Cart</a>
                    <a className="nav__link" href="#">My Account</a>
                </nav>
                <div className="searh-filed">
                    <input type="text" className="search-input" placeholder="Search books"></input>
                    <button className="search-button">Search</button>
                </div>
            </div>
        )
    }
}

export default Header;