import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./resultBook.css";

export default class ResultBook extends Component {
    constructor(props){
        super(props);
    }
    render () {
        const {resultItem} = this.props;
        return (
            <div className="card">
            <div className="card-details">
                <img className="book-img" src={resultItem.image}/>
                <div className="book-title"><Link to={{
                    pathname: "/book",
                    state: {
                        id:resultItem.id,
                        title:resultItem.title,
                        author:resultItem.author,
                        category:resultItem.category,
                        genre:resultItem.genre,
                        format:resultItem.format,
                        isbn:resultItem.format,
                        description:resultItem.description,
                        publisher:resultItem.publisher,
                        image:resultItem.image,
                        price:resultItem.price,
                        size:resultItem.size,
                        publihedDate:resultItem.publihedDate,
                        language:resultItem.language
                    }
                }}>{resultItem.title}</Link></div>
                <div className="book-author">by {resultItem.author}</div>
                
            </div>    
        </div>
        );
    }
}