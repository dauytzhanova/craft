import React from "react";
import BookCard from "./BookCard";
import Slider from "react-slick";
import "../carousel/slick.css"; 
import "../carousel/slick-theme.css";
import "./bookCardsList.css";

export default function BookCardsList(db) {
    const BookElements = db.bookElements.map(book => {
        return <BookCard key={book.id} bookItem={book} />
     })

    const settings = {
            dots: false,
            arrows:true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,       
          };
    
    
    return (
        <div className="book-elements">
            <Slider {...settings}>
                {BookElements}
            </Slider>    
        </div>
    );

}