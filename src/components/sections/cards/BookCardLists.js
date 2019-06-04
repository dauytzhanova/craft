import React, {Component} from "react";
import BookCard from "./BookCard";

export default function BookCardLists(db) {
    const BookElements = db.bookElements.map(book => {
       return <BookCard key={book.books_id} bookItem={book} />
    })

    return (
        <div>
            {BookElements}
        </div>
    );

}