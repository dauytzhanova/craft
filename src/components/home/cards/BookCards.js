import React, {Component} from "react";
import db from "./db";
import BookCardsList from "./BookCardsList";
import "./bookCards.css"

export default class BookCards extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.state = {
          popupVisible: false,
          books:[],
        };
      }
      

      handleClick() {
        if (!this.state.popupVisible) {
          // attach/remove event handler
          document.addEventListener('click', this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
    
        this.setState(prevState => ({
           popupVisible: !prevState.popupVisible,
        }));
      }
      
      handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }
        
        this.handleClick();
      }
    
      

      render() {
        return (
            <div className="book-cards" onLoad={this.getPhp}>
                <h2 className="cards-title">TOP BOOKS</h2>
                <p className="title-desc">The Top 10 book chosen by 125 top writers from the book "The Top 10" edited by J. Peder Zane.</p>
                
                <div className="dropdown" ref={node => { this.node = node; }}>
                    <button onClick={this.handleClick} className="dropbtn">Sort By<i className="arrow down"></i></button>
                    {this.state.popupVisible && (
                        <div id="myDropdown" className="dropdown-content">
                            <a href="#">Price</a>
                            <a href="#">Year</a>
                            <a href="#">A-Z</a>
                            <a href="#">Z-A</a>
                        </div>)}
                </div>
                <BookCardsList bookElements = {db.books}/>
            </div>


        );
        
    }

}