import React, {Component} from "react";
import BookCard from "./BookCard";
import db from "./db";
import BookCardLists from "./BookCardLists";

export default class BookCards extends Component {
    render() {
        return (
            <BookCardLists bookElements = {db.books}/>
        );
    }

}