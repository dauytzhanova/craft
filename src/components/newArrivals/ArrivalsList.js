import React, {Component} from 'react';
import ArrivalsElement from "./ArrivalsElement";
import "./arrivalsList.css";

export default function ArrivalsList(db){
    const books=db.bookElements;
    const BookElements = books.map(book => {
        return <ArrivalsElement key={book.id} bookItem={book} />
     })

     return(
         <div className="arrivals-list">
             {BookElements}
         </div>
     );


}