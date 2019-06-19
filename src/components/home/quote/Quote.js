import React, {Component} from "react";
import "./quote.css";

export default class Quote extends Component{
    constructor(){
        super();
        this.state = {
            quotes: ["A room without books is like a body without a soul.","The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.","Good friends, good books, and a sleepy conscience: this is the ideal life.","If you only read the books that everyone else is reading, you can only think what everyone else is thinking."],
            authors: ["Marcus Tullius Cicero"," Jane Austen, Northanger Abbey","Mark Twain","Haruki Murakami, Norwegian Wood"],
        }
    }
    
    render() {
        const ran = Math.floor(Math.random() * (this.state.quotes.length)); 
        return(
            <div className="quote-bar">
                <h3 className="quote">" {this.state.quotes[ran]} "</h3>
                <h5 className="author"> - {this.state.authors[ran]}</h5>
            </div>
        );
    }


}