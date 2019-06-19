import React, { Component } from 'react';
import ResultBook from "./ResultBook";
import "./resultList.css";

export default class ResultList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const db = this.props;
        const search = this.props.searchString;
        let filteredBooks = db.resultList.filter(
            (book) => {
                return book.title.toLowerCase().indexOf(search.toLowerCase())  !== -1 || 
                book.author.toLowerCase().indexOf(search.toLowerCase() ) !==-1 ||
                book.description.toLowerCase().indexOf(search.toLowerCase()) !== -1||
                book.genre.toLowerCase().indexOf(search.toLowerCase() )!== -1 ||
                book.category.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                book.format.toLowerCase().indexOf(search.toLowerCase() )!== -1
            }
        );
        const resultElements = filteredBooks.map(book => {
            return <ResultBook key={book.id} resultItem={book} />
        })

            return (
                <div className="result-list-search">
                    {resultElements}
                </div>
            );
        }
}