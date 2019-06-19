import React,  {Component} from "react";
import {Link} from 'react-router-dom';
import "./bookCard.css";

export default class BookCard extends Component {
    constructor(props){
        super(props);
    };
    
    render() {
        const {bookItem} = this.props; 
        return(
            <div className="card">
                <div className="card-details" >
                    <img  className="book-img" src={bookItem.image}/>
                    <div className="book-title"><Link to={{
                    pathname: "/book",
                    state: {
                        id:bookItem.id,
                        title:bookItem.title,
                        author:bookItem.author,
                        category:bookItem.category,
                        genre:bookItem.genre,
                        format:bookItem.format,
                        isbn:bookItem.format,
                        description:bookItem.description,
                        publisher:bookItem.publisher,
                        image:bookItem.image,
                        price:bookItem.price,
                        size:bookItem.size,
                        publihedDate:bookItem.publihedDate,
                        language:bookItem.language
                    }
                }}>{bookItem.title}</Link></div>
                </div>    
            </div>
            
        );
    }
}