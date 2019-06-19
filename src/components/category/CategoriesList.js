import React, {Component} from 'react';
import CategoryElement from "./CategoryElement";
import "../newArrivals/arrivalsList.css";

export default function CategoriesList(db){
    const books=db.bookElements;
     const category = db.category;
    let filteredBooks = books.filter(
        (book) => { return book.category.toLowerCase().indexOf(category.toLowerCase()) !== -1 }
    ); 
    const BookElements = filteredBooks.map(book => {
        return <CategoryElement key={book.id} bookItem={book} />
     })
    
    

     return(
         <div className="arrivals-list">
             {BookElements}
         </div>
     );


}