import React, {Component} from 'react';
import SellersElement from "./SellersElement";
import "../newArrivals/arrivalsList.css";

export default function SellersList(db){
    const books=db.bookElements;
    const BookElements = books.map(book => {
        return <SellersElement key={book.id} bookItem={book} />
     })

     return(
         <div className="arrivals-list">
             {BookElements}
         </div>
     );


}