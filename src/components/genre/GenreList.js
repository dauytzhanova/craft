import React, {Component} from 'react';
import GenreItem from "./GenreItem";
import "../newArrivals/arrivalsList.css";

export default function GenreList(db){
    const books=db.bookElements;
     const genre = db.genre;
    let filteredBooks = books.filter(
        (book) => { return book.genre.toLowerCase().indexOf(genre.toLowerCase()) !== -1 }
    ); 
    const BookElements = filteredBooks.map(book => {
        return <GenreItem key={book.id} bookItem={book} />
     })
    
    

     return(
         <div className="arrivals-list">
             {BookElements}
         </div>
     );


}